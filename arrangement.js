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

  let random_daisyFace_size_Fac = map(petalNumber_value, 0, 100, 30, 24)
  let random_DaisyX = random(550,750)
  let random_DaisyY = random(180,240)


  push();
  translate(random_DaisyX, random_DaisyY);
  scale(w / random_daisyFace_size_Fac, h / random_daisyFace_size_Fac);
  rotate(random(0, 360))

  daisyFace(tilt_value, eye_value, mouth_value, petalHight_value, petalWide_value, petalNumber_value)
  pop();



  thinness_value = random(0, 100);
  leafHight_value = random(0, 100);
  leafAngle_value = random(0, 100)
  eye_switch_value = int(random(1, 3))
  mouth_switch_value = int(random(1, 3))


  petalHight_value = random(0, 100);
  petalWide_value = random(0, 100);

  random_BerryX = random(200, 380)
  random_BerryY = random(180,240)
  random_Berry_size_Fac = random(30, 20)







  




  push()
  noFill()
  stroke(color_DarkGreen)
  strokeWeight(2)
  ellipse (0,0,100,100)
  translate(random_BerryX, random_BerryY)
  scale(w / random_Berry_size_Fac, h / random_Berry_size_Fac)
  beginShape();

  // Add the first anchor point.
  // vertex(w+random_BerryX*2, h+random_BerryY*2);
  vertex(0,0)

  // Add the Bézier vertex.
  bezierVertex(50, -0,
     50, 25,
      -random_BerryX/6, random_BerryY
      , 
    
    
  );


  endShape();
  
  pop()

  push()
  translate(random_BerryX, random_BerryY)
  scale(w / random_Berry_size_Fac, h / random_Berry_size_Fac)
  rotate(random(0, 360))
  strawBerry(thinness_value, leafHight_value, leafAngle_value, eye_switch_value, mouth_switch_value, petalHight_value, petalWide_value);

pop()

  push();

  let bigLeaf_H_value = random(0, 100);
  let bigLeaf_W_value = random(0, 100);
  let heart_W_value = random(0, 100);
  let heart_H_value = random(0, 100);
  let bigLeaf_Angle_value = random(0, 100);

  let random_LeafX = random(450,490)
  let random_LeafY = random(180,240)
  let random_Leaf_size_Fac = random(20,15)

  translate(random_LeafX, random_LeafY)
  scale(w / random_Leaf_size_Fac, h / random_Leaf_size_Fac)


  rotate(random(-30,30))
  bigLeaf(bigLeaf_H_value, bigLeaf_W_value, heart_W_value, heart_H_value, bigLeaf_Angle_value)



  pop();
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
