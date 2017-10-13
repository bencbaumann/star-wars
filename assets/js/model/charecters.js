var charecters = {
  obi: {
    id: "obi",
    name: "Obi-Wan Kanobi",
    healthPoints: 120,
    attackPower: 6,
    baseAttackPower: 6,
    force: 0,
    counterAttackPower: 12
  },
  luke: {
    id: "luke",
    name: "Luke Skywalker",
    healthPoints: 100,
    attackPower: 4,
    baseAttackPower: 4,
    force: 0,
    counterAttackPower: 10
  },
  sidious: {
    id: "sidious",
    name: "Darth Sidious",
    healthPoints: 150,
    attackPower: 8,
    baseAttackPower: 8,
    force: 0,
    counterAttackPower: 8
  },
  maul: {
    id: "maul",
    name: "Darth Maul",
    healthPoints: 180,
    attackPower: 1,
    baseAttackPower: 1,
    force: 0,
    counterAttackPower: 50
  },
  init: function() {
    this.obi.healthPoints = 120;
    this.obi.attackPower = 6;
    this.obi.baseAttackPower = 6;
    this.obi.force = 0;
    this.obi.counterAttackPower = 12;

    this.luke.healthPoints = 100;
    this.luke.attackPower = 4;
    this.luke.baseAttackPower = 4;
    this.luke.force = 0;
    this.luke.counterAttackPower = 10;

    this.sidious.healthPoints = 150;
    this.sidious.attackPower = 8;
    this.sidious.baseAttackPower = 8;
    this.sidious.force = 0;
    this.sidious.counterAttackPower = 8;

    this.maul.healthPoints = 180;
    this.maul.attackPower = 1;
    this.maul.baseAttackPower = 1;
    this.maul.force = 0;
    this.maul.counterAttackPower = 50;
  }
};

module.exports = charecters;
