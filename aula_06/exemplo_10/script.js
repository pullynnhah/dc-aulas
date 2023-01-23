function converter(value, fromRate, toRate) {
  return (value * fromRate) / toRate;
}

function getInput(value) {
  return Number(value.replaceAll(".", "").replace(",", "."));
}

const currency = {
  real: {
    name: "Real brasileiro",
    symbol: "R$",
    code: "BRL",
    rate: 1,
    img: "brazil",
    alt: "Brazil's flag"
  },
  dollar: {
    name: "Dólar Americano",
    symbol: "U$$",
    code: "USD",
    rate: 5.2078,
    img: "usa",
    alt: "USA's flag"
  },
  euro: {
    name: "Euro",
    symbol: "€",
    code: "EUR",
    rate: 5.6537,
    img: "eu",
    alt: "EU's flag"
  },
  bitcoin: {
    name: "Bitcoin",
    symbol: "",
    code: "BTC",
    rate: 118953.44,
    img: "bitcoin",
    alt: "Bitcoin's symbol"
  }
};

const from = document.querySelector("#from");
const to = document.querySelector("#to");
const sign = document.querySelector(".sign");
const value = document.querySelector("input");
const button = document.querySelector("button");

const fromContainer = document.querySelector(".from-container");
const fromFlag = fromContainer.querySelector(".flag");
const fromName = fromContainer.querySelector("p");
const fromValue = fromContainer.querySelector("strong");

const toContainer = document.querySelector(".to-container");
const toFlag = toContainer.querySelector(".flag");
const toName = toContainer.querySelector("p");
const toValue = toContainer.querySelector("strong");

from.addEventListener("change", () => {
  sign.innerText = currency[from.value].symbol;
});

button.addEventListener("click", () => {
  const fromVal = from.value;
  const toVal = to.value;
  const cashAmount = getInput(value.value);

  fromFlag.src = `./assets/${currency[fromVal].img}.svg`;
  fromFlag.alt = currency[fromVal].alt;
  fromName.innerText = currency[fromVal].name;
  fromValue.innerText = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: currency[fromVal].code
  }).format(cashAmount);

  toFlag.src = `./assets/${currency[toVal].img}.svg`;
  toFlag.alt = currency[toVal].alt;
  toName.innerText = currency[toVal].name;

  toValue.innerText = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: currency[toVal].code
  }).format(converter(cashAmount, currency[fromVal].rate, currency[toVal].rate));

  value.value = "";
});
