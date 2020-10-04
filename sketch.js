//physics engine=matter.js=objects created with the help of physics engine automatically have allthe properties of physics like gravity,bounciness etc
//step number 1= name spacing= giving short names for objects inside matter.js(for ease of reading and writing)
// the short names for matter.js objects will remain the same throught the program hence constant
const Engine = Matter.Engine;//creates the physics engine
const World= Matter.World;//create a world where objects can be added
const Bodies = Matter.Bodies;//creates the bodies or the objects

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    //step 2=create the physics engine and the world
    engine = Engine.create();
    world = engine.world;
    //stap 3 = create the body with its options
    var ball_options={
        restitution:1.0//restitution is for making the ball bounce
    }
    ball= Bodies.circle(200,100,20,ball_options )
    // step 4= add the body into the world
    World.add(world,ball)
    var ground_options ={
        isStatic:true//make the body stationary
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    //step 5 display the body
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)
}