function click() {
  alert("Clicked 2!");
}

const btn = document.querySelector(".btn");
const input = document.querySelector("input");

btn.onclick = click;
input.onkeyup = () => console.log("UP!!!");
