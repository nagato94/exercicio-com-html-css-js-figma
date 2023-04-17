
const imagens = document.querySelectorAll('.slide');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');

let imagemAtual = 0;

mostrarImagem(imagemAtual);

setaAvancar.addEventListener('click', function() {
  imagemAtual++;
  if (imagemAtual > imagens.length - 1) {
    imagemAtual = 0;
  }
  mostrarImagem(imagemAtual);
});

setaVoltar.addEventListener('click', function() {
  imagemAtual--;
  if (imagemAtual < 0) {
    imagemAtual = imagens.length - 1;
  }
  mostrarImagem(imagemAtual);
});

function mostrarImagem(indice) {
  for (let i = 0; i < imagens.length; i++) {
    imagens[i].classList.remove('mostrar');
  }
  imagens[indice].classList.add('mostrar');
}
