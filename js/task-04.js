const minusEl = document.querySelector("#counter").firstElementChild;

const plusEl = document.querySelector("button[data-action='increment']");


let counterValue = document.querySelector("#value");

counterValue.textContent=0; 


const handleClickPlus = () =>{
	counterValue.textContent=parseInt(counterValue.textContent)+1;
	
}
const handleClickMinus= () =>{
	counterValue.textContent-=1;
	
}
plusEl.addEventListener("click", handleClickPlus);
minusEl.addEventListener("click", handleClickMinus);
