const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector('#name-output');
const handleInput =(event)=>{
	if(inputEl.value===""){
		return outputEl.textContent="Anonymous";
	}
	outputEl.textContent=event.currentTarget.value;
}
inputEl.addEventListener("input", handleInput)