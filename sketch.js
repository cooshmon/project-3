var slider;
var distance;
let div;
let angle = 0;
var sliderThree;
var sliderFour;
var sliderFive;
var colorOne;
var pOneSlider;
var pOneSliderOne;
var pOneSliderTwo;
var pOneSliderThree;

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.addClass("Canvas");
  myCanvas.parent("petalCanvas");
  //global control
  slider = createSlider(-500, 200, -20);
  slider.position(10, 500);
  slider.style("x", "y");
  slider.addClass("myGlobSliders");
  sliderThree = createSlider(1, 200, 60);
  sliderThree.position(10, 700);
  sliderThree.style("radians");
  sliderThree.addClass("myGlobSliders");
  sliderFour = createSlider(1, 250, 20);
  sliderFour.position(10, 800);
  sliderFour.style("s");
  sliderFour.addClass("myGlobSliders");
  sliderFive = createSlider(-10, 200, 0);
  sliderFive.position(10, 400);
  sliderFive.style("x");
  sliderFive.addClass("myGlobSliders");
  colorOne = createColorPicker("#ed225");
  colorOne.position(10, 600);
  colorOne.style("r,g,b");
  //petal 1
  //scale
  pOneSlider = createSlider(1, 250, 0);
  pOneSlider.position(10, 50);
  pOneSlider.style("s");
  pOneSlider.addClass("mySliders");
  //units between
  pOneSliderOne = createSlider(1, 200, 0);
  pOneSliderOne.position(100, 50);
  pOneSliderOne.style("radians");
  pOneSliderOne.addClass("mySliders");
  //more units
  pOneSliderTwo = createSlider(-10, 200, 0);
  pOneSliderTwo.position(10, 60);
  pOneSliderTwo.style("x");
  pOneSliderTwo.addClass("mySliders");
  //location
  pOneSliderThree = createSlider(-500, 200, 0);
  pOneSliderThree.position(100, 60);
  pOneSliderThree.style("x", "y");
  pOneSliderThree.addClass("mySliders");
  //petal 2
  pTwoSlider = createSlider(1, 250, 0);
  pTwoSlider.position(10, 80);
  pTwoSlider.style("s");
  pTwoSlider.addClass("mySliders");
  pTwoSliderOne = createSlider(1, 200, 0);
  pTwoSliderOne.position(100, 80);
  pTwoSliderOne.style("radians");
  pTwoSliderOne.addClass("mySliders");
  pTwoSliderTwo = createSlider(-10, 200, 0);
  pTwoSliderTwo.position(10, 90);
  pTwoSliderTwo.style("x");
  pTwoSliderTwo.addClass("mySliders");
  pTwoSliderThree = createSlider(-500, 200, 0);
  pTwoSliderThree.position(100, 90);
  pTwoSliderThree.style("x", "y");
  pTwoSliderThree.addClass("mySliders");
  //petal 3
  pThreeSlider = createSlider(1, 250, 0);
  pThreeSlider.position(10, 115);
  pThreeSlider.style("s");
  pThreeSlider.addClass("mySliders");
  pThreeSliderOne = createSlider(1, 200, 0);
  pThreeSliderOne.position(100, 115);
  pThreeSliderOne.style("radians");
  pThreeSliderOne.addClass("mySliders");
  pThreeSliderTwo = createSlider(-10, 200, 0);
  pThreeSliderTwo.position(10, 125);
  pThreeSliderTwo.style("x");
  pThreeSliderTwo.addClass("mySliders");
  pThreeSliderThree = createSlider(-500, 200, 0);
  pThreeSliderThree.position(100, 125);
  pThreeSliderThree.style("x", "y");
  pThreeSliderThree.addClass("mySliders");
  //petal 4
  pFourSlider = createSlider(1, 250, 0);
  pFourSlider.position(10, 150);
  pFourSlider.style("s");
  pFourSlider.addClass("mySliders");
  pFourSliderOne = createSlider(1, 200, 0);
  pFourSliderOne.position(100, 150);
  pFourSliderOne.style("radians");
  pFourSliderOne.addClass("mySliders");
  pFourSliderTwo = createSlider(-10, 200, 0);
  pFourSliderTwo.position(10, 160);
  pFourSliderTwo.style("x");
  pFourSliderTwo.addClass("mySliders");
  pFourSliderThree = createSlider(-500, 200, 0);
  pFourSliderThree.position(100, 160);
  pFourSliderThree.style("x", "y");
  pFourSliderThree.addClass("mySliders");
  //petal 5
  pFiveSlider = createSlider(1, 250, 0);
  pFiveSlider.position(10, 180);
  pFiveSlider.style("s");
  pFiveSlider.addClass("mySliders");
  pFiveSliderOne = createSlider(1, 200, 0);
  pFiveSliderOne.position(100, 180);
  pFiveSliderOne.style("radians");
  pFiveSliderOne.addClass("mySliders");
  pFiveSliderTwo = createSlider(-10, 200, 0);
  pFiveSliderTwo.position(10, 190);
  pFiveSliderTwo.style("x");
  pFiveSliderTwo.addClass("mySliders");
  pFiveSliderThree = createSlider(-500, 200, 0);
  pFiveSliderThree.position(100, 190);
  pFiveSliderThree.style("x", "y");
  pFiveSliderThree.addClass("mySliders");
  //petal 6
  pSixSlider = createSlider(1, 250, 0);
  pSixSlider.position(10, 215);
  pSixSlider.style("s");
  pSixSlider.addClass("mySliders");
  pSixSliderOne = createSlider(1, 200, 0);
  pSixSliderOne.position(100, 215);
  pSixSliderOne.style("radians");
  pSixSliderOne.addClass("mySliders");
  pSixSliderTwo = createSlider(-10, 200, 0);
  pSixSliderTwo.position(10, 225);
  pSixSliderTwo.style("x");
  pSixSliderTwo.addClass("mySliders");
  pSixSliderThree = createSlider(-500, 200, 0);
  pSixSliderThree.position(100, 225);
  pSixSliderThree.style("x", "y");
  pSixSliderThree.addClass("mySliders");
}

function draw() {
  background(251, 255, 7);
  valOne = slider.value();
  valThree = sliderThree.value();
  valFour = sliderFour.value();
  valFive = sliderFive.value();
  varSix = colorOne.value();
  //petal one
  pValZero = pOneSlider.value();
  pValOne = pOneSliderOne.value();
  pValTwo = pOneSliderTwo.value();
  pValThree = pOneSliderThree.value();
  //petal 2
  pTwoValZero = pTwoSlider.value();
  pTwoValOne = pTwoSliderOne.value();
  pTwoValTwo = pTwoSliderTwo.value();
  pTwoValThree = pTwoSliderThree.value();
  //petal 3
  pThreeValZero = pThreeSlider.value();
  pThreeValOne = pThreeSliderOne.value();
  pThreeValTwo = pThreeSliderTwo.value();
  pThreeValThree = pThreeSliderThree.value();
  //petal 4
  pFourValZero = pFourSlider.value();
  pFourValOne = pFourSliderOne.value();
  pFourValTwo = pFourSliderTwo.value();
  pFourValThree = pFourSliderThree.value();
  //petal 5
  pFiveValZero = pFiveSlider.value();
  pFiveValOne = pFiveSliderOne.value();
  pFiveValTwo = pFiveSliderTwo.value();
  pFiveValThree = pFiveSliderThree.value();
  //petal 6
  pSixValZero = pSixSlider.value();
  pSixValOne = pSixSliderOne.value();
  pSixValTwo = pSixSliderTwo.value();
  pSixValThree = pSixSliderThree.value();

  for (let i = 0; i < radians(360); i += radians(valThree + pValOne)) {
    push();
    translate(0 + valOne + pValThree, -240 + valOne + pValThree);
    rotate(i);
    translate(0, 100);
    rectMode(CENTER);
    square(valFive + pValTwo, valFive + pValTwo, valFour + pValZero);
    fill(varSix);
    pop();
  }

  for (let i = 0; i < radians(360); i += radians(valThree + pTwoValOne)) {
    push();
    translate(500 + valOne + pTwoValThree, 1 + valOne + pTwoValThree);
    rotate(i);
    translate(0, 100);
    rectMode(CENTER);
    square(valFive + pTwoValTwo, valFive + pTwoValTwo, valFour + pTwoValZero);
    pop();
    fill(varSix);
  }
  for (let i = 0; i < radians(360); i += radians(valThree + pThreeValOne)) {
    push();
    translate(300 + valOne + pThreeValThree, -240 + valOne + pThreeValThree);
    rotate(i);
    translate(0, 100);
    rectMode(CENTER);
    square(
      valFive + pThreeValTwo,
      valFive + pThreeValTwo,
      valFour + pThreeValZero
    );
    pop();
    fill(varSix);
  }
  for (let i = 0; i < radians(360); i += radians(valThree + pFourValOne)) {
    push();
    translate(300 + valOne + pFourValThree, 300 + valOne + pFourValThree);
    rotate(i);
    translate(0, 100);
    rectMode(CENTER);
    square(
      valFive + pFourValTwo,
      valFive + pFourValTwo,
      valFour + pFourValZero
    );
    pop();
    fill(varSix);
  }
  for (let i = 0; i < radians(360); i += radians(valThree + pFiveValOne)) {
    push();
    translate(0 + valOne + pFiveValThree, 300 + valOne + pFiveValThree);
    rotate(i);
    translate(0, 100);
    rectMode(CENTER);
    square(
      valFive + pFiveValTwo,
      valFive + pFiveValTwo,
      valFour + pFiveValZero
    );
    pop();
    fill(varSix);
  }
  for (let i = 0; i < radians(360); i += radians(valThree + pSixValOne)) {
    push();
    translate(-230 + valOne + pSixValThree, 0 + valOne + pSixValThree);
    rotate(i);
    translate(0, 100);
    rectMode(CENTER);
    square(valFive + pSixValTwo, valFive + pSixValTwo, valFour + pSixValZero);
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
