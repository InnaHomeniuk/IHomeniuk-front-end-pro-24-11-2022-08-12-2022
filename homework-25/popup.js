const myText = document.getElementById("my-text");
const mypopup = document.getElementById("my-popup");

myText.addEventListener("mouseover", showPopup);
myText.addEventListener("mouseout", hidePopup);

function showPopup() {
  mypopup.style.display = "block";
}

function hidePopup() {
  mypopup.style.display = "none";
}