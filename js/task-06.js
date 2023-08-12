const inputEl =document.querySelector("#validation-input");
const check =() =>{
	if(inputEl.value.length === parseInt(input.dataset.length)){
		return inputEl.classList.add("valid");
	}
	inputEl.classList.add("invalid")
}
input.addEventListener("blur", check);
