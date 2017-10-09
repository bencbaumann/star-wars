const game = require("./game.js");
var charecters = require("../model/charecters.js");
const prettyJSON = require("../lib/prettyJSON.js");
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


    