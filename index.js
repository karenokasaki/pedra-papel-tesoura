const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");

const resultado = document.getElementById("resultado");

const imgComputador = document.getElementById("imgComputador");

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

function computerPick() {
  let escolhas = ["pedra", "papel", "tesoura"];

  let randomIndex = Math.floor(Math.random() * escolhas.length);

  escolhaComputador = escolhas[randomIndex];

  imgComputador.setAttribute("src", `./images/${escolhaComputador}.jpg`);
}

function check(escolha) {
  console.log(escolha);
  console.log(escolhaComputador);

  if (escolha === escolhaComputador) {
    resultado.innerText = "Empate!";
  }

  if (escolha === "tesoura" && escolhaComputador === "papel") {
    resultado.innerText = "Tesoura ganhou";
  }
}
