require("../css/style.css");
const game = require("./controllers/game.js");
const ui = require("./controllers/ui.js");



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


