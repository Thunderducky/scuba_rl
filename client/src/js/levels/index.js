import { makeMap, makeCell, setWater, setAir, setWall, setLadder } from '../mapMaker';
import { flatten } from '../utils';
import Shapes from '../shapes';
// shove an eval in here? probably wouldn't work :P
import * as test_level from './test_level';
import * as test_level2 from './test_level2';
import * as test_level3 from './test_level3';


const stringToMap = (str) => {
  const lines = str.trim().split('\n');
  const map = makeMap({height: lines.length, width: lines[0].replace(/\s/g, '').length })
  const all = map.getAllFlat();
  const clearedLines = str.replace(/\s/g, '');
  for(let i = 0; i < clearedLines.length; i++){
    const letter = clearedLines[i];
    const cell = all[i];
    switch(letter){
      case '~':
        setWater(cell);
        break;
      case '.':
        setAir(cell);
        break;
      case 'H':
        setLadder(cell);
        break;
      case '=':
       setWall(cell);
       break;
      default:
        setAir(cell);
        break;
    }
  }
  return map;
}

const buildMap = level => {
  const map = stringToMap(level.levelData)
  Shapes.Point.set(map.start, level.start);
  Shapes.Point.set(map.exit, level.exit);
  Shapes.Point.set(map.player, map.start);
  return map;
}

const printMap = map => {
  map.getAll().forEach(line => {
    console.log(line.map(c => c.character).join(""));
  });
};

// build more level stuff

export default {
  stringToMap,
  buildMap,
  printMap,
  levels: {
    test_level : buildMap(test_level),
    test_level2 : buildMap(test_level2),
    test_level3 : buildMap(test_level3),
  }
}
