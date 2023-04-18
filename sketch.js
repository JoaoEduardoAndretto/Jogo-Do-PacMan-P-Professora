const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body;


var rect1, rect2, rect3, rect4;

function preload()
{
}




function setup() 
{
    createCanvas (windowWidth - 600,windowHeight - 20);

    engine = Engine.create();
    world = engine.world;

    var rectangle_options = 
    {
        isStatic : true
    };
    
    rect1 = Bodies.rectangle (50,100,50,50, rectangle_options);
    World.add(world, rect1);

    rect2 = Bodies.rectangle (200,200,50,50, rectangle_options);
    World.add(world, rect2);

    rect3 = Bodies.rectangle (200,200,50,50, rectangle_options);
    World.add(world, rect3);

    rect4 = Bodies.rectangle (200,200,50,50, rectangle_options);
    World.add(world, rect4);



}





function draw() 
{
    background (0);
    stroke("#00008B");
    noFill();

    Engine.update(engine);
    

    rect(rect1.position.x,rect1.position.y, 50,50);
    rect(rect2.position.x,rect2.position.y, 50,50);
    rect(rect3.position.x,rect3.position.y, 50,50);
    rect(rect4.position.x,rect4.position.y, 50,50);


}
