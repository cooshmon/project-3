var slider;
var distance;
var sliderTwo;
var petalOne = [];

function setup() {
  var myCanvas = createCanvas(1244, 850, WEBGL);
  myCanvas.parent("petalCanvas");
  slider = createSlider(-280, 10, 0);
  slider.position(10, 500);
  slider.style("x", "y");
  // slider.input(updateX());
  sliderTwo = createSlider(-250, 10, 0);
  sliderTwo.position(10, 600);
  sliderTwo.style("x", "y");
}
// for (let i = 0; i < 10; i++) {
//   let x = 30 + 30 * i;
//   petalOne[i] = new square(x, y, 20);
// }

// function slide() {
//   slider = createSlider(-280, -160, 0);
//   slider.position(10, 500);
//   slider.style("x", "y");
//   sliderTwo = createSlider(-250, 10, 0);
//   sliderTwo.position(10, 600);
//   sliderTwo.style("x", "y");
// }
// function updateX() {
//   push();
//   valOne = slider.value();
//   valTwo = sliderTwo.value();
// }

function draw() {
  background(255);
  var x = screenX;
  var y = screenY;
  var distance = (x, y);
  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  valOne = slider.value();
  valTwo = sliderTwo.value();

  square(-250 + valOne, -120 + valTwo, 20);

  square(-280 + valOne, -160 + valTwo, 20);

  square(-300 + valOne, -200 + valTwo, 20);

  square(-280 + valOne, -250 + valTwo, 20);

  square(-220 + valOne, -280 + valTwo, 20);

  square(-170 + valOne, -250 + valTwo, 20);

  square(-140 + valOne, -200 + valTwo, 20);

  square(-120 + valOne, -160 + valTwo, 20);
  square(-125 + valOne, -120 + valTwo, 20);
  square(-180 + valOne, -100 + valTwo, 20);

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  box(10, 10, 10);

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
