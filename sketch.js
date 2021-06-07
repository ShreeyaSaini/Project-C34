const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var box13, box14, box15,box16, box17,box18,box19,box20,box21,box22,box23;
var box24, box25, box26, box27, box28, box29, box30,box31, box32,box33;
var box34, box35, box36, box37, box38, box39, box40;
var hero,monster,rope,ground;

var gamestate = "onRope";

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1700, 700);

  engine = Engine.create();
  world = engine.world;

  //create ground
  ground = new Ground(750, 600, 2000, 25);
  //create hero 
  hero = new Hero(400,800,250);
  //create a rope
  rope = new Rope(hero.body, { x: 500, y: 50 });
  //create monster
  monster = new Monster(1500,550,300);

  //create boxes
  //row1
  box1 = new Box(620, 100, 70, 70);
  box2 = new Box(620, 100, 70, 70);
  box3 = new Box(620,100,70,70);
  box4 = new Box(620,100,70,70);
  box5 = new Box(620, 100, 70, 70);
  box6 = new Box(620,100,70,70);
  box7 = new Box(620,100,70,70);
  
  //row2
  box8 = new Box(700,100,70,70);
  box9 = new Box(700,100,70,70);
  box10 = new Box(700,100,70,70);
  box11= new Box(700,100,70,70);
  box12 = new Box(700,100,70,70);

  //row3
  box13 = new Box(780,100,70,70);
  box14 = new Box(780,100,70,70);
  box15 = new Box(780,100,70,70);
  box16 = new Box(780,100,70,70);
  box17 = new Box(780,100,70,70);
  box18 = new Box(780,100,70,70);
  box19 = new Box(780,100,70,70);
 
 //row4
  box20 = new Box(860, 100, 70, 70);
  box21 = new Box(860, 100, 70, 70);
  box22 = new Box(860, 100, 70, 70);
  box23 = new Box(860, 100, 70, 70);
  
  //row5
  box24= new Box(940,100,70,70);
  box25= new Box(940,100,70,70);
  box26= new Box(940,100,70,70)
  box27= new Box(940,100,70,70);
  box28= new Box(940,100,70,70);
  box29= new Box(940,100,70,70);
  box30= new Box(940,100,70,70);
  box31= new Box(940,100,70,70);

  box32 = new Box(1020,100,70,70);
  box33 = new Box(1020,100,70,70);
  box34 = new Box(1020,100,70,70);
  box35 = new Box(1020,100,70,70);
  box36 = new Box(1020,100,70,70);
  box37 = new Box(1020,100,70,70);

}

function draw() {
  background(bg);

  Engine.update(engine);
  
  //display
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}