const rows = 500,
  columns = 27;

const headRow = document.querySelector(".head-row");
const headCol = document.querySelector(".serialNo");
const body = document.querySelector(".body");
// i run can for loop 27 times
// create dynamic cells

for (let i = 0; i < columns; i++) {
  // create a cell
  const headCell = document.createElement("div");
  if (i === 0) {
    // headRow.appendChild(headCell);
    continue;
  }
  headCell.innerText = String.fromCharCode(i + 64);
  headCell.classList.add("col-head");
  headRow.appendChild(headCell);
}

for (let i = 0; i < rows; i++) {
  // create a cell
  const headColCell = document.createElement("div");

  headColCell.innerText = i + 1;
  headColCell.classList.add("sno-cell");
  headCol.appendChild(headColCell);
}

for (let row = 1; row <= rows; row++) {
  let rowCells = document.createElement("div");
  rowCells.classList.add("row");
  for (let col = 1; col < columns; col++) {
    const colCell = document.createElement("div");
    colCell.classList.add("cell");
    colCell.contentEditable = true;
    colCell.id = `${String.fromCharCode(col + 64)}${row}`;
    rowCells.appendChild(colCell);
  }
  body.appendChild(rowCells);
}
