import Point from "./point";

const clamp = (lower, upper, t) => {
  if(t < lower) return lower;
  if(t > upper) return upper;
  return t;
}

// todo: could it be worth it to give this thing some convenience setters?
const make = (x,y, width, height) => {
  return {x,y,width,height}
}

const copy = r => make(r.x, r.y, r.width, r.height);

const topLeft = rect => Point.make(rect.x, rect.y);
const topRight = rect => Point.make(rect.x + rect.width, rect.y);
const bottomLeft = rect => Point.make(rect.x, rect.y + rect.height);
const bottomRight = rect => Point.make(rect.x + rect.width, rect.y + rect.height);

const containsPoint = (rect, point) => {
  return rect.x <= point.x &&
         rect.x + rect.width > point.x &&
         rect.y <= point.y &&
         rect.y + rect.height > point.y;
}

const containsRectangle = (outer, inner) => {
  return containsPoint(outer, topLeft(inner)) &&
         containsPoint(outer, topRight(inner)) &&
         containsPoint(outer, bottomLeft(inner)) &&
         containsPoint(outer, bottomRight(inner));
}

const getCenter = (rectangle) => {
  return Point.make(rectangle.x + rectangle.width/2, rectangle.y + rectangle.height/2);
};
const setCenter = (rectangle, centerPoint) => {
  Point.set(rectangle, Point.add(centerPoint, Point.make(-rectangle.width/2, -rectangle.height/2)))
  return rectangle;
};

const clampPoint = (rectangle, point) => {
  point.x = clamp(rectangle.x, rectangle.x + rectangle.width, point.x);
  point.y = clamp(rectangle.y, rectangle.y + rectangle.height, point.y);
  return point;
}

// TODO: Write tests for this one
const clampRectangle = (rectContainer, rectInsider) => {
  if(rectInsider.width > rectContainer.width || rectInsider.height > rectContainer.height){
    throw new Error("cannot clamp a rectangle into a smaller rectangle");
  }
  // We are now guaranteed the insider will fit, now to just determine from what direction
  // We will start by clamping the topLeft, and then the bottomRight
  clampPoint(rectContainer, rectInsider);
  const netBottomRight = clampPoint(rectContainer, bottomRight(rectInsider));
  Point.set(rectInsider, Point.add(netBottomRight, Point.make(-rectInsider.width, -rectInsider.height)))
};

export default {
  make,
  copy,
  getCenter,
  setCenter,
  containsPoint,
  containsRectangle,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  clampPoint,
  clampRectangle
}
