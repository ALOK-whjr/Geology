const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber, iron, stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    rubber = new Rubber(200,200,50);
    iron = new Iron(400,200);
    stone = new Stone(600,200);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    hammer.debug = true;

    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
}