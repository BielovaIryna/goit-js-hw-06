const inputEl =document.querySelector("#validation-input");
const value = parseInt(inputEl.dataset.length);

const check =() =>{
	
	inputEl.value.length===value ? inputEl.classList.add('valid') : inputEl.classList.add('invalid'); 
}
inputEl.addEventListener("blur", check);
