var slider;
var distance;

var petalOne = [];
let angle = 0;
var sliderThree;
var sliderFour;
var sliderFive;
var colorOne;

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.parent("petalCanvas");
  slider = createSlider(-500, 200, -20);
  slider.position(10, 500);
  slider.style("x", "y");
  sliderThree = createSlider(1, 200, 60);
  sliderThree.position(10, 700);
  sliderThree.style("radians");
  sliderFour = createSlider(1, 250, 20);
  sliderFour.position(10, 800);
  sliderFour.style("s");
  sliderFive = createSlider(-10, 200, 0);
  sliderFive.position(10, 400);
  sliderFive.style("x");
  colorOne = createColorPicker("#ed225");
  colorOne.position(10, 600);
  colorOne.style("r,g,b");
}

function draw() {
  background(251, 255, 7);
  valOne = slider.value();
  valThree = sliderThree.value();
  valFour = sliderFour.value();
  valFive = sliderFive.value();
  varSix = colorOne.value();

  for (let i = 0; i < radians(360); i += radians(valThree)) {
    push();
    translate(0 + valOne, -200 + valOne);
    rotate(i);
    translate(0, 100);
    rectMode(CENTER);
    square(valFive, valFive, valFour);
    pop();
    fill(varSix);
  }

  for (let i = 0; i < radians(360); i += radians(valThree)) {
    push();
    translate(450 + valOne, 0 + valOne);
    rotate(i);
    translate(0, 100);
    rectMode(CENTER);
    square(valFive, valFive, valFour);
    pop();
    fill(varSix);
  }
  for (let i = 0; i < radians(360); i += radians(valThree)) {
    push();
    translate(250 + valOne, -200 + valOne);
    rotate(i);
    translate(0, 100);
    rectMode(CENTER);
    square(valFive, valFive, valFour);
    pop();
    fill(varSix);
  }
  for (let i = 0; i < radians(360); i += radians(valThree)) {
    push();
    translate(250 + valOne, 250 + valOne);
    rotate(i);
    translate(0, 100);
    rectMode(CENTER);
    square(valFive, valFive, valFour);
    pop();
    fill(varSix);
  }
  for (let i = 0; i < radians(360); i += radians(valThree)) {
    push();
    translate(0 + valOne, 250 + valOne);
    rotate(i);
    translate(0, 100);
    rectMode(CENTER);
    square(valFive, valFive, valFour);
    pop();
    fill(varSix);
  }
  for (let i = 0; i < radians(360); i += radians(valThree)) {
    push();
    translate(-230 + valOne, 0 + valOne);
    rotate(i);
    translate(0, 100);
    rectMode(CENTER);
    square(valFive, valFive, valFour);
    pop();
    fill(varSix);
  }

  angle += radians(1 + valThree);

  var x = screenX;
  var y = screenY;

  var distance = (x, y);

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  box(10, 0, 10);

  //   for (let i = 0; i < 10; i++) {
  //     let x = 30 + 30 * i;
  //     petalOne[i] = new square(x, y, sliderTwo.value);
  //   }
  //   petalOne.position(-250 - 120);
  //   for (let i = 0; i < petalOne.length; i++) {
  //     square(-185, -100, 20);
  //     print(i);
  //     bubbles[i].display();
  //   }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
