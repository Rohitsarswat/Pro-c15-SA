var ball;
var vx = 5;

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,50,50);
}

function draw() 
{
  background(51);
  if(ball.position.x<=25 || ball.position.x>=width-25)
  {
    vx = -vx;
  }
  ball.velocity.x = vx;

  drawSprites();

}

