// focus event - don't bubbled up

// body.addEventListener("focus", (event) => {
//   console.log(event.target);
// });

// click event

let selectedCell = "";
const activeCellElement = document.querySelector(".selected-cell");
body.addEventListener("click", (event) => {
  //   console.log({ target: event.target });
  if (selectedCell) {
    selectedCell.classList.remove("active-cell");
  }

  selectedCell = event.target;
  selectedCell.classList.add("active-cell");
  activeCellElement.innerText = selectedCell.id;
  console.log("selectedCellId---", selectedCell);
});
