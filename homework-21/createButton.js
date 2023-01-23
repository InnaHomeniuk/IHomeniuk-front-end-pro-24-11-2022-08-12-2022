function callLink() {
  const link = prompt("уведіть посилання");
  function addedUrl() {
    if (link.includes('http') || link.includes('https')) {
      return window.location.href = link;
    } else {
      return window.location.href = `https://${link}`
    }
  }
  document.getElementById('href_button').addEventListener('click', addedUrl);
}
document.getElementById('input_button').addEventListener('click', callLink);
