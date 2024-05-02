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

let quilt_mode = true; 

function draw() {//flip 4 times
  // clear screen
  // background(212,180,140);
  background(bg_color1);
  noStroke();

  if (quilt_mode) {
    push();
    scale(0.5);
    drawModule();
    pop();

    push();
    translate(canvasWidth, 0);
    scale(0.5);
    scale(-1, 1)
    drawModule();
    pop();

    push();
    translate(0, canvasHeight);
    scale(0.5);
    scale(1, -1)
    drawModule();
    pop();

    push();
    translate(canvasWidth, canvasHeight);
    scale(0.5);
    scale(-1, -1)
    drawModule();
    pop();
  }
  else {
    drawModule();
  }



  let eye_value = 2;
  let tilt_value = random(-45, 45);
  let mouth_value = int(random(1, 3));



  let petalHight_value = random(0, 100);
  let petalWide_value = random(0, 100);
  let petalNumber_value = random(0, 100);



  let thinness_value = random(0, 100);
  let leafHight_value = random(0, 100);
  let leafAngle_value = random(0, 100)
  let eye_switch_value = int(random(1, 3))
  let mouth_switch_value = int(random(1, 3))







  let bigLeaf_H_value = random(0, 100);
  let bigLeaf_W_value = random(0, 100);
  let heart_W_value = random(0, 100);
  let heart_H_value = random(0, 100);
  let bigLeaf_Angle_value = random(0, 100);





  push()
  let face_switch=int(random(1,5))
  translate(960/2,500/2)

  scale(10)

  if (face_switch == 1 | face_switch == 2) {

    strawBerry(thinness_value, leafHight_value, leafAngle_value, eye_switch_value, mouth_switch_value, petalHight_value, petalWide_value);


  }

  //cool eyes  
  if (face_switch == 4) {
  

    bigLeaf(bigLeaf_H_value, bigLeaf_W_value, heart_W_value, heart_H_value, bigLeaf_Angle_value)


}

if (face_switch == 3) {
  
  rotate(random(-10,10))
  daisyFace(tilt_value, eye_value, mouth_value, petalHight_value, petalWide_value, petalNumber_value)

 
 
 }
  
pop()

}

function drawModule() {

  let color_DarkGreen = color("#42421c")

  if (millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }


  randomSeed(curRandomSeed);


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

  let random_daisyFace_size_Fac = random(10, 24)
  let random_DaisyX = random(550, 750)
  let random_DaisyY = random(230, 290)


  let thinness_value = random(0, 100);
  let leafHight_value = random(0, 100);
  let leafAngle_value = random(0, 100)
  let eye_switch_value = int(random(1, 3))
  let mouth_switch_value = int(random(1, 3))




  let random_BerryX = random(200, 380)
  let random_BerryY = random(180, 240)
  let random_Berry_size_Fac = random(17, 10)



  let bigLeaf_H_value = random(0, 100);
  let bigLeaf_W_value = random(0, 100);
  let heart_W_value = random(0, 100);
  let heart_H_value = random(0, 100);
  let bigLeaf_Angle_value = random(0, 100);

  let random_LeafX = random(450, 490)
  let random_LeafY = random(120, 280)
  let random_Leaf_size_Fac = random(10, 8)


  let branch_Stroke = 1


  // connect loctions of each face to the main Vine
  let daisyBranch_Offest = random(200, 150)
  let daisyBranchX = random_DaisyX + daisyBranch_Offest
  let daisyBranchY = random_DaisyY - daisyBranch_Offest

  let Leaf_Offest = random(100, 150)
  let LeafBranchX = random_LeafX - Leaf_Offest
  let LeafBranchY = random_LeafY - Leaf_Offest

  let StrawBerry_Offest = random(-150, -100)
  let StrawBerryBranchX = random_BerryX + StrawBerry_Offest
  let StrawBerryBranchY = random_BerryY - StrawBerry_Offest


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





  //Leaf Random background 1
  push()
  translate(LeafBranchX + 400, LeafBranchY)
  scale(w / random_Leaf_size_Fac, h / random_Leaf_size_Fac)
  rotate(random(-0, 360))
  bigLeaf(bigLeaf_H_value, bigLeaf_W_value, heart_W_value, heart_H_value, bigLeaf_Angle_value)

  pop()

  //Leaf Random background 2
  push()
  translate(LeafBranchX - 350, LeafBranchY + 500)
  scale(w / random_Leaf_size_Fac, h / random_Leaf_size_Fac)
  rotate(random(0, 360))
  bigLeaf(bigLeaf_H_value, bigLeaf_W_value, heart_W_value, heart_H_value, bigLeaf_Angle_value)

  pop()

  //Leaf Random background 3
  push()
  translate(LeafBranchX + 500, LeafBranchY + -100)
  scale(w / random_Leaf_size_Fac, h / random_Leaf_size_Fac)
  rotate(random(0, 360))
  bigLeaf(bigLeaf_H_value, bigLeaf_W_value, heart_W_value, heart_H_value, bigLeaf_Angle_value)

  pop()



  //The DaisyI
  push()

  translate(random_DaisyX, random_DaisyY);
  scale(w / random_daisyFace_size_Fac, h / random_daisyFace_size_Fac);



  strokeWeight(branch_Stroke * 1.7)//branch stroke
  //Daisy Branch I
  beginShape();
  curveVertex(0, 0);
  curveVertex(daisyBranch_Offest * random_daisyFace_size_Fac / w, -daisyBranch_Offest * random_daisyFace_size_Fac / h,);

  curveVertex(5, random(-10, -20));
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();
  pop()



  //Daisy Face I
  push()
  translate(daisyBranchX, daisyBranchY);
  scale(w / random_daisyFace_size_Fac, h / random_daisyFace_size_Fac);
  rotate(random(-20, 10))
  daisyFace(tilt_value, eye_value, mouth_value, petalHight_value, petalWide_value, petalNumber_value)
  pop();



  //The StrawBerry I
  push()
  translate(random_BerryX, random_BerryY)
  scale(w / random_Berry_size_Fac, h / random_Berry_size_Fac)



  strokeWeight(branch_Stroke)//branch stroke

  //StrawBerry Branch I
  beginShape();
  curveVertex(0, 0);
  curveVertex(StrawBerry_Offest * random_Berry_size_Fac / w, -StrawBerry_Offest * random_Berry_size_Fac / h,);

  curveVertex(random(0, 2), random(6, 10));
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();
  pop()

  //StrawBerry Face I
  push()
  translate(StrawBerryBranchX, StrawBerryBranchY);
  scale(w / random_Berry_size_Fac, h / random_Berry_size_Fac)
  rotate(random(100, 170))
  strawBerry(thinness_value, leafHight_value, leafAngle_value, eye_switch_value, mouth_switch_value, petalHight_value, petalWide_value);
  pop()





  //The LeafI
  push()


  translate(random_LeafX, random_LeafY)
  scale(w / random_Leaf_size_Fac, h / random_Leaf_size_Fac)


  strokeWeight(branch_Stroke)//branch stroke


  //Leaf Branch I
  beginShape();
  curveVertex(0, 0);
  curveVertex(-Leaf_Offest * random_Leaf_size_Fac / w, -Leaf_Offest * random_Leaf_size_Fac / h,);

  curveVertex(random(-2, 1), random(-9, -10));
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();
  pop()

  //Leaf Random I
  push()
  translate(LeafBranchX, LeafBranchY)
  scale(w / random_Leaf_size_Fac, h / random_Leaf_size_Fac)
  rotate(random(-170, -110))
  bigLeaf(bigLeaf_H_value, bigLeaf_W_value, heart_W_value, heart_H_value, bigLeaf_Angle_value)

  pop()



  //The Leaf II

  let Leaf_Offest_2 = -150
  let LeafBranchX_2 = random_LeafX - Leaf_Offest_2
  let LeafBranchY_2 = random_LeafY - Leaf_Offest_2



  push()


  translate(random_LeafX, random_LeafY)
  scale(w / random_Leaf_size_Fac, h / random_Leaf_size_Fac)


  strokeWeight(branch_Stroke)//branch stroke


  //Leaf BranchII
  beginShape();
  curveVertex(0, 0);
  curveVertex(-Leaf_Offest_2 * random_Leaf_size_Fac / w, -Leaf_Offest_2 * random_Leaf_size_Fac / h,);

  curveVertex(random(1, 10), random(0, 20));
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();
  pop()


  //The StrawBerryII


  let random_Berry_size_Fac_2 = random(17, 10)
  let StrawBerry_Offest_2 = -200
  let StrawBerryBranchX_2 = random_BerryX - StrawBerry_Offest_2
  let StrawBerryBranchY_2 = random_BerryY - StrawBerry_Offest_2

  push()
  translate(random_BerryX, random_BerryY)
  scale(w / random_Berry_size_Fac_2, h / random_Berry_size_Fac_2)



  strokeWeight(branch_Stroke)//branch stroke

  //StrawBerry BranchII
  beginShape();
  curveVertex(0, 0);
  curveVertex(-StrawBerry_Offest_2 * random_Berry_size_Fac_2 / w, -StrawBerry_Offest_2 * random_Berry_size_Fac_2 / h,);

  curveVertex(random(0, 10), random(6, 10));
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();
  pop()
  //Leaf RandomII
  push()
  translate(LeafBranchX_2, LeafBranchY_2)
  scale(w / random_Leaf_size_Fac, h / random_Leaf_size_Fac)
  rotate(random(-170, -110))
  bigLeaf(bigLeaf_H_value, bigLeaf_W_value, heart_W_value, heart_H_value, bigLeaf_Angle_value)

  pop()

  //The Leaf III

  let Leaf_Offest_3 = 120
  let LeafBranchX_3 = random_LeafX - Leaf_Offest_3
  let LeafBranchY_3 = random_LeafY - Leaf_Offest_3 + 200





  //Leaf Random III
  push()
  translate(LeafBranchX_3, LeafBranchY_3)
  scale(w / random_Leaf_size_Fac, h / random_Leaf_size_Fac)
  rotate(random(-20, -110))
  bigLeaf(bigLeaf_H_value, bigLeaf_W_value, heart_W_value, heart_H_value, bigLeaf_Angle_value)

  pop()





  //StrawBerry FaceII
  push()
  translate(StrawBerryBranchX_2, StrawBerryBranchY_2);
  scale(w / random_Berry_size_Fac_2, h / random_Berry_size_Fac_2)
  rotate(random(0, 360))
  strawBerry(thinness_value, leafHight_value, leafAngle_value, eye_switch_value, mouth_switch_value, petalHight_value, petalWide_value);
  pop()


  //StrawBerry FaceIII
  push()
  translate(StrawBerryBranchX_2 + 200, StrawBerryBranchY_2 - 200);
  scale(w / random_Berry_size_Fac_2, h / random_Berry_size_Fac_2)
  rotate(random(0, -180))
  strawBerry(thinness_value, leafHight_value, leafAngle_value, eye_switch_value, mouth_switch_value, petalHight_value, petalWide_value);
  pop()


  //Daisy FaceII
  push()
  translate(daisyBranchX - random(100, 200), daisyBranchY + random(300, 270));
  scale(w / random_daisyFace_size_Fac, h / random_daisyFace_size_Fac);
  rotate(random(-20, 10))
  daisyFace(tilt_value, eye_value, mouth_value, petalHight_value, petalWide_value, petalNumber_value)
  pop();

 

}


// function centerface(){


// }


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
