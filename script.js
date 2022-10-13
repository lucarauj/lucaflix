function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmes(filmeFavorito);
  } else {
    console.error("Insira um endereço de imagem JPG");
  }
  document.getElementById("filme").value = "";
}

function listarFilmes(filme) {
  var elementoFilme = "<img src=" + filme + ">";
  var elementoLista = document.getElementById("listaFilmes");
  elementoLista.innerHTML = elementoLista.innerHTML + elementoFilme;
}