function click() {
  alert("Clicked!");
}
const input = document.querySelector("input");
const button = document.querySelector("button");
const select = document.querySelector("select");

input.addEventListener("focus", () => console.log("🎯 Focusing..."));
select.addEventListener("change", () => console.log(select.value));
button.addEventListener("click", click);
