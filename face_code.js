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
let color_PeachYellow = color("#edd596")





 function heartshape(heart_W_value,heart_H_value){

  let heart_W=map(heart_W_value,0,100,2,8)
  let heart_H=map(heart_H_value,0,100,2,5)

  beginShape();
  vertex(0, -heart_H/2);
  bezierVertex(heart_W/20, -heart_H*2, heart_W*1.2, -heart_H*2, 0, 0);
  vertex(0, -heart_H/2);
  bezierVertex(-heart_W/20, -heart_H*2, -heart_W*1.2, -heart_H*2, 0, 0);
  vertex(0, -3);
  endShape();

  bezier(0,0, -heart_W/2, -heart_H*3, heart_W/2, -heart_H*3, 0, 0);


 }

function daisyFace(tilt_value, eye_value, mouth_value,petalHight_value,petalWide_value,petalNumber_value) {

  scale(1,1);
  // const bg_color3 = [71, 222, 100];
  // const fg_color3 = [255, 93, 35];

  let headSize = 9
  let eyeSize = 1;
  let centerX = 0;
  let Iy =0
  let distactBetweenEyes = 2
  let MouthDrop = map(mouth_value,0,100,2,10)
  let Mouth_W=random(0.7,2)

  let pistilSize=2
  let pistilNumber=9
  let petalNumber=int(map(petalNumber_value,0,100,3,6))

  let color_DarkGreen = color("#42421c")
  let color_ResedaGreen = color("#84805a")
  let color_Tan = color("#d4b48c")
  let color_IndianRed = color("#bd6868")
  let color_Carmine = color("#950a1e")
  let color_RoseWood = color("#5f0d11")
  let color_Brown = color("#1f0a0b")
  let color_White = color("#fdf5e5")
  let color_Yellow = color("#dbb447")
  let color_PeachYellow = color("#edd596")






  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

//petals
  for(let i = 0;i<petalNumber;i++){

  
    fill(color_White)
    petal(petalHight_value,petalWide_value)
  
    rotate(360/petalNumber)
  }

  // face & pistil
  noStroke();
  fill(color_Yellow);
  ellipse(centerX, 0, headSize, headSize);

  for(let i = 0;i<pistilNumber;i++){



  
    fill(color_PeachYellow)

    
    ellipse(0, headSize/2.3, pistilSize, pistilSize);
  
    rotate(360/pistilNumber)
 
  }






  // 2 sharp eyes with nose
  if (eye_value === 1 || eye_value == 3) {
    fill(color_IndianRed)
    ellipse(centerX, Iy, eyeSize+1,eyeSize);

    fill(color_Brown);

  

    arc(centerX - distactBetweenEyes, Iy-0.5, eyeSize*1.5,eyeSize*1.5, 0, 180);
    arc(centerX + distactBetweenEyes, Iy-0.5, eyeSize*1.5,eyeSize*1.5, 0, 180);

  }
  // tow round eyes
  if (eye_value >= 2) {
    fill(color_Brown);
    
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize);
  }


  // cool mouth
  if (mouth_value === 1 || mouth_value == 3) {

    strokeWeight(0.5)
    strokeJoin(ROUND)
    stroke(color_Brown);
    noFill()
    beginShape();
    vertex(-Mouth_W, 2);
    vertex(centerX, Iy + 0.5*MouthDrop);
    vertex(Mouth_W, 2);
    endShape();

  }
  // nice mouth
  if (mouth_value >= 2) {


  strokeWeight(0.5)
  strokeJoin(ROUND)
  stroke(color_IndianRed);
  fill(color_IndianRed);
  beginShape();


  arc(centerX, Iy+1, Mouth_W*2, Iy + MouthDrop, 0, 180);
  line(-Mouth_W,Iy+1,Mouth_W,Iy+1)
  endShape();

  noStroke()
  fill(color_White)
  rect(-Mouth_W/20, Iy+1, Mouth_W, Iy + MouthDrop/5)
  }


}



function petal (petalHight_value,petalWide_value){
  noStroke()
  let petalHight=map(petalHight_value,0,100,9,13)
  let petalWide=map(petalWide_value,0,100,10,12)
  bezier(0, 0,  -petalWide, -petalHight,  petalWide, -petalHight, 0, 0);

 }


function  bigLeaf(bigLeaf_H_value,bigLeaf_W_value,heart_W_value,heart_H_value,bigLeaf_Angle_value){

  let color_DarkGreen = color("#42421c")
  let color_ResedaGreen = color("#84805a")
  let color_Tan = color("#d4b48c")
  let color_IndianRed = color("#bd6868")
  let color_Carmine = color("#950a1e")
  let color_RoseWood = color("#5f0d11")
  let color_Brown = color("#1f0a0b")
  let color_White = color("#fdf5e5")
  let color_Yellow = color("#dbb447")




  let heartLeaf_pointY=0
  let bigLeaf_Angle=map(bigLeaf_Angle_value,0,100,90,140)

  let leaf_size_2=map(bigLeaf_H_value,0,100,0.4,0.8)
  let leaf_size_3=map(bigLeaf_H_value,0,100,0.1,0.39)

  // let leaf_size_2=random(0.4,0.8)
  // let leaf_size_3=random(0.1,0.39)



  strokeJoin(ROUND);
  strokeWeight(1)
  stroke(color_ResedaGreen)
  fill(color_ResedaGreen )

  

  
push()
translate(0,heartLeaf_pointY)
scale(1,1)
heartshape(heart_W_value,heart_H_value)
pop()
push()
rotate(bigLeaf_Angle)
heartshape(heart_W_value,heart_H_value)
pop()
push()
rotate(-bigLeaf_Angle)
heartshape(heart_W_value,heart_H_value)
pop()





stroke(color_DarkGreen)
fill(color_DarkGreen )

push()
translate(0,heartLeaf_pointY)
scale(leaf_size_2,leaf_size_2)
heartshape(heart_W_value,heart_H_value)
pop()

push()

rotate(bigLeaf_Angle)
scale(leaf_size_2,leaf_size_2)
heartshape(heart_W_value,heart_H_value)
pop()

push()
rotate(-bigLeaf_Angle)
scale(leaf_size_2,leaf_size_2)
heartshape(heart_W_value,heart_H_value)
pop()


stroke(color_ResedaGreen)
fill(color_ResedaGreen )
push()
translate(0,heartLeaf_pointY)
scale(leaf_size_3,leaf_size_3)
heartshape(heart_W_value,heart_H_value)
pop()
push()
rotate(bigLeaf_Angle)
scale(leaf_size_3,leaf_size_3)
heartshape(heart_W_value,heart_H_value)
pop()
push()
rotate(-bigLeaf_Angle)
scale(leaf_size_3,leaf_size_3)
heartshape(heart_W_value,heart_H_value)
pop()


}  


//strawberry crown leaf
function Leaf(    thinness_value,leafHight_value){

  let leafHight = map(leafHight_value,0,100,4,10)
  quad(0,-leafHight,      1.5,-6,     0,0,          -1.5,-6);


}
/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function strawBerry(thinness_value,leafHight_value, leafAngle_value,eye_switch_value,mouth_switch_value,petalHight_value,petalWide_value) {
  // head

  angleMode(DEGREES);
  noStroke();



let color_DarkGreen = color("#42421c")
let color_ResedaGreen = color("#84805a")
let color_Tan = color("#d4b48c")
let color_IndianRed = color("#bd6868")
let color_Carmine = color("#950a1e")
let color_RoseWood = color("#5f0d11")
let color_Brown = color("#1f0a0b")
let color_White = color("#fdf5e5")
let color_Yellow = color("#dbb447")
let color_PeachYellow = color("#edd596")


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


  //strawberry seeds
let seed_SizeX=10/10
let seed_SizeY=10/10
let seed_Number=int(random(1,6))
let seed_Angle=map(leafAngle_value,0,100,-10,10)
let seed_x=-1
let seed_y=-5


noStroke()

fill(color_Yellow)




push()


for(let i = 0;i<seed_Number;i++){

  
rotate(seed_Angle)
  




    translate(-seed_SizeX/2, +seed_SizeY/2)

  bezier(seed_x -seed_SizeX/2, seed_y+seed_SizeY/2, 
  seed_x-seed_SizeX*2, seed_y-seed_SizeY,  
  seed_x+ seed_SizeX, seed_y-seed_SizeY,   
  seed_x -seed_SizeX/2, seed_y+seed_SizeY/2);







rotate(random(350/seed_Number,320/seed_Number))


}

pop()

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




  let eye_switch=eye_switch_value
  let mouth_switch=mouth_switch_value


  let eye_Space=map(leafHight_value,0,100,1.8,2.1)
  let eye_H=map(leafHight_value,0,100,2.6,5)
  let eye_W=map(leafHight_value,0,100,1,3)
  let Nose_H=map(leafHight_value,0,100,1.5,2)


 
  let mouth_W_2=map(leafHight_value,0,100,1.5,2)
  let centerY=1.3
  let mouth_H=map(leafHight_value,0,100,1.5,2)


// tow round eyes
    if (eye_switch== 1 || eye_switch == 3) {
      noStroke()
      fill(color_Brown);
      
      ellipse(-eye_Space, 1 ,eye_H/2);
      ellipse(eye_Space, 1 ,eye_H/2);
   
      
    }
  
//cool eyes  
    if (eye_switch == 2) {
      noStroke()
      fill(color_IndianRed);

      //nose
      ellipse(0, Nose_H/2, Nose_H-eye_Space/8,Nose_H/2.9);
  
      fill(color_Brown);
   
  
    

      arc(-eye_Space, 0 ,eye_W,eye_H/1.2, 0, 180);
      arc(eye_Space, 0, eye_W,eye_H/1.2,0, 180);
    }


      // cool mouth
  if (mouth_switch === 1 ||mouth_switch== 3) {

    strokeWeight(0.5)
    strokeJoin(ROUND)
    stroke(color_Brown);
    noFill()
    beginShape();
    vertex(-mouth_W_2/2, mouth_H*2);
    vertex(0, centerY + 0.5*mouth_H);
    vertex(mouth_W_2/2, mouth_H*2);
    endShape();

  }
  // nice mouth
  if (mouth_switch >= 2) {


  
  strokeJoin(ROUND)
  strokeWeight(1.5)
  //mouth base
  stroke(color_Carmine);
  fill(color_Carmine);
  beginShape();
  arc(0, centerY+1, mouth_W_2*2, centerY + mouth_H, 0, 180);
  line(-mouth_W_2,centerY+1,mouth_W_2,centerY+1)
  endShape();

  noStroke()

  ellipse(-mouth_W_2*1.5,centerY+0.9,mouth_H*1)
  ellipse(mouth_W_2*1.5,centerY+0.9,mouth_H*1)

  //real mouth
  strokeWeight(0.9)
  stroke(color_IndianRed);
  fill(color_IndianRed);
  beginShape();


  arc(0, centerY+1, mouth_W_2*2, centerY + mouth_H, 0, 180);
  line(-mouth_W_2,centerY+1,mouth_W_2,centerY+1)
  endShape();



  strokeWeight(0.1)
  stroke(color_White);
  fill(color_White)
  rect(-mouth_W_2/20, centerY+mouth_H/2, mouth_W_2, mouth_H/4)
  }





}


