const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");

const resultado = document.getElementById("resultado");

const imgComputador = document.getElementById("imgComputador");

const userPoints = document.getElementById("placarUser");
const compPoints = document.getElementById("placarComputador");

pedra.addEventListener("click", (e) => {
  computerPick();
  check("pedra");
});

papel.addEventListener("click", (e) => {
  computerPick();
  check("papel");
});

tesoura.addEventListener("click", (e) => {
  computerPick();
  check("tesoura");
});

let escolhaComputador = "";
let placarUser = 0;
let placarComputador = 0;

function computerPick() {
  let escolhas = ["pedra", "papel", "tesoura"];

  let randomIndex = Math.floor(Math.random() * escolhas.length);

  escolhaComputador = escolhas[randomIndex];

  imgComputador.setAttribute("src", `./images/${escolhaComputador}.jpg`);
}

function check(escolha) {
  if (escolha === escolhaComputador) {
    resultado.innerText = "Empate!";
  }

  if (escolha === "tesoura") {
    if (escolhaComputador === "papel") {
      resultado.innerText = "Você ganhou";
      placarUser++;
    }
    if (escolhaComputador === "pedra") {
      resultado.innerText = "Você ganhou";
      placarUser++;
    }
  }

  if (escolha === "pedra") {
    if (escolhaComputador === "papel") {
      resultado.innerText = "Você perdeu";
      placarComputador++;
    }
    if (escolhaComputador === "tesoura") {
      resultado.innerText = "Você ganhou";
      placarUser++;
    }
  }

  if (escolha === "papel") {
    if (escolhaComputador === "pedra") {
      resultado.innerText = "Você ganhou";
      placarUser++;
    }
    if (escolhaComputador === "tesoura") {
      resultado.innerText = "Você perdeu";
      placarComputador++;
    }
  }

  compPoints.innerText = placarComputador;
  userPoints.innerText = placarUser;
}
