const colorPicker = document.querySelector('#colorPicker');
const canvasWidth = document.querySelector('#inputWidth');
const canvasHeight = document.querySelector('#inputHeight');

const form = document.querySelector('#sizePicker');
const table = document.querySelector('#pixelCanvas');

let colorSelected = colorPicker.value;

form.addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});

colorPicker.addEventListener('change', function(event){
  console.log("Color changed");
  colorSelected = colorPicker.value;
});

function makeGrid() {

// Your code goes here!

}
