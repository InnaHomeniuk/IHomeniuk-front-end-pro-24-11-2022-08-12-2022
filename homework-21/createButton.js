function addedUrl() {
  const link = prompt("уведіть посилання")
  //console.log(link);
  linkArr = link.split("");
  let arrText = [];
  const protocolHttp = ['h', 't', 't', 'p'];
  const protocolHttps = ['h', 't', 't', 'p', 's'];
  for (let i = 0; i < 4; i++) {
    arrText.push(linkArr[i]);
  }
  console.log(arrText);
  for (let i = 0; i < arrText.length; i++) {
    if (arrText[i] === protocolHttp[i] || arrText[i] === protocolHttps[i]) {
      continue
    } else {
      linkArr.unshift('h', 't', 't', 'p', 's', ':', '/', '/');
      //console.log(linkArr)
      break
    }
  }
  stringLink = linkArr.join("");
  console.log(stringLink);

  function addedUrl2() {
    window.location.href = stringLink;
  };
  document.getElementById('href_button').addEventListener('click', addedUrl2);
};
document.getElementById('input_button').addEventListener('click', addedUrl);



