const download = document.getElementById("download");
const upload = document.getElementById("upload");

download.addEventListener("click", () => {
  // step : 1 stringified the data
  const stringifiedState = JSON.stringify(state);
  // step : 2 create a blob wiht stringified data
  const blob = new Blob([stringifiedState], { type: "application/json" });
  // step : 3 generate downloadable url
  let downloadableUrl = URL.createObjectURL(blob);
  // step : 4 create the anchor tag

  let link = document.createElement("a");
  link.href = downloadableUrl;
  link.download = "spreadsheet.json";
  link.click();
  //   console.log(form);
  //   form.appendChild(link);
});

upload.addEventListener("change", (event) => {
  let file = event.target.files[0];
  console.log(file);
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const fileData = JSON.parse(event.target.result);
    console.log(fileData);
    // TODO: fill all the cells of the sheet with the fileData -> HW
  };

  fileReader.readAsText(file);
});

// HW: Implement multisheet functionality
