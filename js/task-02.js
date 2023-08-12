const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function recol(arr){
  
  const ingr = arr.map(el=>{
    const liEl = document.createElement("li");
    liEl.textContent=el;
    return liEl;
  })
document.querySelector("#ingredients").append(...ingr);
}
recol(ingredients);
