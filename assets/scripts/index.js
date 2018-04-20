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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getData;
function getData(url) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);

  xhr.send();

  if (xhr.status != 200) {
    console.log('Data no found');
  } else {
    return JSON.parse(xhr.responseText);
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (min, max) {
  return Math.random() * (max - min) + min;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

exports.default = isMobile;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, varName, value) {
  return element.style.setProperty("--" + varName, value);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getData = __webpack_require__(0);

var _getData2 = _interopRequireDefault(_getData);

var _getRandomNumber = __webpack_require__(1);

var _getRandomNumber2 = _interopRequireDefault(_getRandomNumber);

var _setCssVar = __webpack_require__(3);

var _setCssVar2 = _interopRequireDefault(_setCssVar);

var _isMobile = __webpack_require__(2);

var _isMobile2 = _interopRequireDefault(_isMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.querySelector('.app');
var generated = document.querySelector('.generated');
var basicWord = document.querySelector('.basicWord');
var generate = document.querySelector('.generate');
var bodyNode = document.querySelector('body');
var animatedItems = document.querySelector('.animatedItems');
var typeStep = 0;

var state = {
  "basicWord": '',
  "areaAnimation": false,
  "totalPartials": 0,
  "usedPartials": []
};

var core = {
  setListeners: function setListeners() {
    basicWord.addEventListener('input', function (e) {
      core.basicWord = e.target.value;
      core.animateWhenTyping();
    });

    generate.addEventListener('click', core.generateName);

    document.addEventListener('keypress', function (e) {
      if (e.keyCode == 13) {
        core.generateName();
      }
    });
  },
  checkСoncurrences: function checkOncurrences(number) {
    if (state.usedPartials.length == state.totalPartials) {
      state.usedPartials = [];
    }

    for (var i = 0; i < partials.length; i++) {
      if (number == state.usedPartials[i]) {
        return false;
      }
    }

    return true;
  },
  animateWhenTyping: function animateWhenTyping() {
    if (typeStep % 2 == 0) {
      (0, _setCssVar2.default)(app, "rotateOne", "5deg");
      (0, _setCssVar2.default)(app, "rotateTwo", "-5deg");
    } else {
      (0, _setCssVar2.default)(app, "rotateOne", "-5deg");
      (0, _setCssVar2.default)(app, "rotateTwo", "5deg");
    }

    typeStep++;
  },
  getUniqueWord: function getUniqueWord() {
    var uniqueNumber = Math.round((0, _getRandomNumber2.default)(0, partials.length));

    if (!core.checkСoncurrences(uniqueNumber)) {
      return core.getUniqueWord();
    }

    state.usedPartials.push(uniqueNumber);

    return uniqueNumber;
  },
  animateInputArea: function animateInputArea() {
    if (state.areaAnimation == true) return;

    state.areaAnimation = true;

    bodyNode.classList.add('animateInputArea');
    bodyNode.classList.add('hideItems');

    setTimeout(function () {
      bodyNode.classList.remove('animateInputArea');
    }, 700);

    setTimeout(function () {
      state.areaAnimation = false;
      bodyNode.classList.remove('hideItems');
    }, 1010);
  },
  generateName: function generateName() {
    if (core.validateBasicWord(state.basicWord)) {
      var postFixIndex = core.getUniqueWord();

      var generatedName = state.basicWord + ' ' + partials[postFixIndex].name;

      core.animateInputArea();
      if (!_isMobile2.default.any()) basicWord.focus();

      generated.innerHTML = generatedName;
    }
  },
  validateBasicWord: function validateBasicWord(word) {
    if (word.trim().length == 0) {
      bodyNode.classList.add('showTooltip');

      if (!_isMobile2.default.any()) basicWord.focus();

      setTimeout(function () {
        bodyNode.classList.remove('showTooltip');
      }, 1000);

      return false;
    } else {
      return true;
    }
  },


  set basicWord(word) {
    state.basicWord = word;
  },

  init: function init() {
    core.setListeners();
  }
};

var partials = (0, _getData2.default)('data/partials.json').partials;
state.totalPartials = partials.length;
core.init();

/***/ })
/******/ ]);