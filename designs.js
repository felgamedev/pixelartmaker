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

table.addEventListener('click', function(event){
  if(event.target.nodeName === "TD"){
    event.target.style.backgroundColor = colorSelected;
  }
});

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
