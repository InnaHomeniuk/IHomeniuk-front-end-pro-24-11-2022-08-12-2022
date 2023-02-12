function Func(event) {
  if (event.target.nodeName !== 'SPAN') return;
  closeAllSubMenu(event.target.nextElementSibling);
  event.target.classList.add('sub-menu-activ-span');
  event.target.nextElementSibling.classList.toggle('sub-menu-activ');
}
document.querySelector('.root-nav').addEventListener('click', Func);

function closeAllSubMenu(current = null) {
  let parents = [];
  if (current) {
    let currentParent = current.parentNode;
    while (currentParent) {
      if (currentParent.classList.contains('root-nav')) break;
      if (currentParent.nodeName === 'UL') parents.push(currentParent);
      currentParent = currentParent.parentNode;
    }
  }
  const subMenu = document.querySelectorAll('.root-nav ul');
  Array.from(subMenu).forEach(item => {
    if (item != current && !parents.includes(item))
      item.classList.remove('sub-menu-activ');
    if (item.previousElementSibling.nodeName === 'SPAN') {
      item.previousElementSibling.classList.remove('sub-menu-activ-span');
    }
  });
}

let elements = document.querySelectorAll(".btn");
for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    alert("товар куплено");
    closeAllSubMenu(elements);
  };
}

document.querySelector('.root-nav').onmouseleave = closeAllSubMenu;