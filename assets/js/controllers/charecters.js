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
