const div1 = document.querySelector(".div-1");
const div2 = document.querySelector(".div-2");
const div3 = document.querySelector(".div-3");
const div4 = document.querySelector(".div-4");

div1.innerText = "Hello, World!";
div2.textContent = "Goodbye, World!";
div3.innerHTML = "<h2>Viva la vida!</h2>";

div4.textContent = "<p>textContent</p>";
div4.innerText += "<p>innerText</p>";
