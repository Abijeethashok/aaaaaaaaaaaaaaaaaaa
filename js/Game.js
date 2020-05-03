class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("GAME START",120,100)
     Player.getplayerinfo()
     if(players!=undefined){
       var displaypos = 130
       for(var plr in players)
       if(plr ="player"+index ){
        fill("red")
     }else{fill("black")}
     displaypos =displaypos+20
     textSize(15)
     text(players[plr].name+":"+players[plr].distance,120,displaypos)
  }
  if(keyIsDown(UP_ARROW)&& player.index!= 0){
    player.distance =player.distance+50
    player.update()
  }
}
}
