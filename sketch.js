let fail;
let jump;
let snd;
let unicorn;
let train;
let uImg;
let bImg;
let tImg;
let trains = [];

function preload() {
    soundFormats('mp3');
  snd = loadSound('jazzyfrenchy.mp3')
  fail = loadSound("computador_erro.mp3");
  jump = loadSound("computador_salto.mp3");
  uImg = loadImage ('Pc_Jogo.png')
  bImg = loadImage ('fundo_final.png')
  tImg = loadImage ('objeto1.png')
}

function setup() {
  createCanvas(1000, 600);
  unicorn = new Unicorn(); 
}

function keyPressed() {
  if (key == ' ') {
    unicorn.jump();
       jump.play();
   
 }
}  

function draw() {
  
   if (random(1) < 0.005) {
  trains.push(new Train()); //aparecem novos obstáculos
  }
  
  background(bImg);
  for (let t of trains) {
    t.move();
    t.show();
      if (unicorn.hits(t)) {
      console.log('game over');
      fail.play();
      noLoop();

}    
    unicorn.show();
    unicorn.move();
 
}

 function mouseClicked() {
  snd.play();
}
}
