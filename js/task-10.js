function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const number = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const create = document.querySelector("button[data-create]");
const destroy=document.querySelector("button[data-destroy]");
let amm;
const createBoxes =(amount)=>{
  for (let index = 0; index <= amount; index+=1) {
    boxes.insertAdjacentHTML("afterbegin", `<div style="height:20px; width:20px; background-color:red "></div>`)
  }
  
}


const handleInput =(event)=>{
	console.log(amm = event.currentTarget.value)  ;
}

number.addEventListener("input", handleInput);

console.log(amm);


// boxes.insertAdjacentHTML("afterbegin", `<div style="height:20px; width:20px; background-color:red "></div>`)




