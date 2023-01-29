const myForm = document.getElementsByTagName('form')[0]
myForm.addEventListener("submit", func)
function func(event) {
  event.preventDefault();
  const arr = [];
  firstname = myForm.firstname.value;
  surname = myForm.surname.value;
  datebirth = myForm.datebirth.value;
  sex = myForm.sex.value;
  city = myForm.city.value;
  //витягти з чекбоксу дані
  function getCheckedCheckBoxes() {
    const selectedCheckBoxes = document.querySelectorAll('input.checkbox:checked');
    function isChecked(el) {
      return el.value
    }
    const checkedValues = Array.from(selectedCheckBoxes).map(isChecked);
    console.log(checkedValues);
    return checkedValues;
  }
  language = getCheckedCheckBoxes();
  arr.push(firstname, surname, datebirth, sex, city, language);
  console.log(arr);//масив даних з форми
  let fill = document.querySelectorAll('p');
  let source = Array.from(fill)
  console.log(source)//найменування опцій форми
//створення таблиці
  let table = document.createElement('table');
  document.body.appendChild(table);
  for (let i = 0; i < source.length; i++) {
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('td');
    let heading_2 = document.createElement('td');
    heading_1.innerHTML = `${source[i].innerText}`;
    heading_2.innerHTML = `${arr[i]}`;
    heading_1.style.color = 'red'
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    table.appendChild(row_1)
  }
}
//ховати форму
myForm.addEventListener("submit", removeForm);
function removeForm() {
  document.getElementsByTagName('form')[0].style.display = "none"
}