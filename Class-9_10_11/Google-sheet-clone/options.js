// focus event - don't bubbled up

// body.addEventListener("focus", (event) => {
//   console.log(event.target);
// });

// click event

let selectedCell = "";
const activeCellElement = document.querySelector(".selected-cell");
const form = document.querySelector("#options-form");
const expressionInput = document.getElementById("expression");

const state = {};
const defaultState = {
  innerText: "",
  isBold: false,
  isItalic: false,
  isUnderlined: false,
  align: "left",
  fontSize: "16",
  fontFamily: "default",
  textColor: "#000000",
  backgroundColor: "#ffffff",
};
/*
state = {
  c4: {
    innerText: "neeraj",
    isBold: true,
    isItalic: false,
    isUnderlined: false,
    align: "center",
    fontSize: 16px,
    fontFamily: "normal",
    color:
    backgroundColor: 
  },
  B2: {
    innerText: "rohan",
    isBold: true,
    isItalic: true,
    isUnderlined: false,
    align: "center",
    fontSize: 16px,
    fontFamily: "normal",
    color:
    backgroundColor: 
  }
}
*/
function applyCellInfoToForm() {
  if (!state[selectedCell.id]) {
    // focused for the first time
    console.log("defaultState--", defaultState);
    form.reset();
    return;
  }
  // already edited cell;
  console.log(state[selectedCell.id]);
  syncFormOptions(state[selectedCell.id]);
}

function syncFormOptions(selectedCellState) {
  // form["fontFamily"].value = selectedCellState.fontFamily;
  // form["fontSize"].value = selectedCellState["fontSize"];
  // form["isBold"].checked = selectedCellState.isBold;
  // form["isItalic"].checked = selectedCellState.isItalic;
  // form["isUnderlined"].checked = selectedCellState.isUnderlined;
  // form["align"].value = selectedCellState.align;
  // form["textColor"].value = selectedCellState.textColor;
  // form["backgroundColor"].value = selectedCellState.backgroundColor;
  for (let key in selectedCellState) {
    console.log({ key });
    if (key === "isBold" || key === "isItalic" || key === "isUnderlined") {
      form[key].checked = selectedCellState[key];
    } else if (key === "innerText") {
      continue;
    } else form[key].value = selectedCellState[key];
  }
}

body.addEventListener("click", (event) => {
  // reset the form on the click of cell
  form.reset();
  //   console.log({ target: event.target });
  if (selectedCell) {
    selectedCell.classList.remove("active-cell");
  }
  selectedCell = event.target;
  selectedCell.classList.add("active-cell");
  activeCellElement.innerText = selectedCell.id;
  if (!state[selectedCell.id]) {
    state[selectedCell.id] = {
      ...defaultState,
      innerText: selectedCell.innerText,
    };
    return;
  }
});

body.addEventListener("input", (event) => {
  selectedCell = event.target;
  if (!state[selectedCell.id]) {
    state[selectedCell.id] = {
      ...defaultState,
      innerText: selectedCell.innerText,
    };
    return;
  }
  state[selectedCell.id].innerText = selectedCell.innerText;
});

form.addEventListener("change", () => {
  console.log("change event triggered");
  // extract form data
  if (!selectedCell) {
    alert("Please select a cell before making any changes on the options");
    form.reset();
    return;
  }

  const formData = {
    fontFamily: form["fontFamily"].value,
    fontSize: form["fontSize"].value,
    isBold: form["isBold"].checked,
    isItalic: form["isItalic"].checked,
    isUnderlined: form["isUnderlined"].checked,
    align: form["align"].value,
    textColor: form["textColor"].value,
    backgroundColor: form["backgroundColor"].value,
  };
  console.log(formData);
  state[selectedCell.id] = { ...formData, innerText: selectedCell.innerText };
  applyStylesToSelectedCell(formData);
});

function applyStylesToSelectedCell(styles) {
  selectedCell.style.fontSize = styles.fontSize + "px";
  selectedCell.style.fontFamily = styles.fontFamily;
  selectedCell.style.fontWeight = styles.isBold ? "bold" : "normal";
  selectedCell.style.fontStyle = styles.isItalic ? "italic" : "normal";
  selectedCell.style.textDecoration = styles.isUnderlined
    ? "underline"
    : "none";
  selectedCell.style.textAlign = styles.align;
  selectedCell.style.color = styles.textColor;
  selectedCell.style.backgroundColor = styles.backgroundColor;
}

expressionInput.addEventListener("keyup", (event) => {
  // console.log(event);
  if (event.key === "Enter") {
    const expressionResult = eval(event.target.value);
    selectedCell.innerText = expressionResult;
  }
});
