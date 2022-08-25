// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!


const colors = document.querySelectorAll("div.color");
for(let color of colors){
  color.addEventListener("click", (event) => {
    let background = event.target.style.background;
    const currentColor = document.querySelector("#current-color");
    currentColor.style.background = background;
  }) 
} 

const cellBoxes = document.querySelectorAll("div.cell")
  for(let cellBox of cellBoxes){  
  cellBox.addEventListener("click", () => {
    const currentColor = document.querySelector("#current-color").style.background;
    cellBox.style.background = currentColor;
})
}

const div = document.createElement("div");
div.classList.add("reset");
const button = document.createElement("button");
button.innerText = "Reset";
button.classList.add("reset");
const section = document.querySelector("#palette");
section.after(div);
div.append(button);

button.addEventListener("click", () => {
  for(let cellBox of cellBoxes){
    cellBox.style.background = "white"
  }
})

