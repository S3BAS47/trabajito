var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7fa9ff41-5706-4dd5-8844-8e79477c636a"],"propsByKey":{"7fa9ff41-5706-4dd5-8844-8e79477c636a":{"name":"soccer_bw_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score =0
//crear paddle - paleta, y ball - pelota
var paddle = createSprite(200, 375, 50, 15);
var ball = createSprite(150, 250, 20, 20);

//primer fila de cajas
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

//segunda fila de cajas
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
//animacion :D
ball.setAnimation("soccer_bw_1")
ball.scale=0.1

//Función que dibuja en el área de juegos.
function draw() {
  
  //Función que limpia la pantalla y le coloca un color de fondo
  background("white");
  
  fill("brown");
  textSize(20);
  stroke("black")
  
  text("puntuacion:" + score,270,20)
  //Mover la pelota al presionar la tecla enter
  if(keyDown("enter")){
    ball.velocityX = 3;
    ball.velocityY = 4;
  }
  
  //Hacer que la pelota rebote en la paleta y en tres lados del lienzo
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);

  //
  paddle.x=World.mouseX;

  if(ball.bounceOff(box16)){
    box16.destroy();
    score +=5
  }
  
  if(ball.bounceOff(box15)){
    box15.destroy();
    score +=5
  }
  
  if(ball.bounceOff(box14)){
  box14.destroy();
  score +=5
  }
  
  if(ball.bounceOff(box13)){
  box13.destroy();
  score +=5
  }
  
  if(ball.bounceOff(box12)){
  box12.destroy();
  score +=5
  }
  
  if(ball.bounceOff(box11)){
  box11.destroy();
  score +=5
  }
  
  if(ball.bounceOff(box9)){
  box9.destroy();
  score +=5
  }
  
  if(ball.bounceOff(box8)){
  box8.destroy();
  score +=5
  }
  
  if(ball.bounceOff(box7)){
  box7.destroy();
  score +=5
  }
  
  if(ball.bounceOff(box6)){
  box6.destroy();
  score +=5
  }
  
  if(ball.bounceOff(box5)){
    box5.destroy();
    score +=5
  }
  
  if(ball.bounceOff(box4)){
  box4.destroy();
  score +=5
  }
  
  if(ball.bounceOff(box3)){
    box3.destroy();
    score +=5
  }
  
  if(ball.bounceOff(box2)){
    box2.destroy();
    score +=5
  }
  
  if(ball.bounceOff(box1)){
    box1.destroy();
    score +=5
  }
    
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
