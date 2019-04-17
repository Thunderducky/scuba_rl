/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/js/app.js":
/*!******************************!*\
  !*** ./client/src/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./client/src/js/utils.js");
/* harmony import */ var _mapMaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapMaker */ "./client/src/js/mapMaker.js");
/* harmony import */ var _mapRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapRenderer */ "./client/src/js/mapRenderer.js");
/* harmony import */ var _mapRenderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mapRenderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "./client/src/js/text.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camera */ "./client/src/js/camera.js");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shapes */ "./client/src/js/shapes/index.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./levels */ "./client/src/js/levels/index.js");





// for some reason the normal import isn't working :P

const { Rectangle, Point } = _shapes__WEBPACK_IMPORTED_MODULE_5__["default"];



const screen = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["$"])("#scuba");
const statusbar = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["$"])("#status_bar");
const sidebarTarget = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["$"])("#sidebar_target");

const levels = [];
for (let l in _levels__WEBPACK_IMPORTED_MODULE_6__["default"].levels) {
  console.log(l);
  levels.push(_levels__WEBPACK_IMPORTED_MODULE_6__["default"].levels[l]);
}
console.log(levels);

const urlParams = new URLSearchParams(window.location.search);
let levelIndex = +urlParams.get('level') || 0;
levelIndex = Math.min(levelIndex, levels.length - 1);

let map = levels[levelIndex]; //levels[levelIndex]; //makeMap({width:50,height:20});
let camera = _camera__WEBPACK_IMPORTED_MODULE_4__["default"].make(Rectangle.make(0, 0, 30, 10), map.player);
const renderStatus = (map, target) => {
  target.innerHTML = `Oxygen: ${map.player.oxygen}/ ${map.player.maxOxygen}`;
};

const renderSidebar = message => {
  sidebarTarget.innerHTML = message;
};
_camera__WEBPACK_IMPORTED_MODULE_4__["default"].updateTracking(camera, Rectangle.make(0, 0, map.width, map.height));
Object(_mapRenderer__WEBPACK_IMPORTED_MODULE_2__["renderMap"])(map, screen, camera.frame);
renderStatus(map, statusbar);
renderSidebar(_text__WEBPACK_IMPORTED_MODULE_3__["START"]);

const tryMovePlayer = (direction, cameraBox, _map) => {
  const { player } = _map;
  const mapBox = Rectangle.make(0, 0, _map.width, _map.height);
  const netMove = Point.add(player, direction);

  const source = _map.getCell(player.x, player.y);
  const destination = _map.getCell(netMove.x, netMove.y);

  // destination blockers
  if (!Rectangle.containsPoint(mapBox, netMove)) {
    renderSidebar(_text__WEBPACK_IMPORTED_MODULE_3__["OUT_OF_BOUNDS"]);
    return false;
  }
  if (destination.wall) {
    renderSidebar(_text__WEBPACK_IMPORTED_MODULE_3__["WALL"]);
    return false;
  }

  const hasFloor = (x, y) => {
    const lower = _map.getCell(x, y + 1);
    return lower.wall || lower.ladder;
  };

  if (source.air && !hasFloor(player.x, player.y) && direction.y <= 0) {
    // potentially allow a diagnol in the future
    renderSidebar(_text__WEBPACK_IMPORTED_MODULE_3__["AIR_WALK"]);
    return false;
  }
  if (source.air && direction.y < 0) {
    renderSidebar(_text__WEBPACK_IMPORTED_MODULE_3__["NO_JUMP"]);
    return false;
  }

  // HANDLE OXYGEN SUPPLY
  const hasOxygen = p => [_map.getCell(p.x, p.y), ..._map.getCellNeighbors(p.x, p.y)].some(cell => !cell.water && !cell.wall);
  if (!hasOxygen(player) && !hasOxygen(netMove)) {
    player.oxygen -= 1;
    if (player.oxygen < 0) {
      renderSidebar(`
        You awaken where you once began
        perhaps wiser than before...`);
      Point.set(player, map.start);
      player.oxygen = 10;
      _camera__WEBPACK_IMPORTED_MODULE_4__["default"].updateTracking(camera, Rectangle.make(0, 0, _map.width, _map.height));
      return false;
    }
  } else {
    player.oxygen = player.maxOxygen;
  }
  Point.addTo(player, direction);

  if (Point.equal(player, _map.exit)) {
    console.log("test");
    levelIndex = (levelIndex + 1) % levels.length;
    console.log(levelIndex);
    console.log(levels);
    map = levels[levelIndex];
    _map = map;
    _levels__WEBPACK_IMPORTED_MODULE_6__["default"].printMap(_map);
    console.log(_map);
    renderSidebar("You have won... for now.");
    _map.player.oxygen = _map.player.maxOxygen;
    Point.set(map.player, map.start);
    camera = _camera__WEBPACK_IMPORTED_MODULE_4__["default"].make(Rectangle.make(0, 0, 30, 10), map.player);
    _camera__WEBPACK_IMPORTED_MODULE_4__["default"].updateTracking(camera, Rectangle.make(0, 0, _map.width, _map.height));
    Object(_mapRenderer__WEBPACK_IMPORTED_MODULE_2__["renderMap"])(_map, screen, camera.frame);
  }

  // tryMoveCamera(direction, cameraBox, map);
  _camera__WEBPACK_IMPORTED_MODULE_4__["default"].updateTracking(camera, Rectangle.make(0, 0, map.width, map.height));
  return true;
};

// UI SECTION
document.onkeydown = function (e) {
  const preventDefaultList = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
  if (preventDefaultList.includes(e.key)) {
    e.preventDefault();
  }
  switch (e.key) {
    case "ArrowLeft":
      tryMovePlayer(Point.make(-1, 0), camera.frame, map);
      break;
    case "ArrowRight":
      tryMovePlayer(Point.make(1, 0), camera.frame, map);
      break;
    case "ArrowUp":
      tryMovePlayer(Point.make(0, -1), camera.frame, map);
      break;
    case "ArrowDown":
      tryMovePlayer(Point.make(0, 1), camera.frame, map);
      break;
    default:
      console.log("unused key");
  }
  Object(_mapRenderer__WEBPACK_IMPORTED_MODULE_2__["renderMap"])(map, screen, camera.frame);
  renderStatus(map, statusbar);
};

// Helper Function
document.onclick = function (e) {
  const rootEls = e.path.filter(el => el.className === "cell");
  if (rootEls.length > 0) {
    const rootEl = rootEls[0];
    const x = +rootEl.getAttribute("x");
    const y = +rootEl.getAttribute("y");
    console.log(map.getCell(x, y));
    if (x === map.player.x && y === map.player.y) {
      console.log("Player");
      console.log(map.player);
    }
  }
};

// TODO: FIXME!
document.onmouseover = function (e) {
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
};

/***/ }),

/***/ "./client/src/js/camera.js":
/*!*********************************!*\
  !*** ./client/src/js/camera.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes */ "./client/src/js/shapes/index.js");

const { Rectangle, Point } = _shapes__WEBPACK_IMPORTED_MODULE_0__["default"];
const make = (frame, target) => {
  return {
    frame: Rectangle.copy(frame),
    target // should be a point, but doesn't have to be
  };
};

const updateTracking = (camera, bounds) => {
  if (camera.target) {
    if (!Rectangle.containsPoint(bounds, camera.target)) {
      console.log("Cannot track target");
      console.log(bounds, camera, camera.target);
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
};

/* harmony default export */ __webpack_exports__["default"] = ({
  make,
  updateTracking
});

/***/ }),

/***/ "./client/src/js/levels/index.js":
/*!***************************************!*\
  !*** ./client/src/js/levels/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapMaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mapMaker */ "./client/src/js/mapMaker.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./client/src/js/utils.js");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shapes */ "./client/src/js/shapes/index.js");
/* harmony import */ var _test_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test_level */ "./client/src/js/levels/test_level.js");
/* harmony import */ var _test_level2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test_level2 */ "./client/src/js/levels/test_level2.js");
/* harmony import */ var _test_level3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test_level3 */ "./client/src/js/levels/test_level3.js");



// shove an eval in here? probably wouldn't work :P



console.log(_test_level__WEBPACK_IMPORTED_MODULE_3__);

const stringToMap = str => {
  const lines = str.trim().split('\n');
  const map = Object(_mapMaker__WEBPACK_IMPORTED_MODULE_0__["makeMap"])({ height: lines.length, width: lines[0].replace(/\s/g, '').length });
  const all = map.getAllFlat();
  const clearedLines = str.replace(/\s/g, '');
  for (let i = 0; i < clearedLines.length; i++) {
    const letter = clearedLines[i];
    const cell = all[i];
    switch (letter) {
      case '~':
        Object(_mapMaker__WEBPACK_IMPORTED_MODULE_0__["setWater"])(cell);
        break;
      case '.':
        Object(_mapMaker__WEBPACK_IMPORTED_MODULE_0__["setAir"])(cell);
        break;
      case 'H':
        Object(_mapMaker__WEBPACK_IMPORTED_MODULE_0__["setLadder"])(cell);
        break;
      case '=':
        Object(_mapMaker__WEBPACK_IMPORTED_MODULE_0__["setWall"])(cell);
        break;
      default:
        Object(_mapMaker__WEBPACK_IMPORTED_MODULE_0__["setAir"])(cell);
        break;
    }
  }
  return map;
};

const buildMap = level => {
  const map = stringToMap(level.levelData);
  _shapes__WEBPACK_IMPORTED_MODULE_2__["default"].Point.set(map.start, level.start);
  _shapes__WEBPACK_IMPORTED_MODULE_2__["default"].Point.set(map.exit, level.exit);
  _shapes__WEBPACK_IMPORTED_MODULE_2__["default"].Point.set(map.player, map.start);
  return map;
};

const printMap = map => {
  console.log("MAP");
  map.getAll().forEach(line => {
    console.log(line.map(c => c.character).join(""));
  });
};

// build more level stuff

/* harmony default export */ __webpack_exports__["default"] = ({
  stringToMap,
  buildMap,
  printMap,
  levels: {
    test_level: buildMap(_test_level__WEBPACK_IMPORTED_MODULE_3__),
    test_level2: buildMap(_test_level2__WEBPACK_IMPORTED_MODULE_4__),
    test_level3: buildMap(_test_level3__WEBPACK_IMPORTED_MODULE_5__)
  }
});

/***/ }),

/***/ "./client/src/js/levels/test_level.js":
/*!********************************************!*\
  !*** ./client/src/js/levels/test_level.js ***!
  \********************************************/
/*! exports provided: levelData, start, exit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelData", function() { return levelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exit", function() { return exit; });
const levelData = `
  ................................................................
  ................................................................
  ................................................................
  ................................................................
  ................................................................
  ................................................................
  ................................................................
  ................................................................
  ................................................................
  ================================================================
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;
const start = { x: 2, y: 8 };
const exit = { x: 25, y: 8 };

/***/ }),

/***/ "./client/src/js/levels/test_level2.js":
/*!*********************************************!*\
  !*** ./client/src/js/levels/test_level2.js ***!
  \*********************************************/
/*! exports provided: levelData, start, exit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelData", function() { return levelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exit", function() { return exit; });
const levelData = `
  ................................................................
  ................................................................
  ................................................................
  ................................................................
  ................................................................
  ................................................................
  ................................................................
  ................H===............................................
  ................H===...!........................................
  ================================================================
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;

const start = { x: 2, y: 8 };
const exit = { x: 20, y: 8 };

/***/ }),

/***/ "./client/src/js/levels/test_level3.js":
/*!*********************************************!*\
  !*** ./client/src/js/levels/test_level3.js ***!
  \*********************************************/
/*! exports provided: levelData, start, exit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelData", function() { return levelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exit", function() { return exit; });
const levelData = `
  ................................
  .==H==..........................
  ...H.....======H=====...........
  ...H...........H................
  ..====H==......H................
  ......H........H................
  ......H........H.....=H.........
  ~~~~~~H~~~~~~~~H~~~~~=H~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~=~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~=~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~=~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~=~~~~~~~~~~
  ~~~~~~H~~~~~~~~H~~~~~=~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~=H~~~~~~~~~
`;

const start = { x: 2, y: 0 };
const exit = { x: 31, y: 13 };

/***/ }),

/***/ "./client/src/js/mapMaker.js":
/*!***********************************!*\
  !*** ./client/src/js/mapMaker.js ***!
  \***********************************/
/*! exports provided: makeCell, setWater, setAir, setWall, setLadder, makeMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCell", function() { return makeCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWater", function() { return setWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAir", function() { return setAir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWall", function() { return setWall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLadder", function() { return setLadder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return makeMap; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./client/src/js/utils.js");

const makeCell = () => {
  return {
    color: "white",
    character: ".",
    wall: false,
    ladder: false,
    water: false,
    air: true
  };
};

const zeroTypes = cell => {
  cell.wall = false, cell.ladder = false, cell.water = false;
  cell.air = false;
};

const setWater = cell => {
  cell.color = "blue";
  cell.character = "~";
  zeroTypes(cell);
  cell.water = true;
  return cell;
};
const setAir = cell => {
  cell.color = "white";
  cell.character = ".";
  zeroTypes(cell);
  cell.air = true;
  return cell;
};
const setWall = cell => {
  cell.color = "green";
  cell.character = "=";
  zeroTypes(cell);
  cell.wall = true;
  return cell;
};

const setLadder = cell => {
  cell.color = "red";
  cell.character = "H";
  zeroTypes(cell);
  cell.ladder = true;
  return cell;
};

const makeMap = params => {
  const cells = [];
  for (let y = 0; y < params.height; y++) {
    const line = [];
    for (let x = 0; x < params.width; x++) {
      line.push(makeCell());
    }
    cells.push(line);
  }
  return {
    _cells: cells,
    start: {
      x: 4,
      y: 2
    },
    exit: {
      x: 10,
      y: 10
    },
    player: {
      x: 4,
      y: 2,
      oxygen: 10,
      maxOxygen: 10
    },
    width: params.width,
    height: params.height,
    getPatch: function (box) {
      return this._cells.filter((_, y) => y >= box.y && y < box.y + box.height) // calculate in y range)
      .map(line => line.slice(box.x, box.x + box.width));
    },
    getCell: function (x, y) {
      if (y < 0 || y >= this._cells.length) {
        return undefined;
      }
      return this._cells[y][x];
    },
    getCellNeighbors: function (x, y) {
      const neighbors = [this.getCell(x, y - 1), this.getCell(x + 1, y), this.getCell(x, y + 1), this.getCell(x - 1, y)];
      return neighbors.filter(n => !!n);
    },
    getPatchFlat: function (box) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(this.getPatch(box));
    },
    getAll: function () {
      return this._cells.map(l => l);
    },
    getAllFlat: function () {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(this._cells.map(l => l));
    },
    getGraphTraverser: function () {
      throw "Not Implemented Yet";
    }
  };
};

/***/ }),

/***/ "./client/src/js/mapRenderer.js":
/*!**************************************!*\
  !*** ./client/src/js/mapRenderer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// We'll reorganize this at some point

// LOTS OF REFACTOR TO DO
const _renderCell = (map, cell, x, y, cameraX = 0, cameraY = 0) => {
  if (map.player.x === x + cameraX && map.player.y === y + cameraY) {
    return `<span class="cell"  x="${x}" y="${y}" style="color:yellow">@</span>`;
  } else if (map.exit.x === x + cameraX && map.exit.y === y + cameraY) {
    return `<span class="cell"  x="${x}" y="${y}" style="color:yellow">!</span>`;
  } else {
    return `<span class="cell" x="${x}" y="${y}" style="color:${cell.color}">${cell.character}</span>`;
  }
};

const renderMap = (map, target, cameraBox) => {
  const renderCells = cameraBox === undefined ? map.getAll() : map.getPatch(cameraBox);
  cameraBox = cameraBox || {};
  cameraBox.x = cameraBox.x || 0;
  cameraBox.y = cameraBox.y || 0;
  target.innerHTML = renderCells.map((line, y) => {
    return line.map((c, x) => _renderCell(map, c, x, y, cameraBox.x, cameraBox.y)).join('');
  }).join('\n');
};

module.exports = {
  renderMap
};

/***/ }),

/***/ "./client/src/js/shapes/Point.js":
/*!***************************************!*\
  !*** ./client/src/js/shapes/Point.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const make = (x, y) => {
  return { x, y };
};
const copy = p => make(p.x, p.y);

const set = (changed, value) => {
  changed.x = value.x;
  changed.y = value.y;
  return changed;
};
const add = (a, b) => {
  return make(a.x + b.x, a.y + b.y);
};

const addTo = (changed, value) => {
  changed.x += value.x;
  changed.y += value.y;
  return changed;
};

const from = obj => {
  return make(obj.x, obj.y);
};

const equal = (a, b) => {
  return a.x === b.x && a.y === b.y;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  make,
  equal,
  set,
  copy,
  from,
  add,
  addTo
});

/***/ }),

/***/ "./client/src/js/shapes/index.js":
/*!***************************************!*\
  !*** ./client/src/js/shapes/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rectangle */ "./client/src/js/shapes/rectangle.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./client/src/js/shapes/point.js");
// const pMake =  x,y) => { return {x,y}}
// export const Point = {
//   make:,
//   copy: ({x,y}) => { return {x, y}},
//   set: (dest, source) => { dest.x = source.x; dest.y = source.y; return dest}
//   add(a,b) => { }
// };
// export const Rectangle = {};



/* harmony default export */ __webpack_exports__["default"] = ({
  Rectangle: _rectangle__WEBPACK_IMPORTED_MODULE_0__["default"],
  Point: _point__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./client/src/js/shapes/point.js":
/*!***************************************!*\
  !*** ./client/src/js/shapes/point.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const make = (x, y) => {
  return { x, y };
};
const copy = p => make(p.x, p.y);

const set = (changed, value) => {
  changed.x = value.x;
  changed.y = value.y;
  return changed;
};
const add = (a, b) => {
  return make(a.x + b.x, a.y + b.y);
};

const addTo = (changed, value) => {
  changed.x += value.x;
  changed.y += value.y;
  return changed;
};

const from = obj => {
  return make(obj.x, obj.y);
};

const equal = (a, b) => {
  return a.x === b.x && a.y === b.y;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  make,
  equal,
  set,
  copy,
  from,
  add,
  addTo
});

/***/ }),

/***/ "./client/src/js/shapes/rectangle.js":
/*!*******************************************!*\
  !*** ./client/src/js/shapes/rectangle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./client/src/js/shapes/Point.js");


const clamp = (lower, upper, t) => {
  if (t < lower) return lower;
  if (t > upper) return upper;
  return t;
};

// todo: could it be worth it to give this thing some convenience setters?
const make = (x, y, width, height) => {
  return { x, y, width, height };
};

const copy = r => make(r.x, r.y, r.width, r.height);

const topLeft = rect => _Point__WEBPACK_IMPORTED_MODULE_0__["default"].make(rect.x, rect.y);
const topRight = rect => _Point__WEBPACK_IMPORTED_MODULE_0__["default"].make(rect.x + rect.width, rect.y);
const bottomLeft = rect => _Point__WEBPACK_IMPORTED_MODULE_0__["default"].make(rect.x, rect.y + rect.height);
const bottomRight = rect => _Point__WEBPACK_IMPORTED_MODULE_0__["default"].make(rect.x + rect.width, rect.y + rect.height);

const containsPoint = (rect, point) => {
  return rect.x <= point.x && rect.x + rect.width > point.x && rect.y <= point.y && rect.y + rect.height > point.y;
};

const containsRectangle = (outer, inner) => {
  return containsPoint(outer, topLeft(inner)) && containsPoint(outer, topRight(inner)) && containsPoint(outer, bottomLeft(inner)) && containsPoint(outer, bottomRight(inner));
};

const getCenter = rectangle => {
  return _Point__WEBPACK_IMPORTED_MODULE_0__["default"].make(rectangle.x + rectangle.width / 2, rectangle.y + rectangle.height / 2);
};
const setCenter = (rectangle, centerPoint) => {
  _Point__WEBPACK_IMPORTED_MODULE_0__["default"].set(rectangle, _Point__WEBPACK_IMPORTED_MODULE_0__["default"].add(centerPoint, _Point__WEBPACK_IMPORTED_MODULE_0__["default"].make(-rectangle.width / 2, -rectangle.height / 2)));
  return rectangle;
};

const clampPoint = (rectangle, point) => {
  point.x = clamp(rectangle.x, rectangle.x + rectangle.width, point.x);
  point.y = clamp(rectangle.y, rectangle.y + rectangle.height, point.y);
  return point;
};

// TODO: Write tests for this one
const clampRectangle = (rectContainer, rectInsider) => {
  if (rectInsider.width > rectContainer.width || rectInsider.height > rectContainer.height) {
    throw new Error("cannot clamp a rectangle into a smaller rectangle");
  }
  // We are now guaranteed the insider will fit, now to just determine from what direction
  // We will start by clamping the topLeft, and then the bottomRight
  clampPoint(rectContainer, rectInsider);
  const netBottomRight = clampPoint(rectContainer, bottomRight(rectInsider));
  _Point__WEBPACK_IMPORTED_MODULE_0__["default"].set(rectInsider, _Point__WEBPACK_IMPORTED_MODULE_0__["default"].add(netBottomRight, _Point__WEBPACK_IMPORTED_MODULE_0__["default"].make(-rectInsider.width, -rectInsider.height)));
};

/* harmony default export */ __webpack_exports__["default"] = ({
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
});

/***/ }),

/***/ "./client/src/js/text.js":
/*!*******************************!*\
  !*** ./client/src/js/text.js ***!
  \*******************************/
/*! exports provided: START, OUT_OF_BOUNDS, WALL, AIR_WALK, NO_JUMP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START", function() { return START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUT_OF_BOUNDS", function() { return OUT_OF_BOUNDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WALL", function() { return WALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIR_WALK", function() { return AIR_WALK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_JUMP", function() { return NO_JUMP; });
const START = `
    it is wet and dark
    deep within this hollowed earth
    you search for an exit.
`;

const OUT_OF_BOUNDS = `
    the world comes to end
    even everywhere has limits
    try another way
`;

const WALL = `
    the stone does not care
    your efforts at movement fail
    the cold has not left
`;

const AIR_WALK = `
    even though time stand still
    the future has been secured
    you are going down
`;

const NO_JUMP = `
    you can do so much
    but even you have limits
    alas, you can't jump
`;

/***/ }),

/***/ "./client/src/js/utils.js":
/*!********************************!*\
  !*** ./client/src/js/utils.js ***!
  \********************************/
/*! exports provided: $, flatten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
const $ = q => document.querySelector(q);
const flatten = arr => arr.reduce((total, line) => total.concat(line), []);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map