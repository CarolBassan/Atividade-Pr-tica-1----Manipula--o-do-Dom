const paragrafo = document.querySelector("p");

let contador = 0;

function zerar() {
  contador = 0;

  paragrafo.textContent = ``;
}

function incrementar() {
  contador++;

  paragrafo.textContent = `O contador está com ${contador} cliques`;
}

