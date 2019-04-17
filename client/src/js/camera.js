import Shapes from './shapes';
const {Rectangle, Point} = Shapes;
const make = (frame, target) => {
  return {
    frame: Rectangle.copy(frame),
    target // should be a point, but doesn't have to be
  }
}

const updateTracking = (camera, bounds)  => {
  if(camera.target){
    if(!Rectangle.containsPoint(bounds, camera.target)){
      console.log("Cannot track target")
      console.log(bounds, camera, camera.target)
      return false;
    }

    Rectangle.setCenter(camera.frame, camera.target);

    // Avoid problems with cameras with uneven
    camera.frame.x = Math.floor(camera.frame.x);
    camera.frame.y = Math.floor(camera.frame.y);

    Rectangle.clampRectangle(bounds, camera.frame);
    return true;
  } else {
    return false;
  }
}

export default {
  make,
  updateTracking
}
