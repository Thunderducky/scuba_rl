import { $, flatten } from './utils';
export const makeCell = () => {
  return {
    color: "white",
    character: ".",
    wall: false,
    ladder: false,
    water:false,
    air: true
  }
}

const zeroTypes = cell => {
  cell.wall =  false,
  cell.ladder =  false,
  cell.water = false;
  cell.air = false;
};

export const setWater = cell => {
  cell.color = "blue";
  cell.character = "~";
  zeroTypes(cell);
  cell.water = true;
  return cell;
};
export const setAir = cell => {
  cell.color = "white";
  cell.character = ".";
  zeroTypes(cell);
  cell.air = true;
  return cell;
};
export const setWall = cell => {
  cell.color = "green";
  cell.character = "=";
  zeroTypes(cell);
  cell.wall = true;
  return cell;
};

export const setLadder = cell => {
  cell.color = "red";
  cell.character = "H";
  zeroTypes(cell);
  cell.ladder = true;
  return cell;
}

export const makeMap = (params) => {
  const cells = [];
  for(let y = 0; y < params.height; y++){
    const line = [];
    for(let x = 0; x < params.width; x++){
      line.push(makeCell());
    }
    cells.push(line);
  }
  return {
    _cells: cells,
    start: {
      x: 4,
      y:2
    },
    exit: {
      x: 10,
      y: 10
    },
    player: {
      x: 4,
      y:2,
      oxygen: 10,
      maxOxygen: 10
    },
    width: params.width,
    height: params.height,
    getPatch: function(box){
      return this._cells
        .filter((_, y) => y >= box.y && y < box.y + box.height) // calculate in y range)
        .map(line => line.slice(box.x, box.x + box.width));
    },
    getCell: function(x,y){
      if(y < 0 || y >= this._cells.length){
        return undefined;
      }
      return this._cells[y][x];
    },
    getCellNeighbors: function(x,y){
      const neighbors = [
        this.getCell(x, y-1),
        this.getCell(x+1,y),
        this.getCell(x, y + 1),
        this.getCell(x - 1, y)
      ];
      return neighbors.filter(n => !!n);
    },
    getPatchFlat: function(box){
      return flatten(this.getPatch(box));
    },
    getAll: function(){
      return this._cells.map(l => l);
    },
    getAllFlat: function(){
      return flatten(this._cells.map(l => l));
    },
    getGraphTraverser: function(){
      throw "Not Implemented Yet";
    }
  }
}
