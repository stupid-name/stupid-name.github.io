import getData from './getData';
import getRandomNumber from './getRandomNumber';
import setCssVar from './setCssVar';
import isMobile from './isMobile';

var app = document.querySelector('.app');
var generated = document.querySelector('.generated');
var basicWord = document.querySelector('.basicWord');
var generate = document.querySelector('.generate');
var bodyNode = document.querySelector('body');
var animatedItems = document.querySelector('.animatedItems');
var typeStep = 0;

var state = {
  "basicWord" : '',
  "areaAnimation" : false,
  "totalPartials" : 0,
  "usedPartials" : []
}

var core = {
  setListeners() {
    basicWord.addEventListener('input', (e) => {
      core.basicWord = e.target.value;
      core.animateWhenTyping();
    });

    generate.addEventListener('click', core.generateName);

    document.addEventListener('keypress', (e) => {
      if (e.keyCode == 13) {
        core.generateName();
      }
    });
  },

  checkСoncurrences(number) {
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

  animateWhenTyping() {
    if(typeStep % 2 == 0) {
      setCssVar(app, "rotateOne", "5deg")
      setCssVar(app, "rotateTwo", "-5deg")
    } else {
      setCssVar(app, "rotateOne", "-5deg")
      setCssVar(app, "rotateTwo", "5deg")
    }

    typeStep++;
  },

  getUniqueWord() {
    var uniqueNumber = Math.round(getRandomNumber(0, partials.length));

    if (!core.checkСoncurrences(uniqueNumber)) {
      return core.getUniqueWord();
    }

    state.usedPartials.push(uniqueNumber);

    return uniqueNumber;
  },

  animateInputArea() {
    if (state.areaAnimation == true) return;

    state.areaAnimation = true;

    bodyNode.classList.add('animateInputArea');
    bodyNode.classList.add('hideItems');

    setTimeout(() => {
      bodyNode.classList.remove('animateInputArea');
    }, 700);

    setTimeout(() => {
      state.areaAnimation = false;
      bodyNode.classList.remove('hideItems');
    }, 1010);
  },

  generateName() {
    if (core.validateBasicWord(state.basicWord)) {
      var postFixIndex = core.getUniqueWord();

      var generatedName = state.basicWord + ' ' + partials[postFixIndex].name;

      core.animateInputArea();
      if (!isMobile.any()) basicWord.focus();

      generated.innerHTML = generatedName;
    }
  },

  validateBasicWord(word) {
    if(word.trim().length == 0) {
      bodyNode.classList.add('showTooltip');

      if (!isMobile.any()) basicWord.focus();

      setTimeout(() => {
        bodyNode.classList.remove('showTooltip');
      }, 1000);
      
      return false;
    } else {
      return true;
    }
  },

  set basicWord (word) {
    state.basicWord = word;
  },

  init() {
    core.setListeners();
  }
}

var partials = getData('data/partials.json').partials;
state.totalPartials = partials.length;
core.init();