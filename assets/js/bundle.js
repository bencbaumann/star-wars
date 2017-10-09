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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var charecters = __webpack_require__(1);
module.exports = {
  playerSelected: false,
  defenderSelected: false,
  player: {},
  defender: {},
  name: "Ben",
  selectPlayer: function(playerId) {
    this.player = charecters[playerId];
    this.playerSelected = true;
  },
  selectDefender: function(defenderId) {
    this.defender = charecters[defenderId];
    this.defenderSelected = true;
  },
  fight: function() {
    this.player.healthPoints -= this.defender.counterAttackPower;
    this.player.attackPower += this.player.baseAttackPower;
    this.defender.healthPoints -= this.player.attackPower;
  },
  isDefenderDead: function() {
    if (this.defender.healthPoints <= 0) {
      return true;
    }
  },
  isPlayerDead: function() {
    if (this.player.healthPoints <= 0) {
      return true;
    }
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var obi = {
  id: "obi",
  name: "Obi-Wan Kanobi",
  healthPoints: 120,
  attackPower: 6,
  baseAttackPower: 6,
  force: 0,
  counterAttackPower: 12
};
var luke = {
  id: "luke",
  name: "Luke Skywalker",
  healthPoints: 100,
  attackPower: 4,
  baseAttackPower: 4,
  force: 0,
  counterAttackPower: 10
};
var sidious = {
  id: "sidious",
  name: "Darth Sidious",
  healthPoints: 150,
  attackPower: 8,
  baseAttackPower: 8,
  force: 0,
  counterAttackPower: 8
};
var maul = {
  id: "maul",
  name: "Darth Maul",
  healthPoints: 180,
  attackPower: 1,
  baseAttackPower: 1,
  force: 0,
  counterAttackPower: 50
};
module.exports.obi = obi;
module.exports.luke = luke;
module.exports.sidious = sidious;
module.exports.maul = maul;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
var add = __webpack_require__(4);
var game = __webpack_require__(0);
var ui = __webpack_require__(5);

ui.start();


$(document).ready(function(){
    
    ui.charectersDivs.on('click', selectPlayers);

    function selectPlayers() {
        if(!game.playerSelected){
            ui.selectPlayer($(this));
            $(this).off( "click");
            console.log($(this));
            let playerId = $(this).attr('id');
            game.selectPlayer(playerId);
            ui.msg("Please Select a Defender");
            ui.dbg(game);
        }
        else if(!game.defenderSelected){
            ui.selectDefender($(this));
            let defenderId = $(this).attr('id');
            game.selectDefender(defenderId);
            ui.msg("Fight!");
            ui.dbg(game);
            ui.show(ui.controlsDiv);
            ui.hide(ui.charectersDiv);
        }
    }
    
    ui.ctrl.attack.on('click', function(){
        ui.play(ui.snd.saber);
        game.fight();
        ui.dbg(game);
        if(game.isDefenderDead()){
            game.defender = {};
            game.player.force += 10;
            game.defenderSelected=false;
            ui.removeDefender();
            ui.msg("You won, select a new defender!");
            ui.hide(ui.controlsDiv);
            ui.show(ui.charectersDiv);
        }
        else if(game.isPlayerDead()){
            ui.msg("You are dead!");
            ui.ctrl.restart.show();
            ui.ctrl.attack.hide();
        }
    });

    ui.ctrl.restart.on('click', function(){
        ui.start();
        $(".charecter").on('click', selectPlayers)
    });
    
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function() {
    return 10;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const game = __webpack_require__(0);
var charecters = __webpack_require__(1);
const prettyJSON = __webpack_require__(6);
module.exports = {
  debugDiv: $("#debug"),
  messageDiv: $("#message"),
  controlsDiv: $("#controls"),
  playerDiv: $("#player"),
  defender: "",
  defenderDiv: $("#defender"), // container for the defender
  charectersDivs: $(".charecter"), // select all of the class nodes
  charectersDiv: $('#charecters'), // seleect the containing div
  obiDiv: $("#obi"),
  lukeDiv: $("#luke"),
  sidiousDiv: $("#sidious"),
  maulDiv: $("#maul"),
  attackBtn: $("#attack"),
  snd:{
    theme: new Audio("./assets/sounds/swtheme.mp3"),
    saber: new Audio("./assets/sounds/saber.mp3"),    
    luke: new Audio("./assets/sounds/luke.mp3"),
    obi: new Audio("./assets/sounds/obi.mp3"),
    sidious: new Audio("./assets/sounds/sidious.mp3"),
    maul: new Audio("./assets/sounds/maul.mp3")    

  },
  ctrl:{
      attack: $("#attack"),
      restart: $("#restart")
  },
  updateDebugDiv: function() {
    this.debugDiv.html(prettyJSON(game));
  },
  lukeClick: function() {
    //   alert("Booger Snot");
  },
  selectPlayer: function(charecter) {
    this.playerDiv.append(charecter);
    this.snd[charecter[0].id].load();
    this.snd[charecter[0].id].play();
  },
  selectDefender: function(charecter) {
    this.defender = charecter;
    this.defenderDiv.append(charecter);
    this.snd[charecter[0].id].load();
    this.snd[charecter[0].id].play();
  },
  show: function(el){
    // $(el).attr('style', 'display: visible;')
    $(el).slideDown();
  },
  hide: function(el){
    $(el).slideUp();
  },
  msg: function(msg) {
    this.messageDiv.html(msg);
  },
  dbg: function(msg) {
    this.debugDiv.html(prettyJSON(msg));
  },
  removeDefender: function() {
    $('#defender .charecter').detach();
  },
  playSwTheme: function() {
    // this.snd.theme.load();
    // this.snd.theme.play();
  },
  play: function(sound){
      this.dbg(sound);
      sound.load();
      sound.play();
  },
  start: function(){
      
      this.charectersDiv.empty();
      this.playerDiv.empty();
      this.defenderDiv.empty();
      game.player = {};
      game.defender = {};
      console.log(charecters);
      var charecterFactory = Object.create(charecters);
      var arr = [];
      arr.push(charecterFactory.luke);
      arr.push(charecterFactory.obi);
      arr.push(charecterFactory.sidious);
      arr.push(charecterFactory.maul);

      // Used arrow function to pass this scope
      arr.forEach((charecter)=>{
        var el = $('<div>');
        el.attr('id', `${charecter.id}`);
        el.addClass('charecter');
        el.attr('data-health-points', charecter.healthPoints);
        el.attr('data-attack-power', charecter.attackPower);
        this.charectersDiv.append(el);
      });
    
    this.charectersDivs= $(".charecter"),
    this.msg("Please Select a Charector");
    this.dbg(prettyJSON(arr));
    this.updateDebugDiv();
    this.hide(this.controlsDiv);
    this.hide(this.ctrl.restart);
    this.show(this.charectersDiv);
  }
};


    

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = json => `<pre>${JSON.stringify(json, null, 2)}</pre>`;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map