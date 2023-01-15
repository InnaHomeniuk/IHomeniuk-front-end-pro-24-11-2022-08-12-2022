function getImage() {
  const random = Math.floor(Math.random() * 9);
  return '<img src="images/' + random + '.png"/>';
}

document.getElementById("img1").innerHTML = getImage();

