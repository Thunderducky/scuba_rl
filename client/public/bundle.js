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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./client/src/js/utils.js\");\n/* harmony import */ var _mapMaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapMaker */ \"./client/src/js/mapMaker.js\");\n/* harmony import */ var _mapRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapRenderer */ \"./client/src/js/mapRenderer.js\");\n/* harmony import */ var _mapRenderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mapRenderer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ \"./client/src/js/text.js\");\n/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camera */ \"./client/src/js/camera.js\");\n/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shapes */ \"./client/src/js/shapes/index.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./levels */ \"./client/src/js/levels/index.js\");\n\n\n\n\n\n// for some reason the normal import isn't working :P\n\nconst { Rectangle, Point } = _shapes__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n\n\nconsole.log(_levels__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nconst screen = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"#scuba\");\nconst statusbar = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"#status_bar\");\nconst sidebarTarget = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"#sidebar_target\");\n\nconst map = _levels__WEBPACK_IMPORTED_MODULE_6__[\"default\"].levels.test_level; //makeMap({width:50,height:20});\nconsole.log(map);\nconst camera = _camera__WEBPACK_IMPORTED_MODULE_4__[\"default\"].make(Rectangle.make(0, 0, 30, 10), map.player);\nconst renderStatus = (map, target) => {\n  target.innerHTML = `Oxygen: ${map.player.oxygen}/ ${map.player.maxOxygen}`;\n};\n\nconst renderSidebar = message => {\n  sidebarTarget.innerHTML = message;\n};\n_camera__WEBPACK_IMPORTED_MODULE_4__[\"default\"].updateTracking(camera, Rectangle.make(0, 0, map.width, map.height));\nObject(_mapRenderer__WEBPACK_IMPORTED_MODULE_2__[\"renderMap\"])(map, screen, camera.frame);\nrenderStatus(map, statusbar);\nrenderSidebar(_text__WEBPACK_IMPORTED_MODULE_3__[\"START\"]);\n\nconst tryMovePlayer = (direction, cameraBox, map) => {\n  const { player } = map;\n  const mapBox = Rectangle.make(0, 0, map.width, map.height);\n  const netMove = Point.add(player, direction);\n\n  const source = map.getCell(player.x, player.y);\n  const destination = map.getCell(netMove.x, netMove.y);\n\n  // destination blockers\n  if (!Rectangle.containsPoint(mapBox, netMove)) {\n    renderSidebar(_text__WEBPACK_IMPORTED_MODULE_3__[\"OUT_OF_BOUNDS\"]);\n    return false;\n  }\n  if (destination.wall) {\n    renderSidebar(_text__WEBPACK_IMPORTED_MODULE_3__[\"WALL\"]);\n    return false;\n  }\n\n  const hasFloor = (x, y) => {\n    const lower = map.getCell(x, y + 1);\n    return lower.wall || lower.ladder;\n  };\n\n  if (source.air && !hasFloor(player.x, player.y) && direction.y <= 0) {\n    // potentially allow a diagnol in the future\n    renderSidebar(_text__WEBPACK_IMPORTED_MODULE_3__[\"AIR_WALK\"]);\n    return false;\n  }\n  if (source.air && direction.y < 0) {\n    renderSidebar(_text__WEBPACK_IMPORTED_MODULE_3__[\"NO_JUMP\"]);\n    return false;\n  }\n\n  // HANDLE OXYGEN SUPPLY\n  const hasOxygen = p => [map.getCell(p.x, p.y), ...map.getCellNeighbors(p.x, p.y)].some(cell => !cell.water && !cell.wall);\n  if (!hasOxygen(player) && !hasOxygen(netMove)) {\n    player.oxygen -= 1;\n    if (player.oxygen < 0) {\n      renderSidebar(`\n        You awaken where you once began\n        perhaps wiser than before...`);\n      Point.set(player, map.start);\n      player.oxygen = 10;\n      _camera__WEBPACK_IMPORTED_MODULE_4__[\"default\"].updateTracking(camera, Rectangle.make(0, 0, map.width, map.height));\n      return false;\n    }\n  } else {\n    player.oxygen = player.maxOxygen;\n  }\n  Point.addTo(player, direction);\n\n  if (Point.equal(player, map.exit)) {\n    renderSidebar(\"You have won... for now.\");\n    Point.set(player, map.start);\n  }\n\n  // tryMoveCamera(direction, cameraBox, map);\n  _camera__WEBPACK_IMPORTED_MODULE_4__[\"default\"].updateTracking(camera, Rectangle.make(0, 0, map.width, map.height));\n  return true;\n};\n\n// UI SECTION\ndocument.onkeydown = function (e) {\n  const preventDefaultList = [\"ArrowLeft\", \"ArrowRight\", \"ArrowUp\", \"ArrowDown\"];\n  if (preventDefaultList.includes(e.key)) {\n    e.preventDefault();\n  }\n  switch (e.key) {\n    case \"ArrowLeft\":\n      tryMovePlayer(Point.make(-1, 0), camera.frame, map);\n      break;\n    case \"ArrowRight\":\n      tryMovePlayer(Point.make(1, 0), camera.frame, map);\n      break;\n    case \"ArrowUp\":\n      tryMovePlayer(Point.make(0, -1), camera.frame, map);\n      break;\n    case \"ArrowDown\":\n      tryMovePlayer(Point.make(0, 1), camera.frame, map);\n      break;\n    default:\n      console.log(\"unused key\");\n  }\n  Object(_mapRenderer__WEBPACK_IMPORTED_MODULE_2__[\"renderMap\"])(map, screen, camera.frame);\n  renderStatus(map, statusbar);\n};\n\n// Helper Function\ndocument.onclick = function (e) {\n  const rootEls = e.path.filter(el => el.className === \"cell\");\n  if (rootEls.length > 0) {\n    const rootEl = rootEls[0];\n    const x = +rootEl.getAttribute(\"x\");\n    const y = +rootEl.getAttribute(\"y\");\n    console.log(map.getCell(x, y));\n    if (x === map.player.x && y === map.player.y) {\n      console.log(\"Player\");\n      console.log(map.player);\n    }\n  }\n};\n\n// TODO: FIXME!\ndocument.onmouseover = function (e) {\n  // const rootEls = e.path.filter(el => el.className === \"cell\");\n  // let result = \"\";\n  // if(rootEls.length > 0){\n  //   const rootEl = rootEls[0];\n  //   const x = +rootEl.getAttribute(\"x\") - camera.frame.x;\n  //   const y = +rootEl.getAttribute(\"y\") - camera.frame.y;\n  //   console.log(map.getCell(x, y));\n  //\n  //   const cell = map.getCell(x,y);\n  //   if(cell.air){\n  //     result += \" Air \"\n  //   }\n  //   else if(cell.ladder){\n  //     result += \" Ladder \"\n  //   }\n  //   else if(cell.water){\n  //     result += \" Water \"\n  //   }\n  //   else if(cell.wall){\n  //     result += \" Wall \"\n  //   }\n  //   if(x === map.player.x && y === map.player.y){\n  //     result += \"- Player\";\n  //   }\n  //   if(x === map.exit.x && y === map.exit.y){\n  //     result += \"- Exit\";\n  //   }\n  // }\n  // statusbar.innerHTML = result;\n};\n\n//# sourceURL=webpack:///./client/src/js/app.js?");

/***/ }),

/***/ "./client/src/js/camera.js":
/*!*********************************!*\
  !*** ./client/src/js/camera.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes */ \"./client/src/js/shapes/index.js\");\n\nconst { Rectangle, Point } = _shapes__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst make = (frame, target) => {\n  return {\n    frame: Rectangle.copy(frame),\n    target // should be a point, but doesn't have to be\n  };\n};\n\nconst updateTracking = (camera, bounds) => {\n  console.log(camera, bounds);\n  if (camera.target) {\n    if (!Rectangle.containsPoint(bounds, camera.target)) {\n      debugger;\n      console.log(\"Cannot track target\");\n      console.log(bounds, camera, camera.target);\n      return false;\n    }\n\n    Rectangle.setCenter(camera.frame, camera.target);\n\n    // Avoid problems with cameras with uneven\n    camera.frame.x = Math.floor(camera.frame.x);\n    camera.frame.y = Math.floor(camera.frame.y);\n\n    Rectangle.clampRectangle(bounds, camera.frame);\n    return true;\n  } else {\n    return false;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  make,\n  updateTracking\n});\n\n//# sourceURL=webpack:///./client/src/js/camera.js?");

/***/ }),

/***/ "./client/src/js/levels/index.js":
/*!***************************************!*\
  !*** ./client/src/js/levels/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mapMaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mapMaker */ \"./client/src/js/mapMaker.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./client/src/js/utils.js\");\n/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shapes */ \"./client/src/js/shapes/index.js\");\n/* harmony import */ var _test_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test_level */ \"./client/src/js/levels/test_level.js\");\n/* harmony import */ var _test_level2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test_level2 */ \"./client/src/js/levels/test_level2.js\");\n/* harmony import */ var _test_level3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test_level3 */ \"./client/src/js/levels/test_level3.js\");\n\n\n\n// shove an eval in here? probably wouldn't work :P\n\n\n\nconsole.log(_test_level__WEBPACK_IMPORTED_MODULE_3__);\n\nconst stringToMap = str => {\n  const lines = str.trim().split('\\n');\n  const map = Object(_mapMaker__WEBPACK_IMPORTED_MODULE_0__[\"makeMap\"])({ height: lines.length, width: lines[0].replace(/\\s/g, '').length });\n  const all = map.getAllFlat();\n  const clearedLines = str.replace(/\\s/g, '');\n  for (let i = 0; i < clearedLines.length; i++) {\n    const letter = clearedLines[i];\n    const cell = all[i];\n    switch (letter) {\n      case '~':\n        Object(_mapMaker__WEBPACK_IMPORTED_MODULE_0__[\"setWater\"])(cell);\n        break;\n      case '.':\n        Object(_mapMaker__WEBPACK_IMPORTED_MODULE_0__[\"setAir\"])(cell);\n        break;\n      case 'H':\n        Object(_mapMaker__WEBPACK_IMPORTED_MODULE_0__[\"setLadder\"])(cell);\n        break;\n      case '=':\n        Object(_mapMaker__WEBPACK_IMPORTED_MODULE_0__[\"setWall\"])(cell);\n        break;\n      default:\n        Object(_mapMaker__WEBPACK_IMPORTED_MODULE_0__[\"setAir\"])(cell);\n        break;\n    }\n  }\n  return map;\n};\n\nconst buildMap = level => {\n  const map = stringToMap(level.levelData);\n  _shapes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Point.set(map.start, level.start);\n  _shapes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Point.set(map.exit, level.exit);\n  _shapes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Point.set(map.player, map.start);\n  return map;\n};\n\nconst printMap = map => {\n  console.log(\"MAP\");\n  map.getAll().forEach(line => {\n    console.log(line.map(c => c.character).join(\"\"));\n  });\n};\n\n// build more level stuff\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  stringToMap,\n  buildMap,\n  printMap,\n  levels: {\n    test_level: buildMap(_test_level__WEBPACK_IMPORTED_MODULE_3__),\n    test_level2: buildMap(_test_level2__WEBPACK_IMPORTED_MODULE_4__),\n    test_level3: buildMap(_test_level3__WEBPACK_IMPORTED_MODULE_5__)\n  }\n});\n\n//# sourceURL=webpack:///./client/src/js/levels/index.js?");

/***/ }),

/***/ "./client/src/js/levels/test_level.js":
/*!********************************************!*\
  !*** ./client/src/js/levels/test_level.js ***!
  \********************************************/
/*! exports provided: levelData, start, exit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"levelData\", function() { return levelData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exit\", function() { return exit; });\nconst levelData = `\n  ................................................................\n  ................................................................\n  ................................................................\n  ................................................................\n  ................................................................\n  ................................................................\n  ................................................................\n  ................................................................\n  ................................................................\n  ================================================================\n  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`;\nconst start = { x: 2, y: 8 };\nconst exit = { x: 25, y: 8 };\n\n//# sourceURL=webpack:///./client/src/js/levels/test_level.js?");

/***/ }),

/***/ "./client/src/js/levels/test_level2.js":
/*!*********************************************!*\
  !*** ./client/src/js/levels/test_level2.js ***!
  \*********************************************/
/*! exports provided: levelData, start, exit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"levelData\", function() { return levelData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exit\", function() { return exit; });\nconst levelData = `\n  ................................................................\n  ................................................................\n  ................................................................\n  ................................................................\n  ................................................................\n  ................................................................\n  ................................................................\n  ................H===............................................\n  ................H===...!........................................\n  ================================================================\n  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`;\n\nconst start = { x: 2, y: 8 };\nconst exit = { x: 20, y: 8 };\n\n//# sourceURL=webpack:///./client/src/js/levels/test_level2.js?");

/***/ }),

/***/ "./client/src/js/levels/test_level3.js":
/*!*********************************************!*\
  !*** ./client/src/js/levels/test_level3.js ***!
  \*********************************************/
/*! exports provided: levelData, start, exit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"levelData\", function() { return levelData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exit\", function() { return exit; });\nconst levelData = `\n  ................................\n  .==H==..........................\n  ...H.....======H=====...........\n  ...H...........H................\n  ..====H==......H................\n  ......H........H................\n  ......H........H.....=H.........\n  ~~~~~~H~~~~~~~~H~~~~~=H~~~~~~~~~\n  ~~~~~~~~~~~~~~~~~~~~~=~~~~~~~~~~\n  ~~~~~~~~~~~~~~~~~~~~~=~~~~~~~~~~\n  ~~~~~~~~~~~~~~~~~~~~~=~~~~~~~~~~\n  ~~~~~~~~~~~~~~~~~~~~~=~~~~~~~~~~\n  ~~~~~~H~~~~~~~~H~~~~~=~~~~~~~~~~\n  ~~~~~~~~~~~~~~~~~~~~~=H~~~~~~~~~\n`;\n\nconst start = { x: 2, y: 0 };\nconst exit = { x: 31, y: 13 };\n\n//# sourceURL=webpack:///./client/src/js/levels/test_level3.js?");

/***/ }),

/***/ "./client/src/js/mapMaker.js":
/*!***********************************!*\
  !*** ./client/src/js/mapMaker.js ***!
  \***********************************/
/*! exports provided: makeCell, setWater, setAir, setWall, setLadder, makeMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeCell\", function() { return makeCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setWater\", function() { return setWater; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAir\", function() { return setAir; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setWall\", function() { return setWall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLadder\", function() { return setLadder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeMap\", function() { return makeMap; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./client/src/js/utils.js\");\n\nconst makeCell = () => {\n  return {\n    color: \"white\",\n    character: \".\",\n    wall: false,\n    ladder: false,\n    water: false,\n    air: true\n  };\n};\n\nconst zeroTypes = cell => {\n  cell.wall = false, cell.ladder = false, cell.water = false;\n  cell.air = false;\n};\n\nconst setWater = cell => {\n  cell.color = \"blue\";\n  cell.character = \"~\";\n  zeroTypes(cell);\n  cell.water = true;\n  return cell;\n};\nconst setAir = cell => {\n  cell.color = \"white\";\n  cell.character = \".\";\n  zeroTypes(cell);\n  cell.air = true;\n  return cell;\n};\nconst setWall = cell => {\n  cell.color = \"green\";\n  cell.character = \"=\";\n  zeroTypes(cell);\n  cell.wall = true;\n  return cell;\n};\n\nconst setLadder = cell => {\n  cell.color = \"red\";\n  cell.character = \"H\";\n  zeroTypes(cell);\n  cell.ladder = true;\n  return cell;\n};\n\nconst makeMap = params => {\n  const cells = [];\n  for (let y = 0; y < params.height; y++) {\n    const line = [];\n    for (let x = 0; x < params.width; x++) {\n      line.push(makeCell());\n    }\n    cells.push(line);\n  }\n  return {\n    _cells: cells,\n    start: {\n      x: 4,\n      y: 2\n    },\n    exit: {\n      x: 10,\n      y: 10\n    },\n    player: {\n      x: 4,\n      y: 2,\n      oxygen: 10,\n      maxOxygen: 10\n    },\n    width: params.width,\n    height: params.height,\n    getPatch: function (box) {\n      return this._cells.filter((_, y) => y >= box.y && y < box.y + box.height) // calculate in y range)\n      .map(line => line.slice(box.x, box.x + box.width));\n    },\n    getCell: function (x, y) {\n      if (y < 0 || y >= this._cells.length) {\n        return undefined;\n      }\n      return this._cells[y][x];\n    },\n    getCellNeighbors: function (x, y) {\n      const neighbors = [this.getCell(x, y - 1), this.getCell(x + 1, y), this.getCell(x, y + 1), this.getCell(x - 1, y)];\n      return neighbors.filter(n => !!n);\n    },\n    getPatchFlat: function (box) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"flatten\"])(this.getPatch(box));\n    },\n    getAll: function () {\n      return this._cells.map(l => l);\n    },\n    getAllFlat: function () {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"flatten\"])(this._cells.map(l => l));\n    },\n    getGraphTraverser: function () {\n      throw \"Not Implemented Yet\";\n    }\n  };\n};\n\n//# sourceURL=webpack:///./client/src/js/mapMaker.js?");

/***/ }),

/***/ "./client/src/js/mapRenderer.js":
/*!**************************************!*\
  !*** ./client/src/js/mapRenderer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// We'll reorganize this at some point\n\n// LOTS OF REFACTOR TO DO\nconst _renderCell = (map, cell, x, y, cameraX = 0, cameraY = 0) => {\n  if (map.player.x === x + cameraX && map.player.y === y + cameraY) {\n    return `<span class=\"cell\"  x=\"${x}\" y=\"${y}\" style=\"color:yellow\">@</span>`;\n  } else if (map.exit.x === x + cameraX && map.exit.y === y + cameraY) {\n    return `<span class=\"cell\"  x=\"${x}\" y=\"${y}\" style=\"color:yellow\">!</span>`;\n  } else {\n    return `<span class=\"cell\" x=\"${x}\" y=\"${y}\" style=\"color:${cell.color}\">${cell.character}</span>`;\n  }\n};\n\nconst renderMap = (map, target, cameraBox) => {\n  const renderCells = cameraBox === undefined ? map.getAll() : map.getPatch(cameraBox);\n  cameraBox = cameraBox || {};\n  cameraBox.x = cameraBox.x || 0;\n  cameraBox.y = cameraBox.y || 0;\n  target.innerHTML = renderCells.map((line, y) => {\n    return line.map((c, x) => _renderCell(map, c, x, y, cameraBox.x, cameraBox.y)).join('');\n  }).join('\\n');\n};\n\nmodule.exports = {\n  renderMap\n};\n\n//# sourceURL=webpack:///./client/src/js/mapRenderer.js?");

/***/ }),

/***/ "./client/src/js/shapes/Point.js":
/*!***************************************!*\
  !*** ./client/src/js/shapes/Point.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst make = (x, y) => {\n  return { x, y };\n};\nconst copy = p => make(p.x, p.y);\n\nconst set = (changed, value) => {\n  changed.x = value.x;\n  changed.y = value.y;\n  return changed;\n};\nconst add = (a, b) => {\n  return make(a.x + b.x, a.y + b.y);\n};\n\nconst addTo = (changed, value) => {\n  changed.x += value.x;\n  changed.y += value.y;\n  return changed;\n};\n\nconst from = obj => {\n  return make(obj.x, obj.y);\n};\n\nconst equal = (a, b) => {\n  return a.x === b.x && a.y === b.y;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  make,\n  equal,\n  set,\n  copy,\n  from,\n  add,\n  addTo\n});\n\n//# sourceURL=webpack:///./client/src/js/shapes/Point.js?");

/***/ }),

/***/ "./client/src/js/shapes/index.js":
/*!***************************************!*\
  !*** ./client/src/js/shapes/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rectangle */ \"./client/src/js/shapes/rectangle.js\");\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ \"./client/src/js/shapes/point.js\");\n// const pMake =  x,y) => { return {x,y}}\n// export const Point = {\n//   make:,\n//   copy: ({x,y}) => { return {x, y}},\n//   set: (dest, source) => { dest.x = source.x; dest.y = source.y; return dest}\n//   add(a,b) => { }\n// };\n// export const Rectangle = {};\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Rectangle: _rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Point: _point__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./client/src/js/shapes/index.js?");

/***/ }),

/***/ "./client/src/js/shapes/point.js":
/*!***************************************!*\
  !*** ./client/src/js/shapes/point.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst make = (x, y) => {\n  return { x, y };\n};\nconst copy = p => make(p.x, p.y);\n\nconst set = (changed, value) => {\n  changed.x = value.x;\n  changed.y = value.y;\n  return changed;\n};\nconst add = (a, b) => {\n  return make(a.x + b.x, a.y + b.y);\n};\n\nconst addTo = (changed, value) => {\n  changed.x += value.x;\n  changed.y += value.y;\n  return changed;\n};\n\nconst from = obj => {\n  return make(obj.x, obj.y);\n};\n\nconst equal = (a, b) => {\n  return a.x === b.x && a.y === b.y;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  make,\n  equal,\n  set,\n  copy,\n  from,\n  add,\n  addTo\n});\n\n//# sourceURL=webpack:///./client/src/js/shapes/point.js?");

/***/ }),

/***/ "./client/src/js/shapes/rectangle.js":
/*!*******************************************!*\
  !*** ./client/src/js/shapes/rectangle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ \"./client/src/js/shapes/Point.js\");\n\n\nconst clamp = (lower, upper, t) => {\n  if (t < lower) return lower;\n  if (t > upper) return upper;\n  return t;\n};\n\n// todo: could it be worth it to give this thing some convenience setters?\nconst make = (x, y, width, height) => {\n  return { x, y, width, height };\n};\n\nconst copy = r => make(r.x, r.y, r.width, r.height);\n\nconst topLeft = rect => _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(rect.x, rect.y);\nconst topRight = rect => _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(rect.x + rect.width, rect.y);\nconst bottomLeft = rect => _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(rect.x, rect.y + rect.height);\nconst bottomRight = rect => _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(rect.x + rect.width, rect.y + rect.height);\n\nconst containsPoint = (rect, point) => {\n  return rect.x <= point.x && rect.x + rect.width > point.x && rect.y <= point.y && rect.y + rect.height > point.y;\n};\n\nconst containsRectangle = (outer, inner) => {\n  return containsPoint(outer, topLeft(inner)) && containsPoint(outer, topRight(inner)) && containsPoint(outer, bottomLeft(inner)) && containsPoint(outer, bottomRight(inner));\n};\n\nconst getCenter = rectangle => {\n  return _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(rectangle.x + rectangle.width / 2, rectangle.y + rectangle.height / 2);\n};\nconst setCenter = (rectangle, centerPoint) => {\n  _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(rectangle, _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(centerPoint, _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(-rectangle.width / 2, -rectangle.height / 2)));\n  return rectangle;\n};\n\nconst clampPoint = (rectangle, point) => {\n  point.x = clamp(rectangle.x, rectangle.x + rectangle.width, point.x);\n  point.y = clamp(rectangle.y, rectangle.y + rectangle.height, point.y);\n  return point;\n};\n\n// TODO: Write tests for this one\nconst clampRectangle = (rectContainer, rectInsider) => {\n  if (rectInsider.width > rectContainer.width || rectInsider.height > rectContainer.height) {\n    throw new Error(\"cannot clamp a rectangle into a smaller rectangle\");\n  }\n  // We are now guaranteed the insider will fit, now to just determine from what direction\n  // We will start by clamping the topLeft, and then the bottomRight\n  clampPoint(rectContainer, rectInsider);\n  const netBottomRight = clampPoint(rectContainer, bottomRight(rectInsider));\n  _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(rectInsider, _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(netBottomRight, _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(-rectInsider.width, -rectInsider.height)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  make,\n  copy,\n  getCenter,\n  setCenter,\n  containsPoint,\n  containsRectangle,\n  topLeft,\n  topRight,\n  bottomLeft,\n  bottomRight,\n  clampPoint,\n  clampRectangle\n});\n\n//# sourceURL=webpack:///./client/src/js/shapes/rectangle.js?");

/***/ }),

/***/ "./client/src/js/text.js":
/*!*******************************!*\
  !*** ./client/src/js/text.js ***!
  \*******************************/
/*! exports provided: START, OUT_OF_BOUNDS, WALL, AIR_WALK, NO_JUMP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"START\", function() { return START; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OUT_OF_BOUNDS\", function() { return OUT_OF_BOUNDS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WALL\", function() { return WALL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AIR_WALK\", function() { return AIR_WALK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NO_JUMP\", function() { return NO_JUMP; });\nconst START = `\n    it is wet and dark\n    deep within this hollowed earth\n    you search for an exit.\n`;\n\nconst OUT_OF_BOUNDS = `\n    the world comes to end\n    even everywhere has limits\n    try another way\n`;\n\nconst WALL = `\n    the stone does not care\n    your efforts at movement fail\n    the cold has not left\n`;\n\nconst AIR_WALK = `\n    even though time stand still\n    the future has been secured\n    you are going down\n`;\n\nconst NO_JUMP = `\n    you can do so much\n    but even you have limits\n    alas, you can't jump\n`;\n\n//# sourceURL=webpack:///./client/src/js/text.js?");

/***/ }),

/***/ "./client/src/js/utils.js":
/*!********************************!*\
  !*** ./client/src/js/utils.js ***!
  \********************************/
/*! exports provided: $, flatten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten\", function() { return flatten; });\nconst $ = q => document.querySelector(q);\nconst flatten = arr => arr.reduce((total, line) => total.concat(line), []);\n\n//# sourceURL=webpack:///./client/src/js/utils.js?");

/***/ })

/******/ });