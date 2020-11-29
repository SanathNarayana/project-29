//Namespacing for matter.js 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

//Variable declaration for Bodies
var pentagon;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;
var score;

function preload()
{
  
}
//Setup function
function setup() {
  //To create canvas
  createCanvas(1000,400);

  //Creating small engine and world
  engine = Engine.create();
  world = engine.world;

  //Initial value of score
  score=0;

  //first ground
  ground1=new Ground(390+60,310,270,12);

  //First level
  block1=new boxblue(300+60,275,30,40);
  block2=new boxblue(330+60,275,30,40);
  block3=new boxblue(360+60,275,30,40);
  block4=new boxblue(390+60,275,30,40);
  block5=new boxblue(420+60,275,30,40);
  block6=new boxblue(450+60,275,30,40);
  block7=new boxblue(480+60,275,30,40);

  //Second level
  block8=new boxgreen(330+60,235,30,40);
  block9=new boxgreen(360+60,235,30,40);
  block10=new boxgreen(390+60,235,30,40);
  block11=new boxgreen(420+60,235,30,40);
  block12=new boxgreen(450+60,235,30,40);

  //Third level
  block13=new boxpink(360+60,195,30,40);
  block14=new boxpink(390+60,195,30,40);
  block15=new boxpink(420+60,195,30,40);
  
  //Fouth level
  block16=new boxyellow(390+60,155,30,40);

  //Second ground
  ground2=new Ground(800,225,210,12);

  //Bottom level
  block17=new boxblue(800-60,205,30,40);
  block18=new boxblue(800-30,205,30,40);
  block19=new boxblue(800,205,30,40);
  block20=new boxblue(800+30,205,30,40);
  block21=new boxblue(800+60,205,30,40);

  //Middle level 
  block22=new boxpink(800-30,205-40,30,40);
  block23=new boxpink(800,205-40,30,40);
  block24=new boxpink(800+30,205-40,30,40);

  //Top level
  block25=new boxyellow(800,205-80,30,40);

  //Lower Ground
  ground3=new Ground(500,390,1000,20);

  //pentagon
  pentagon=new polygon(200,200,20);

  //constraint
  sling=new slingShot(pentagon.body,{x:180,y:190})

  

}

function draw() {
  Engine.update(engine);
  //To assign brown background color
  background(255);
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score(); 
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  
  
  //Displaying ground
  ground1.display();

  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("green");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("pink");
  block13.display();
  block14.display();
  block15.display();

  fill("yellow");
  block16.display();
  
  //displaying second ground
  ground2.display();

  
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  //Display middle level
  block22.display();
  block23.display();
  block24.display();
  block25.display();
 
  //Displaying pentagon
  pentagon.display();
  
  //displaying ground 3
  ground3.display();

  //displaying constraint line
  sling.display();

  //Calling score function for each block
  



  //Addiding instructions
  strokeWeight(0);
  textSize(22);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,30);

  
  textSize(24);
  fill("black");
  text("Score : "+score,30,360);
 // console.log(score);

}
//Mouse drag function to adjust the aim of hexagon
function mouseDragged()
{
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}

//mouse release function to null the bodyA nd let it fly
function mouseReleased()
{
   sling.fly();
}

//keypressed function to attach stone back to constraint
function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(pentagon.body,{x:100,y:200});
    sling.attacher(pentagon.body);
  }
}

async function fetchtime()
{
    var time=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var data=await time.json();
    console.log(data);
    var hour=data.datetime.slice(11,13);
    if(hour>=6&&hour<=18)
    {
      bg=color("azure");
      txtcolor=color("black")
    }
    else{
       bg=color("black")
       txtcolor=color("white")
    }
}