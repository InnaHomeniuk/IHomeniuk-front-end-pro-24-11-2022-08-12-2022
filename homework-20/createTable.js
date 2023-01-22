const elem = document.querySelector('#elem');
createTable(10, 10);
function createTable(cols, rows) {
  const table = document.createElement('table');
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  elem.appendChild(table);
}
tableFill();
function tableFill() {
  let fill = 1;
  let td = document.querySelectorAll('#elem td');
  for (let i = 0; i < td.length; i++) {
    td[i].textContent = fill++;
  }
}

