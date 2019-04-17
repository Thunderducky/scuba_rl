const make = (x,y) => {
  return {x,y}
}
const copy = p => make(p.x, p.y);

const set = (changed, value) => {
  changed.x = value.x;
  changed.y = value.y;
  return changed;
}
const add = (a,b) => {
  return make(a.x + b.x, a.y + b.y)
}

const addTo = (changed, value) => {
  changed.x += value.x;
  changed.y += value.y;
  return changed;
}

const from = obj => {
  return make(obj.x, obj.y);
}

const equal = (a,b) => {
  return a.x === b.x && a.y === b.y;
};

export default {
  make,
  equal,
  set,
  copy,
  from,
  add,
  addTo
}
