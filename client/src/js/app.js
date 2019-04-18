import { $, flatten } from './utils';
import { makeMap, setWater, setAir, setWall, setLadder } from './mapMaker';
import { renderMap } from './mapRenderer';
import * as TEXT from "./text"
import Camera from './camera'
// for some reason the normal import isn't working :P
import Shapes from './shapes';
const {Rectangle, Point} = Shapes;



import levelBank from './levels'

const screen = $("#scuba");
const statusbar = $("#status_bar");
const sidebarTarget = $("#sidebar_target");

const renderStatus = (map, target) => {
  target.innerHTML = `Oxygen: ${map.player.oxygen}/ ${map.player.maxOxygen }`;
}
const renderSidebar = (message) => {
  sidebarTarget.innerHTML = message;
};

// PUBSUB to output systems, like a render trigger, sound and music, should there be any

// SETUP LEVELS
const levels = [];
for(let l in levelBank.levels){
  levels.push(levelBank.levels[l]);
}
const urlParams = new URLSearchParams(window.location.search);
let levelIndex = +urlParams.get('level') || 0;
levelIndex = Math.min(levelIndex, levels.length - 1);

// we'll move player outside of the map
const colorText = (text, color) => `<span style="color:${color}">${text}</span>`
const trimLines = text => {
  return text.split('\n').map(l => l.trim()).join('\n');
};
const indentLines = (text, spaces) => {
  const arr = [];
  arr.length = spaces;
  const indent = arr.fill(' ').join('');
  return text.split('\n').map(l => indent + l).join('\n');
};

const describeCell = cell => {
  let cellType = 'Unknown';
  if(cell.water){ cellType="water" }
  else if(cell.air){ cellType="air" }
  else if(cell.wall){ cellType="wall" }
  else if(cell.ladder){ cellType="ladder" }
  return trimLines(`
    ${cellType}
    X: ${cell.x}, Y: ${cell.y}
  `).trim();
};

const world = {
  player: {},// TODO: extract the player from the map and put them here
  map: levels[levelIndex],
  camera: Camera.make(Rectangle.make(0,0,30,10)),
  update: function(){
    Camera.updateTracking(world.camera, world.map.getBounds())
    // Move this to just being rendering the world
    renderMap(world.map, screen, world.camera.frame);
    renderStatus(world.map, statusbar);
  },
  nextMap: function(){
    renderSidebar(TEXT.WIN);
    levelIndex = (levelIndex + 1) % levels.length;
    this.map = levels[levelIndex];
    this.camera.target = this.map.player;
    this.update();
  }
};
world.camera.target = world.map.player;
world.update();
renderSidebar(TEXT.START);


const canPlayerMove = (player, direction, map) => {
  const targetPoint = Point.add(player, direction);

  // FORCE US TO STAY IN BOUNDS
  if(!Rectangle.containsPoint(map.getBounds(), targetPoint)){
    // EXTERNAL, perhaps we can have an event
    // handle this
    renderSidebar(TEXT.OUT_OF_BOUNDS);
    return false;
  }

  // SHORTCUTS FOR OUR CELLS
  const source = map.getGraphTraverser(player.x, player.y);
  const destination = map.getGraphTraverser(targetPoint.x, targetPoint.y);

  const movingUp = direction.y < 0;
  const movingDown = direction.y > 0;
  const movingLeft = direction.x < 0;
  const movingRight = direction.x > 0;
  const below = source.peek(Point.DOWN);
  const hasFloor = (below == null || below.wall || below.ladder);
  // CAN'T MOVE INTO A WALL
  if(destination.current.wall){
    if(movingDown){
      renderSidebar(TEXT.WALL_DOWN);
    } else {
      renderSidebar(TEXT.WALL);
    }
    return false;
  }
  // if the destination is air, we must be moving from a floor or water
  else if(destination.current.air){
    if(movingDown){
      return true;
    }
    else if(movingUp){
      if(!source.current.ladder){
        renderSidebar(TEXT.NO_JUMP);
        return false;
      } else {
        return true;
      }
    }
    else if(movingLeft || movingRight){
      if(!hasFloor && source.current.air){
        renderSidebar(TEXT.AIR_WALK);
        return false;
      } else {
        return true;
      }
    }
  }
  else if(destination.current.water){
    // we can always enter water
    return true;
  } else if(destination.current.ladder){
    // we can always enter a ladder
    return true;
  } else {
    // anything else, assume no
    return false;
  }
};
// oxygen doesn't travel along corners
const checkOxygen = traverser => {
  const cells = [traverser.current, ...traverser.getCellNeighbors()];
  return cells.some(cell => !cell.water && !cell.wall);
}

const handleDeath = (player, map) => {
  renderSidebar(TEXT.DEATH);
  Point.set(player, map.start);
  player.oxygen = player.maxOxygen;
}

const tryMovePlayer = (direction, map) => {
  const { player } = map;
  if(!canPlayerMove(player, direction, map)){
    return false;
  }
  const source = map.getGraphTraverserP(player);
  const destination = map.getGraphTraverserP(Point.add(player, direction));

  // Oxygen Check
  if(!checkOxygen(source) && !checkOxygen(destination)){
    player.oxygen -= 1;
    if(player.oxygen === 2){
      renderSidebar(TEXT.LOW_OXYGEN);
    }
    else if(player.oxygen === 0){
      renderSidebar(TEXT.CRITICAL_OXYGEN);
    }
    else if(player.oxygen < 0){
      handleDeath(player, map)
      return false;
    }
  } else {
    if(player.oxygen <= 2){
      renderSidebar(TEXT.LOW_OXYGEN_RELIEF);
    }
    player.oxygen = player.maxOxygen;
  }
  // Actually move the player
  Point.addTo(player, direction);

  // Process Level End
  if(Point.equal(player, map.exit)){
    world.nextMap();
  }
}

// UI SECTION
document.onkeydown = function(e){
  const preventDefaultList = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
  if(preventDefaultList.includes(e.key)){
    e.preventDefault();
  }
  switch(e.key){
    case "ArrowLeft":
      tryMovePlayer(Point.make(-1, 0), world.map);
      break;
    case "ArrowRight":
      tryMovePlayer(Point.make(1,0), world.map);
      break;
    case "ArrowUp":
      tryMovePlayer(Point.make(0,-1), world.map);
      break;
    case "ArrowDown":
      tryMovePlayer(Point.make(0,1), world.map);
      break;
    default:
      console.log("unused key");
  }
  world.update();
};


document.onmousemove = function(e){
  if(e.path.length > 0){
    const primeElement = e.path[0];
    if(primeElement.className === "cell"){
      const x = +primeElement.getAttribute("x");
      const y = +primeElement.getAttribute("y");
      const cell = world.map.getCell(x,y);
      console.log(describeCell(cell));
      $("#tile_preview").innerHTML = describeCell(cell)
    }
  }
};
