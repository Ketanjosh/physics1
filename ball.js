class Ball{
    constructor(x,y){
      
  var options={ isStatic:false, restitution:0.3, friction:0.5, density:1.2 }
      this.body=Bodies.circle(x,y,50,options)
     World.add(world,this.body)
   // this.image=loadImage("paper.png")
      this.radius=50;
    
  
    }
    display(){
      var pos=this.body.position 
    //image(this.image,pos.x,pos.y,this.radius,this.radius)
    ellipse(100,610,100,100);
    }
  }