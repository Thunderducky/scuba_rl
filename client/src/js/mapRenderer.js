// We'll reorganize this at some point

// LOTS OF REFACTOR TO DO
const _renderCell = (map, cell, x, y, cameraX = 0, cameraY = 0) => {
  if(map.player.x === x + cameraX && map.player.y === y + cameraY){
    return `<span class="cell"  x="${x}" y="${y}" style="color:yellow">@</span>`
  } else if (map.exit.x === x + cameraX && map.exit.y === y + cameraY) {
    return `<span class="cell"  x="${x}" y="${y}" style="color:yellow">!</span>`
  } else {
    return `<span class="cell" x="${x}" y="${y}" style="color:${cell.color}">${cell.character}</span>`
  }
}

const renderMap = (map, target, cameraBox) => {
  const renderCells = cameraBox === undefined ? map.getAll() : map.getPatch(cameraBox);
  cameraBox = cameraBox || {};
  cameraBox.x = cameraBox.x || 0;
  cameraBox.y = cameraBox.y || 0;
  target.innerHTML = renderCells.map((line, y) => {
    return line.map((c,x) => _renderCell(map, c, x, y, cameraBox.x, cameraBox.y)).join('');
  }).join('\n');
};

module.exports = {
  renderMap
};
