/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

function setup() {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees

  angleMode(DEGREES);
  rectMode(CENTER)



  let color_PeachYellow = color("#edd596")

}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [212, 180, 140]

function mouseClicked() {
  changeRandomSeed();
}

function draw() {

  let color_DarkGreen = color("#42421c")
  let color_ResedaGreen = color("#84805a")
  let color_Tan = color("#d4b48c")
  let color_IndianRed = color("#bd6868")
  let color_Carmine = color("#950a1e")
  let color_RoseWood = color("#5f0d11")
  let color_Brown = color("#1f0a0b")
  let color_White = color("#fdf5e5")
  let color_Yellow = color("#dbb447")
  if (millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  // background(212,180,140);
  background(bg_color1);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;




  let eye_value = 2;
  let tilt_value = random(-45, 45);
  let mouth_value = int(random(1, 3));
  let is_cyclops = random(0, 100);



  let petalHight_value = random(0, 100);
  let petalWide_value = random(0, 100);
  let petalNumber_value = random(0, 100);

  let random_daisyFace_size_Fac = random(10,24)
  let random_DaisyX = random(550, 750)
  let random_DaisyY = random(230, 290)


  let thinness_value = random(0, 100);
  let leafHight_value = random(0, 100);
  let leafAngle_value = random(0, 100)
  let eye_switch_value = int(random(1, 3))
  let mouth_switch_value = int(random(1, 3))




  let random_BerryX = random(200, 380)
 let  random_BerryY = random(180, 240)
 let  random_Berry_size_Fac = random(17,10)


  let bigLeaf_H_value = random(0, 100);
  let bigLeaf_W_value = random(0, 100);
  let heart_W_value = random(0, 100);
  let heart_H_value = random(0, 100);
  let bigLeaf_Angle_value = random(0, 100);

  let random_LeafX = random(450, 490)
  let random_LeafY = random(120, 280)
  let random_Leaf_size_Fac = random(10,8)


  let branch_Stroke = 1

  let daisyBranch_Offest = random(200,150)
  let daisyBranchX = random_DaisyX + daisyBranch_Offest
  let daisyBranchY = random_DaisyY - daisyBranch_Offest


  let StrawBerry_Offest = random(-150,-100)
  let StrawBerryBranchX = random_BerryX + StrawBerry_Offest
  let StrawBerryBranchY = random_BerryY - StrawBerry_Offest

  let Leaf_Offest = random(100, 150)
  let LeafBranchX = random_LeafX - Leaf_Offest
  let LeafBranchY = random_LeafY - Leaf_Offest




  noFill()
  stroke(color_DarkGreen)
  strokeWeight(19)
  push()


  //the long vine
  beginShape();


  curveVertex(0, 500);


  curveVertex(random_BerryX * 0, random_BerryY * 1.1);
  curveVertex(random_BerryX * 0.4, random_BerryY * 0.7);
  curveVertex(random_BerryX * 0.6, random_BerryY * 1.1);

  curveVertex(random_BerryX, random_BerryY);//berry Position

  curveVertex(random_BerryX + random_LeafX / 10, random_BerryY + random_LeafY / random(8, 10));

  curveVertex(random_LeafX, random_LeafY,);//leaf position

  curveVertex(random_LeafX + random_DaisyX / 7, random_LeafY - random_DaisyY / random(9, 20));

  curveVertex(random_DaisyX, random_DaisyY);

  curveVertex(random_DaisyX * 1.2, random_DaisyY * 1.1);
  curveVertex(random_DaisyX * 1.3, random_DaisyY * 0.5);
  curveVertex(random_DaisyX * 1.6, random_DaisyY * 0);



  curveVertex(960, 0);


  endShape();



  pop()







  


  //The Daisy
  push()

  translate(random_DaisyX, random_DaisyY);
  scale(w / random_daisyFace_size_Fac, h / random_daisyFace_size_Fac);



  strokeWeight(branch_Stroke*1.7)//branch stroke
  //Daisy Branch
  beginShape();
  curveVertex(0, 0);
  curveVertex(daisyBranch_Offest * random_daisyFace_size_Fac / w, -daisyBranch_Offest * random_daisyFace_size_Fac / h,);

  curveVertex(5, random(-10,-20));
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();
  pop()



  //Daisy Face
  push()
  translate(daisyBranchX, daisyBranchY);
  scale(w / random_daisyFace_size_Fac, h / random_daisyFace_size_Fac);
  rotate(random(-20, 10))
  daisyFace(tilt_value, eye_value, mouth_value, petalHight_value, petalWide_value, petalNumber_value)
  pop();



  //The StrawBerry
  push()
  translate(random_BerryX, random_BerryY)
  scale(w / random_Berry_size_Fac, h / random_Berry_size_Fac)


 
  strokeWeight(branch_Stroke)//branch stroke

  //StrawBerry Branch
  beginShape();
  curveVertex(0, 0);
  curveVertex(StrawBerry_Offest * random_Berry_size_Fac / w, -StrawBerry_Offest * random_Berry_size_Fac / h,);

  curveVertex(random(0,2), random(6,10));
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();
  pop()

  //StrawBerry Face
  push()
  translate(StrawBerryBranchX, StrawBerryBranchY);
  scale(w / random_Berry_size_Fac, h / random_Berry_size_Fac)
  rotate(random(100, 170))
  strawBerry(thinness_value, leafHight_value, leafAngle_value, eye_switch_value, mouth_switch_value, petalHight_value, petalWide_value);
  pop()






  //The Leaf
  push()


  translate(random_LeafX, random_LeafY)
  scale(w / random_Leaf_size_Fac, h / random_Leaf_size_Fac)


  strokeWeight(branch_Stroke)//branch stroke


  //Leaf Branch
  beginShape();
  curveVertex(0, 0);
  curveVertex(-Leaf_Offest * random_Leaf_size_Fac / w, -Leaf_Offest * random_Leaf_size_Fac / h,);
  
  curveVertex(random(-2, 1), random(-9, -10));
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();
  pop()

  //Leaf Random
  push()
  translate(LeafBranchX, LeafBranchY)
  scale(w / random_Leaf_size_Fac, h / random_Leaf_size_Fac)
  rotate(random(-170, -110))
  bigLeaf(bigLeaf_H_value, bigLeaf_W_value, heart_W_value, heart_H_value, bigLeaf_Angle_value)

  pop()







}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
