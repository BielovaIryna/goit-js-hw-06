const inputEl =document.querySelector("#validation-input");
const value = parseInt(inputEl.dataset.length);

const check =() =>{
	if(inputEl.value.length===value){
		inputEl.classList.remove('invalid')
		inputEl.classList.add('valid');
	} else{
	inputEl.classList.remove('valid'); 
	 inputEl.classList.add('invalid');}
}
inputEl.addEventListener("blur", check);
