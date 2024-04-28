/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */


let color_DarkGreen = color("#42421c")
let color_ResedaGreen = color("#84805a")
let color_Tan = color("#d4b48c")
let color_IndianRed = color("#bd6868")
let color_Carmine = color("#950a1e")
let color_RoseWood = color("#5f0d11")
let color_Brown = color("#1f0a0b")
let color_White = color("#fdf5e5")
let color_Yellow = color("#dbb447")



function orangeAlienFace(tilt_value, eye_value, mouth_value) {


  const bg_color3 = [71, 222, 100];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7

  let color_DarkGreen = color("#42421c")
  let color_ResedaGreen = color("#84805a")
  let color_Tan = color("#d4b48c")
  let color_IndianRed = color("#bd6868")
  let color_Carmine = color("#950a1e")
  let color_RoseWood = color("#5f0d11")
  let color_Brown = color("#1f0a0b")
  let color_White = color("#fdf5e5")
  let color_Yellow = color("#dbb447")

  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

  // head
  noStroke();
  fill(color_Yellow);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(color_Brown);
    ellipse(centerX, Iy, eyeSize - 1, eyeSize);

  }
  // middle eye
  if (eye_value >= 2) {
    fill(color_Brown);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize);
  }

  // mouth
  fill(color_IndianRed);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function simplePurpleFace() {

  let color_White = color("#fdf5e5")
  let color_Yellow = color("#dbb447")
  let color_ResedaGreen = color("#84805a")
  let color_Brown = color('#1f0a0b')
  
  fill(color_White)
  ellipse(1,1,10)

}  



function Leaf(    thinness_value,leafHight_value){

  let leafHight = map(leafHight_value,0,100,4,10)
  quad(0,-leafHight,      1.5,-6,     0,0,          -1.5,-6);


}
/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function strawBerry(thinness_value,leafHight_value, leafAngle_value) {
  // head

  angleMode(DEGREES);
  noStroke();
  let color_Carmine = color("#950a1e")

  let color_Brown = color('#1f0a0b')
  let color_DarkGreen = color("#42421c")
  let color_ResedaGreen = color("#84805a")
  let leafHight=map(leafHight_value,0,100,1,10)


  fill(color_Carmine);

  let head_width = map(thinness_value, 0, 100, 10, 20);
  // rect(-head_width/2, -9, head_width, 18);
  // triangle(-head_width / 2, -9, head_width / 2, -9, head_width / 11, 10)




  let= RF_x = map(thinness_value, 0, 100, -head_width/2, 10)
  let RF_size=map(head_width,0,40,0,random(10,20))
  let leafAngle=map(leafAngle_value,0,100,40,50)
  let leafPoint_Y=-2
  strokeJoin(ROUND);


    
  fill(color_Carmine);
  stroke(color_Carmine);
  strokeWeight(8);
  triangle(-head_width / 2+3, 0, head_width / 2-3, 0, 0 , 8);

  strokeWeight(1);
  stroke(color_ResedaGreen);
  fill( color_ResedaGreen);


  push()
  
  translate (0,leafPoint_Y)
  scale(1,1)
  Leaf(    thinness_value,leafHight_value)
  pop()

  push()
  translate (0,leafPoint_Y)
  rotate(leafAngle)

  Leaf(    thinness_value,leafHight_value)
  pop()

  push() 
  translate (0,leafPoint_Y)
  rotate(-leafAngle)

  Leaf(    thinness_value,leafHight_value)
  pop()



  

  
  noStroke();
  fill(color_Brown);
  ellipse(470/RF_x,40/RF_x,20/RF_x);
  ellipse(470*1.1/RF_x,40/RF_x,20/RF_x);

    // eyes
    fill(color_Brown);
    ellipse(-2, 6, 1);
    ellipse(2, 6, 1);

}


