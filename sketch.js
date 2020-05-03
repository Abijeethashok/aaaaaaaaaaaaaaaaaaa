var database;
var drawing = [];
var currentPath = []; 

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  canvas.mousePressed(startPath);

}
function startPath() {
  currentPath = [];
  drawing.push(currentPath);
}


 function draw(){
   background(0); 

   if(mouseIsPressed){
    var point = {
      x: mouseX, 
      y: mouseY
     }
      currentPath.push(point); 
   }
stroke(255)
strokeWeight(4);
noFill();
for (var i =0; i< drawing.length; i++) {
  var path = drawing[i];
  beginShape();
  for (var a =0; a< path.length; a++) {
vertex(path[a].x,path[a].y)
}
endShape();
}
 }
 