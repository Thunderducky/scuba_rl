import { $, flatten } from './utils';
import Shapes from "./shapes";
import GAME_SYMBOLS from "./symbols";
export const makeCell = (x,y) => {
  return {
    x,
    y,
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
  cell.color = "white";
  cell.background = "blue";
  cell.character = GAME_SYMBOLS.WATER;
  zeroTypes(cell);
  cell.water = true;
  return cell;
};
export const setAir = cell => {
  cell.color = "darkgray";
  cell.character = GAME_SYMBOLS.AIR;
  zeroTypes(cell);
  cell.air = true;
  return cell;
};
export const setWall = cell => {
  cell.color = "lightgray";
  cell.background = "darkgray";
  cell.character = GAME_SYMBOLS.WALL;
  zeroTypes(cell);
  cell.wall = true;
  return cell;
};

export const setLadder = cell => {
  cell.color = "brown";
  cell.background ="darkgray";
  cell.character = GAME_SYMBOLS.LADDER;
  zeroTypes(cell);
  cell.ladder = true;
  return cell;
}

export const makeMap = (params) => {
  const cells = [];
  for(let y = 0; y < params.height; y++){
    const line = [];
    for(let x = 0; x < params.width; x++){
      line.push(makeCell(x,y));
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
    getBounds: function(){
      return Shapes.Rectangle.make(0, 0, this.width, this.height);
    },
    getCell: function(x,y){
      if(y < 0 || y >= this._cells.length){
        return undefined;
      }
      return this._cells[y][x];
    },
    getCellP: function(p){
      return this.getCell(p.x, p.y);
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
    getGraphTraverser: function(x,y){
      const map = this;
      return {
        current: map.getCell(x,y),
        getCellNeighbors: function(){
          return map.getCellNeighbors(this.current.x, this.current.y);
        },
        peek: function(offset){
          return map.getCell(offset.x + this.current.x, offset.y + this.current.y);
        },
        move: function(offset){
          this.current = map.getCell(offset.x + this.current.x, offset.y + this.current.y);
          return this.current;
        }

      }
    },
    getGraphTraverserP: function(p){
      return this.getGraphTraverser(p.x, p.y)
    }

  }
}
