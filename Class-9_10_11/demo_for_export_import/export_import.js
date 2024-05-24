const downloadBtn = document.getElementById("download");
const upload = document.getElementById("upload");
let jsonData = {
  name: "neeraj",
  age: 22,
  profession: "Frontend Developer",
};

downloadBtn.addEventListener("click", () => {
  // TODO: downloading the file ie JSON file .json extension
  const stringified = JSON.stringify(jsonData);
  const blob = new Blob([stringified], { type: "plain/text" });
  const downloadableUrl = URL.createObjectURL(blob);
  console.log(downloadableUrl);
  const anchorTag = document.createElement("a");
  anchorTag.download = "sheet.txt";
  anchorTag.href = downloadableUrl;
  anchorTag.innerText = "Download this File";
  //   document.body.appendChild(anchorTag);
  anchorTag.click();
});

upload.addEventListener("change", () => {
  console.log(upload.files[0]);
  let file = upload.files[0];
  if (file.type === "text/plain") {
    // do something
    const fileReader = new FileReader();
    console.log(fileReader);
    fileReader.onload = function (event) {
      console.log(event.target.result);
    };
    fileReader.readAsText(file);
  } else {
    alert("Please upload correct text file");
  }
});
