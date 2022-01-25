let arches = [];
let img;

function preload() {
  good = loadImage("garden.png");
  bad = loadImage("smoke.png");
}


function setup() {
  createCanvas(800, 800);
   let w = width*0.06;
  
 
  let a = new Arch(0,0,  w);
  arches.push(a);
}

function draw() {
  background(55);
  rectMode(CORNER);
  let w = width*0.05;
  stroke(171,168,161);
    fill(171,168,161);
  
  
   //draw path
  push();
    stroke(162,77, 64);
    fill(226,109,90);
    translate(width*0.35, height*0.965);
   
//     rect(0,0,w*0.48, w*0.25);
//     for (let j = 0; j < 20; j ++) {
//       if (j === 0) {
//     // translate(this.w*0.24, 0);
//     for (let i = 0; i < 15 ; i++) {
//     rect(i*w*0.48,-j*w*0.25,w*0.48, w*0.25);
//     }
//     // } else if (j % 2 != 0) {
//     //      for (let i = 0; i < 15 ; i++) {
//     // rect(i*w*0.48,-j*w*0.25,w*0.48, w*0.25);
//     //   }
//     } else  {
//       //translate(w*0.24, 0);
//     for (let i = 0; i < 15  ; i++) {
//     rect(i*w*0.48,-j*w*0.25,w*0.48, w*0.25);
//     }
   
//   }
//     }
  
  
  pop();
  
  // draw destination
  push();
   
  //  scale(0.2);
  //  //rect(0,0, w*6, w*8, 20, 20);
  //  //image(good, 0, 0, w*6, w*9, 20,20);
  // //translate(0, height*0.2);
  // rectMode(CORNER);
  // arches[0].show();
  // pop();
  
//   push();
//     translate(width*0.40, height*0.5);
//   scale(0.3);
//   arches[0].show();
//   pop();
  
//    push();
//    translate(width*0.375, height*0.5);
//   scale(0.4);
//   arches[0].show();
//   pop();
  
//   push();
//   translate(width*0.35, height*0.5);
//   scale(0.5);
//   arches[0].show();
//   pop();
  
   push();
   translate(width*0.40, height*0.5);
  scale(0.5);
  arches[0].show();
  pop();
  
//   push();
//   translate(width*0.3, height*0.5);
//   scale(0.7);
//   arches[0].show();
//   pop();
  
   push();
  translate(width*0.345, height*0.5);
  scale(0.725);
  arches[0].show();
  pop();
  
 push();
  translate(width*0.275, height*0.5);
 
  arches[0].show();
  pop();
  
}
