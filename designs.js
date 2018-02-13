const colorPicker = document.querySelector('#colorPicker');
const canvasWidth = document.querySelector('#inputWidth');
const canvasHeight = document.querySelector('#inputHeight');

const form = document.querySelector('#sizePicker');
const table = document.querySelector('#pixelCanvas');
const swatch = document.querySelector('#colorSwatch');

const MAX_RECENT_COLORS = 10;

let recentColors = [];
let colorSelected = colorPicker.value;

form.addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});

colorPicker.addEventListener('change', function(event){
  colorSelected = colorPicker.value;
  addRecentColor(colorSelected);
});

table.addEventListener('click', function(event){
  if(event.target.nodeName === "TD"){
    event.target.style.backgroundColor = colorSelected;
  }
});

function makeSwatch() {
  let swatchHtml = `<tr>
  `;
  for(let i = 0; i < MAX_RECENT_COLORS; i++){
    swatchHtml += `<td></td>
    `
  }
  swatchHtml += `</tr>`

  swatch.innerHTML = swatchHtml;
}

function makeGrid() {
  let tableRows = canvasHeight.value;
  let tableColumns = canvasWidth.value;

  let tableHtml = "";
  // Build table with a string of HTML table elements
  for(let y = 0; y < tableRows; y++){
    tableHtml +=
    `<tr>
    `;
    for(let x = 0; x < tableColumns; x++){
      tableHtml += `<td></td>
      `;
    }
    tableHtml += `</tr>
    `;
  }

  table.innerHTML = tableHtml;
}

function addRecentColor(color){
  // Is the color already in the swatch?
  if (recentColors.includes(color)){
    // Remove it from inside and push to the end of the array
    let index = recentColors.indexOf(color);
    recentColors.splice(index, 1);
  } else {
    if(recentColors.length >= MAX_RECENT_COLORS) recentColors.shift();
  }
  recentColors.push(color);

  let swatchTiles = swatch.querySelectorAll('td');
  for(let i = 0; i < recentColors.length; i++){
    swatchTiles[i].style.backgroundColor = recentColors[i];
  }
}

makeSwatch();
// Once swatch is created, add the initial color to it
addRecentColor(colorSelected);

makeGrid();
