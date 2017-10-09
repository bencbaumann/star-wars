require("../css/style.css");
var add = require('./lib/add.js');
var game = require('./controllers/game.js');
var ui = require('./controllers/ui.js');

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
