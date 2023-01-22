const inputs = document.querySelectorAll("input");
inputs[0].onkeyup = e => console.log(e);
inputs[1].onkeyup = e => console.log(e.key);
inputs[2].onkeyup = e => console.log(e.target.value);
