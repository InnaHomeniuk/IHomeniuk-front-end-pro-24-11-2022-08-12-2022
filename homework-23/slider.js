
let btnRight = document.querySelector(".btnRight");
let btnLeft= document.querySelector(".btnLeft");
let slides = document.querySelectorAll("img");
let i = 0;
btnRight.addEventListener("click", functionRight) 
function functionRight (){
  if (i === slides.length-2) {
    btnRight.style.display = 'none';
    btnLeft.style.display = 'inline-block'
  }
    ++i
   // console.log('first',i)
    if (i >= slides.length) {
        slides[i-1].classList.remove("block");
        i = 0;
        slides[i].classList.add("block");
        btnLeft.style.display = 'inline-block'
    } else { 
        slides[i-1].classList.remove("block");
        slides[i].classList.add("block");
        btnLeft.style.display = 'inline-block'
    }
}
btnLeft.addEventListener("click", functionLeft)
function functionLeft () 
{
  if (i === 0) { 
    btnLeft.style.display = 'none';
    btnRight.style.display = 'inline-block'}
 else  if (i >0) {
    i--;
    slides[i].classList.add("block");
   // console.log(i)
   btnRight.style.display = 'inline-block'
} else { 
    slides[i].classList.add("block");
    slides[i-1].classList.remove("block");
   btnRight.style.display = 'inline-block'
  }
}

