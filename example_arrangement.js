/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [212,180,140]

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
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
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      if (i == 0) {
        // center face
        let eye_value = 2;
        let tilt_value = random(-45, 45);
        let mouth_value =int(random(1, 3));
        let is_cyclops = random(0, 100);
        if(is_cyclops < 10) {
          eye_value = 1;
          tilt_value = random(-5, 5);
          mouth_value = int(random(1, 3));
        }
        push();
        translate(x, y);
        scale(w/25, h/25);

        let petalHight_value= random(0, 100);
        let petalWide_value= random(0, 100);
        daisyFace(tilt_value, eye_value, mouth_value,petalHight_value,petalWide_value)
        pop();
      }
      else if (i > 0) {
        // all other faces
        push();
        translate(x, y);
        scale(w/25, h/25);
        if((i+j)%2 == 0) {

          let bigLeaf_H_value=random(0, 100);
          let bigLeaf_W_value=random(0, 100);
          let heart_W_value=random(0, 100);
          let heart_H_value=random(0, 100);
          let bigLeaf_Angle_value=random(0, 100);

          bigLeaf(bigLeaf_H_value,bigLeaf_W_value,heart_W_value,heart_H_value,bigLeaf_Angle_value)
 
         
          
        }
        else {
          thinness_value = random(0, 100);
          leafHight_value=random(0, 100);
          leafAngle_value=random(0,100)
          eye_switch_value=int(random(1,3))
          mouth_switch_value=int(random(1,3))


       petalHight_value= random(0, 100);
       petalWide_value= random(0, 100);

          strawBerry(thinness_value,leafHight_value, leafAngle_value,eye_switch_value,mouth_switch_value,petalHight_value,petalWide_value);
     
        }
        pop();
      }
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
