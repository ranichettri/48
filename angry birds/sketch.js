var database;
var gS=0;
var form,game,ps,player;
var birds,bird1,bird2,bird3;
var allPlayers;
var backGround;

function preload(){
 backGround=loadImage("images/bg1.jpg");
 road=loadImage("images/track1.jpg");
 blueBird=loadAnimation("images/blue bird/bb1.png","images/blue bird/bb2.png","images/blue bird/bb3.png","images/blue bird/bb4.png");
 yellowBird=loadAnimation("images/yellow bird/yb1.png","images/yellow bird/yb2.png","images/yellow bird/yb3.png","images/yellow bird/yb4.png","images/yellow bird/yb5.png","images/yellow bird/yb6.png");
 redBird=loadAnimation("images/red bird/rb1.png","images/red bird/rb2.png","images/red bird/rb3.png","images/red bird/rb4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  //gS = 10;
  game.getState();
  //console.log(gS);
  game.start();
}

function draw() {
  if(gS === 0 ){
  background(backGround);
  }
  
  if(ps === 3){
    game.updateState(1);
  }
  if(gS === 1){
    clear();
    game.play();
  //  background(road); 
  }
  if(gS === 2){
    game.end();
  }
}