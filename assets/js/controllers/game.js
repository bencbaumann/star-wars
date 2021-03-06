var charecters = require("../controllers/charecters.js");
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
