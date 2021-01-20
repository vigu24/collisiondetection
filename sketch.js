var mr ,fr;



function setup() {
  createCanvas(400,400);
 fr= createSprite(200, 200, 50, 50);
mr = createSprite(20,20,40,60);


}

function draw() {
  background(0);  
  mr.x= mouseX;
  mr.y= mouseY;

if (mr.x-fr.x<mr.width/2+fr.width/2&&fr.x-mr.x<mr.width/2+fr.width/2&&fr.y-mr.y<mr.height/2+fr.height/2&&mr.y-fr.y<mr.height/2+fr.height/2){
mr.shapeColor="red";
fr.shapeColor="red";

}
else{
  mr.shapeColor="green"; 
  fr.shapeColor="green";
}


  drawSprites();
}