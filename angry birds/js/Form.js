class Form{
  constructor(){
    this.input = createInput("NAME");
    this.button = createButton("START");
    this.reset = createButton("RESET");
    this.title = createElement('h2');
    this.greeting = createElement('h2');
  }

  display(){
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100, 20);
    this.title.html("Angry Birds Race");
    this.title.position(displayWidth/2 - 50, 0);
  

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name= this.input.value();
      ps=ps+1;
      player.index = ps;
      player.updateCount(ps);
      player.update()

      this.greeting.html("Hello " + player.name);
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      
      
   });

   this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.updateState(0);
   })
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.title.hide();
    this.greeting.hide();
  }
}