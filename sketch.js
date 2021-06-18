var helicopterIMG, helicopterSprite, packageSprite, packageIMG, box9, boxR;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0, isStatic: true,frictionAir: 1 });
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);

	box9 = new Box(width / 2, 650, 160, 10);
	World.add(world, box9);
	box10 = new Box( 320, 575, 10, 160);
	World.add(world, box10);
	box11 = new Box( 485, 575, 10, 160);
	World.add(world, box11);



}


function draw() {

	rectMode(CENTER);

	background(0);
	Engine.run(engine);

	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y

	drawSprites();
	box9.display();
	box10.display();
	box11.display();





}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {

		Matter.Body.setStatic(packageBody, false);


	}
}



