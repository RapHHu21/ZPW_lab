
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

function klik(i, pole) {
    if (koniec || pole.disabled) return;

    pole.disabled = true;
    pole.classList.add("odkryte");

    if (miny.includes(i)) {
        pole.textContent = "💣";
        wynik.textContent = "Przegrana!";
        koniec = true;
        return;
    }

    let liczba = 0;
    let x = i % 6;
    let y = Math.floor(i / 6);

    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            let nx = x + dx;
            let ny = y + dy;

            if (nx >= 0 && nx < 6 && ny >= 0 && ny < 6) {
                if (miny.includes(ny * 6 + nx)) {
                    liczba++;
                }
            }
        }
    }

    pole.textContent = liczba || "";
    odkryte++;

    if (odkryte === 30) {
        wynik.textContent = "Wygrałeś! 🎉";
        koniec = true;
    }
}

start();