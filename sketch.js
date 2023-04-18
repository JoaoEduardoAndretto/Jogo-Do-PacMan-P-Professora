const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body;


var rectangle1, rectangle2, rectangle3, rectangle4;

function preload()
{
}




function setup() 
{
    createCanvas (windowWidth,windowHeight);

    var rectangle_options = 
    {
        isStatic : true
    };
    
    rect = Bodies.rectangle1 (200,200,10,10, rectangle_options);
    World.add(world, rectangle1);

    rect = Bodies.rectangle2 (200,200,10,10, rectangle_options);
    World.add(world, rectangle2);

    rect = Bodies.rectangle3 (200,200,10,10, rectangle_options);
    World.add(world, rectangle3);

    rect = Bodies.rectangle4 (200,200,10,10, rectangle_options);
    World.add(world, rectangle4);



}





function draw() 
{
    background (0);
    rectangle1 
    {
        stroke("#00008B");
        noFill();
    }

    rect(rectangle1.position.x,rectangle1.position.y, 10,10);


}
