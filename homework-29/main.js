
const inputValue = document.getElementsByTagName('input')[0]
const createDiv = document.querySelector('div')
function getPost() {
  fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue.value}`)
    .then(async (res) => {
      if (res.status === 200) {
        const post = await res.json();
        //.then(res => res.json())
        createDiv.innerText = post.title;
        //.then(getComments())
      }
      else { alert(`поста за таким ID не знайдено`) }
    })
    .catch(err => {
      console.log(err)
    })
}

function getComments() {
  fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue.value}/comments`)
    .then(res => res.json())
    //.then(res => console.log(res))
    .then(res => createList(res))
    .catch(err => {
      console.log(err)
    })
}

const ulElement = document.querySelector('ul')
const createList = arr => {
  arr.forEach(el => {
    const element = document.createElement('li');
    element.innerText = el.name;
    ulElement.append(element)
  })
}

const button = document.getElementsByTagName('form')[0]
button.addEventListener('submit', function (event) {
  event.preventDefault();
  getPost()
})

const button1 = document.getElementById('buttom')
button1.addEventListener('click', function (event) {
  event.preventDefault();
  getComments()
})