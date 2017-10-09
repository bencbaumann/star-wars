var charecters = require("../model/charecters.js");
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
