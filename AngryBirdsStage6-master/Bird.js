class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
   this.ay = []
   this.img = loadImage("sprites/smoke.png") 
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
  if(this.body.velocity.x > 10 && this.body.position.x>200){


  
  
  
  
    var abt =[this.body.position.x,this.body.position.y]

   this.ay.push(abt)
  }
  for(var i=0;i<this.ay.length;i++){
   image(this.img,this.ay[i][0],this.ay[i][1])
  }


    super.display();
  }
}
