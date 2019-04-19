import GAME_SYMBOLS from './symbols';
// We'll reorganize this at some point
import Shapes from './shapes';
// LOTS OF REFACTOR TO DO

// TODO allow us to set background colors
const _renderCell = (map, player,  cell, x, y, cameraX = 0, cameraY = 0) => {
  const mapPoint = Shapes.Point.make(x + cameraX, y + cameraY);
  if(player.x === x + cameraX && player.y === y + cameraY){
    return `<span class="cell"  x="${mapPoint.x}" y="${mapPoint.y}" style="color:yellow; ${cell.background ? `background:${cell.background}` : '' }">${GAME_SYMBOLS.PLAYER}</span>`
  } else if (map.exit.x === x + cameraX && map.exit.y === y + cameraY) {
    return `<span class="cell"  x="${mapPoint.x}" y="${mapPoint.y}" style="color:yellow">${GAME_SYMBOLS.EXIT}</span>`
  } else {
    return `<span class="cell" x="${mapPoint.x}" y="${mapPoint.y}" style="color:${cell.color};${cell.background ? `background:${cell.background}` : '' }">${cell.character}</span>`
  }
}

export const renderWorld = (world, target) => {
  //debugger;
  let cameraBox = world.camera.frame;
  const {map, player} = world;
  const renderCells = cameraBox === undefined ? map.getAll() : map.getPatch(cameraBox);
  cameraBox = cameraBox || {};
  cameraBox.x = cameraBox.x || 0;
  cameraBox.y = cameraBox.y || 0;
  target.innerHTML = renderCells.map((line, y) => {
    return line.map((c,x) => _renderCell(map, player, c, x, y, cameraBox.x, cameraBox.y)).join('');
  }).join('\n');
};
