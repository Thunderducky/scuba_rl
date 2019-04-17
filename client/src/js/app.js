import { $, flatten } from './utils';
import { makeMap, setWater, setAir, setWall, setLadder } from './mapMaker';
import { renderMap } from './mapRenderer';
import * as TEXT from "./text"
import Camera from './camera'
// for some reason the normal import isn't working :P
import Shapes from './shapes';
const {Rectangle, Point} = Shapes;

import levelBank from './levels'
console.log(levelBank);
const screen = $("#scuba");
const statusbar = $("#status_bar");
const sidebarTarget = $("#sidebar_target");

const map = levelBank.levels.test_level; //makeMap({width:50,height:20});
console.log(map);
const camera = Camera.make(Rectangle.make(0,0,30, 10), map.player);
const renderStatus = (map, target) => {
  target.innerHTML = `Oxygen: ${map.player.oxygen}/ ${map.player.maxOxygen }`;
}

const renderSidebar = (message) => {
  sidebarTarget.innerHTML = message;
};
Camera.updateTracking(camera, Rectangle.make(0,0,map.width, map.height));
renderMap(map, screen, camera.frame);
renderStatus(map, statusbar);
renderSidebar(TEXT.START);


const tryMovePlayer = (direction, cameraBox, map) => {
  const { player } = map;
  const mapBox = Rectangle.make(0, 0, map.width, map.height);
  const netMove = Point.add(player, direction);

  const source = map.getCell(player.x, player.y);
  const destination = map.getCell(netMove.x, netMove.y);

  // destination blockers
  if(!Rectangle.containsPoint(mapBox, netMove)){
    renderSidebar(TEXT.OUT_OF_BOUNDS);
    return false;
  }
  if(destination.wall){
    renderSidebar(TEXT.WALL)
    return false;
  }

  const hasFloor = (x,y) => {
    const lower = map.getCell(x, y+1);
    return lower.wall || lower.ladder;
  };

  if(source.air && !hasFloor(player.x, player.y) && direction.y <= 0){ // potentially allow a diagnol in the future
    renderSidebar(TEXT.AIR_WALK);
    return false;
  }
  if(source.air && direction.y < 0){
    renderSidebar(TEXT.NO_JUMP);
    return false;
  }

  // HANDLE OXYGEN SUPPLY
  const hasOxygen = p => [map.getCell(p.x,p.y), ...map.getCellNeighbors(p.x,p.y)].some(cell => !cell.water && !cell.wall);
  if(!hasOxygen(player) && !hasOxygen(netMove)){
    player.oxygen -= 1;
    if(player.oxygen < 0){
      renderSidebar(`
        You awaken where you once began
        perhaps wiser than before...`
      );
      Point.set(player, map.start);
      player.oxygen = 10;
      Camera.updateTracking(camera, Rectangle.make(0,0,map.width, map.height));
      return false;
    }
  } else {
    player.oxygen = player.maxOxygen;
  }
  Point.addTo(player, direction);

  if(Point.equal(player, map.exit)){
    renderSidebar("You have won... for now.")
    Point.set(player, map.start);
  }


  // tryMoveCamera(direction, cameraBox, map);
  Camera.updateTracking(camera, Rectangle.make(0,0,map.width, map.height));
  return true;
}

// UI SECTION
document.onkeydown = function(e){
  const preventDefaultList = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
  if(preventDefaultList.includes(e.key)){
    e.preventDefault();
  }
  switch(e.key){
    case "ArrowLeft":
      tryMovePlayer(Point.make(-1, 0), camera.frame, map);
      break;
    case "ArrowRight":
      tryMovePlayer(Point.make(1,0), camera.frame, map);
      break;
    case "ArrowUp":
      tryMovePlayer(Point.make(0,-1), camera.frame, map);
      break;
    case "ArrowDown":
      tryMovePlayer(Point.make(0,1), camera.frame, map);
      break;
    default:
      console.log("unused key");
  }
  renderMap(map, screen, camera.frame);
  renderStatus(map, statusbar);
};

// Helper Function
document.onclick = function(e){
  const rootEls = e.path.filter(el => el.className === "cell");
  if(rootEls.length > 0){
    const rootEl = rootEls[0];
    const x = +rootEl.getAttribute("x");
    const y = +rootEl.getAttribute("y");
    console.log(map.getCell(x,y));
    if(x === map.player.x && y === map.player.y){
      console.log("Player");
      console.log(map.player);
    }
  }
}

// TODO: FIXME!
document.onmouseover = function(e){
  // const rootEls = e.path.filter(el => el.className === "cell");
  // let result = "";
  // if(rootEls.length > 0){
  //   const rootEl = rootEls[0];
  //   const x = +rootEl.getAttribute("x") - camera.frame.x;
  //   const y = +rootEl.getAttribute("y") - camera.frame.y;
  //   console.log(map.getCell(x, y));
  //
  //   const cell = map.getCell(x,y);
  //   if(cell.air){
  //     result += " Air "
  //   }
  //   else if(cell.ladder){
  //     result += " Ladder "
  //   }
  //   else if(cell.water){
  //     result += " Water "
  //   }
  //   else if(cell.wall){
  //     result += " Wall "
  //   }
  //   if(x === map.player.x && y === map.player.y){
  //     result += "- Player";
  //   }
  //   if(x === map.exit.x && y === map.exit.y){
  //     result += "- Exit";
  //   }
  // }
  // statusbar.innerHTML = result;
}
