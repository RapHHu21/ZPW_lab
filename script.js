
const plansza = document.querySelector("#plansza");
const wynik = document.querySelector("#wynik");

let miny = [];
let odkryte = 0;
let koniec = false;

function start() {
  plansza.innerHTML = "";
  wynik.textContent = "Znajdź wszystkie bezpieczne pola!";
  miny = [];
  odkryte = 0;
  koniec = false;

  while (miny.length < 6) {
    let los = Math.floor(Math.random() * 36);
    if (!miny.includes(los)) miny.push(los);
  }

  for (let i = 0; i < 36; i++) {
    let pole = document.createElement("button");
    pole.className = "pole";
    pole.onclick = () => klik(i, pole);
    plansza.appendChild(pole);
  }
}

start();