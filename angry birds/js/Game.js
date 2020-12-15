class Game{
  constructor(){}

  getState(){
    database.ref('gameState').on("value",function(data){
      gS = data.val();
      //console.log(gS)
    })
  }

  updateState(state){
    database.ref('/').update({
      gameState : state
    })
  }

  async start(){
    //console.log("check");
    //console.log(gS)
    if(gS === 0){
      player= new Player();
      var playerRef = await database.ref('playercount').once("value");
      if(playerRef.exists()){
        ps = playerRef.val();
        player.getCount();
      }
      form = new Form();
      form.display()
    }
    bird1 = createSprite(100,200,10,10);
    bird1.addAnimation("red bird",redBird);
    bird2 = createSprite(300,200,10,10);
    bird2.addAnimation("yellow bird",yellowBird);
    bird3 = createSprite(500,200,10,10);
    bird3.addAnimation("blue bird",blueBird);

    birds = [bird1,bird2,bird3];
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    player.getBirdsAtEnd();
    if(allPlayers !== undefined){
      background("brown");
      image(road,0,-3*displayHeight,displayWidth-20,displayHeight*4);
      var index = 0;
      var x = 0;
      var y = 0;
      for(var plr in allPlayers){
        index = index+1;
        x = x+350;
        y = displayHeight- allPlayers[plr].distance;
        birds[index-1].x = x ;
        birds[index-1].y = y ;
        if(index === player.index){
          camera.position.x = (displayWidth-20)/2;
          camera.position.y = birds[index-1].y;
        }
      }
    }
    if(keyDown(UP_ARROW)&& player.index !== null){
      player.distance = player.distance+10;
      player.update();
    }
    if(player.distance>2870){
      gS=2;
      textSize(30);
      stroke("black");
    text("GAME ENDED",displayWidth/2,y-200);
    player.rank = player.rank+1;
    console.log(player.rank);
    Player.updateBirdsAtEnd(player.rank);
    text("Rank: "+player.rank,displayWidth/2-50,y-120);
    }
    drawSprites();
  }

  end(){
    
    //console.log("game ended");
  }
}