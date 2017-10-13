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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var charecters = __webpack_require__(3);
module.exports = {
  debug: false,
  playerSelected: false,
  defenderSelected: false,
  defenders: 3,
  charecters: charecters,
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
      this.defender = {};
      this.defenderSelected = false;
      return true;
    }
  },
  isPlayerDead: function() {
    if (this.player.healthPoints <= 0) {
      return true;
    }
  },
  init:function(){
      charecters.init();     
      this.player = {};
      this.defender = {};
      this.defenders=3;
      this.playerSelected = false;
      this.defenderSelected = false;
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
const game = __webpack_require__(0);
const ui = __webpack_require__(4);



$(document).ready(function() {

    ui.gameDiv.hide();
    ui.gameDiv.delay(34000).fadeIn();
    ui.start();

    $(document).on('keyup', closeIntro);
    function closeIntro() {
        console.log(ui.introDiv);  
        console.log(ui.gameDiv);  
        ui.hide(ui.introDiv);
        ui.show(ui.gameDiv);      
        ui.snd.stop(ui.snd.theme);
        ui.intro = true;
    }
    
    

    const selectPlayers = function () {
        if(game.debug){ui.dbg(game)};
        if (!game.playerSelected) {
          ui.selectPlayer($(this));
          let playerId = $(this).attr("id");
          game.selectPlayer(playerId);
          ui.msg("Please Select a Defender");
          if(game.debug){ui.dbg(game)};
          $(this).off("click");
        } else if (!game.defenderSelected) {
          ui.selectDefender($(this));
          let defenderId = $(this).attr("id");
          game.selectDefender(defenderId);
          ui.msg("Fight!");
          if(game.debug){ui.dbg(game)};
          ui.show(ui.controlsDiv);
          ui.hide(ui.charectersDiv);
        }
      }

ui.charectersDivs.on("click", selectPlayers);


  ui.ctrl.attack.on("click", function() {
    ui.play(ui.snd.saber);
    game.fight();
    if(game.debug){ui.dbg(game)};
    ui.player = $('#player div');
    ui.defender = $('#defender div');
    ui.player.attr('data-health-points', game.player.healthPoints);
    ui.player.attr('data-attack-power', game.player.attackPower);
    ui.defender.attr('data-health-points', game.defender.healthPoints);
    ui.defender.attr('data-attack-power', game.defender.attackPower);
    if (game.isPlayerDead()) {
      ui.msg("You are dead!");
      ui.ctrl.restart.show();
      ui.ctrl.attack.hide();
    }
    else if (game.isDefenderDead()) {
      game.defenders--;
      game.player.force += 10;
      ui.removeDefender();
      ui.msg("You won, select a new defender!");
      ui.hide(ui.controlsDiv);
      ui.show(ui.charectersDiv);
      if(game.defenders===0){
        ui.msg("You've killed em all");
        ui.show(ui.controlsDiv);
        ui.ctrl.restart.show();
        ui.ctrl.attack.hide();
      }
    } 
  });

  ui.ctrl.restart.on("click", function() {
    game.init();
    ui.start();
    ui.ctrl.attack.show();
    $('#charecters').on('click', '.charecter', selectPlayers);    
  });
});




/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var charecters = {
  luke: {
    id: "luke",
    name: "Luke Skywalker",
    healthPoints: 0,
    attackPower: 0,
    baseAttackPower: 0,
    force: 0,
    counterAttackPower: 0
  },
  obi: {
    id: "obi",
    name: "Obi-Wan Kanobi",
    healthPoints: 0,
    attackPower: 0,
    baseAttackPower: 0,
    force: 0,
    counterAttackPower: 0
  },
  sidious: {
    id: "sidious",
    name: "Darth Sidious",
    healthPoints: 0,
    attackPower: 0,
    baseAttackPower: 0,
    force: 0,
    counterAttackPower: 0
  },
  maul: {
    id: "maul",
    name: "Darth Maul",
    healthPoints: 0,
    attackPower: 0,
    baseAttackPower: 0,
    force: 0,
    counterAttackPower: 0
  },
  init: function() {
    this.luke.healthPoints = 100;
    this.luke.attackPower = 12;
    this.luke.baseAttackPower = 12;
    this.luke.force = 0;
    this.luke.counterAttackPower = 15;

    this.obi.healthPoints = 110;
    this.obi.attackPower = 12;
    this.obi.baseAttackPower = 12;
    this.obi.force = 0;
    this.obi.counterAttackPower = 12;

    this.sidious.healthPoints = 140;
    this.sidious.attackPower = 12;
    this.sidious.baseAttackPower = 12;
    this.sidious.force = 0;
    this.sidious.counterAttackPower = 10;

    this.maul.healthPoints = 160;
    this.maul.attackPower = 8;
    this.maul.baseAttackPower = 8;
    this.maul.force = 0;
    this.maul.counterAttackPower = 18;
  }
};

module.exports = charecters;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const game = __webpack_require__(0);
const prettyJSON = __webpack_require__(5);
module.exports = {
  introDiv: $("#intro"),
  gameDiv: $("#game"),
  debugDiv: $("#debug"),
  messageDiv: $("#message"),
  controlsDiv: $("#controls"),
  playerDiv: $("#player"),
  defender: "",
  defender: "",
  defenderDiv: $("#defender"), // container for the defender
  charectersDivs: $(".charecter"), // select all of the class nodes
  charectersDiv: $('#charecters'), // seleect the containing div
  obiDiv: $("#obi"),
  lukeDiv: $("#luke"),
  sidiousDiv: $("#sidious"),
  maulDiv: $("#maul"),
  attackBtn: $("#attack"),
  intro: false,
  snd:{
    theme: new Audio("./assets/sounds/swtheme.mp3"),
    saber: new Audio("./assets/sounds/saber.mp3"),    
    luke: new Audio("./assets/sounds/luke.mp3"),
    obi: new Audio("./assets/sounds/obi.mp3"),
    sidious: new Audio("./assets/sounds/sidious.mp3"),
    maul: new Audio("./assets/sounds/maul.mp3"),
    stop: function(snd){
      snd.pause();
    }    

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
    this.player = charecter;
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
    $(el).show();
  },
  hide: function(el){
    $(el).hide();
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

  play: function(sound){
      this.dbg(sound);
      sound.load();
      sound.play();
  },
  start: function(){
      game.init();
      if(!this.intro){
        this.play(this.snd.theme)
      };
      this.charectersDiv.empty();
      this.playerDiv.empty();
      this.defenderDiv.empty();
      console.log(game.charecters);
      var arr = [];
      arr.push(game.charecters.luke);
      arr.push(game.charecters.obi);
      arr.push(game.charecters.sidious);
      arr.push(game.charecters.maul);

      // Used arrow function to pass this scope
      arr.forEach((charecter)=>{
        var el = $('<div>');
        el.attr('id', `${charecter.id}`);
        el.addClass('charecter');
        el.attr('data-health-points', charecter.healthPoints);
        el.attr('data-attack-power', charecter.attackPower);
        el.attr('data-counter-attack', charecter.counterAttackPower);
        this.charectersDiv.append(el);
      });
    
    this.charectersDivs= $(".charecter"),
    this.msg("Please Select a Charector");
    if(game.debug){this.dbg(prettyJSON(game))};
    this.updateDebugDiv();
    this.hide(this.controlsDiv);
    this.hide(this.ctrl.restart);
    this.show(this.charectersDiv);
  }
};


    

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = json => `<pre>${JSON.stringify(json, null, 2)}</pre>`;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map