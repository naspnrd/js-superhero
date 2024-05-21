document.getElementById("category").addEventListener("click", (e) => {
  // e - event object
  // e.target - refers to element where event occurs
  // e.target.id -> id for li where i'll click
  console.log(e);
  if (e.target.tagName === "LI") {
    window.location.href = "/" + e.target.id;
  }
});
