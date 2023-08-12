const formEl = document.querySelector(".login-form");


const sendForm =(event)=>{
event.preventDefault();
const {
    elements: { email:{value:emailValue}, password:{value:passwordValue} }
  } = event.currentTarget;
  if(emailValue===""||passwordValue===""){
	return alert ("All fields must be fill")
  }
let card={
	login:emailValue,
	password:passwordValue
};
console.log(card);
event.currentTarget.reset();
}
formEl.addEventListener("submit", sendForm);

