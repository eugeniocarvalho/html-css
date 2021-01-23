const contents = [{
    name: 'Exercício 01 - Olá, mundo!',
    url: 'exercicios/ex001/index.html',
    src: 'exercicios/ex001/img/exercise.png'
  },
  {
    name: 'Exercício 02 - Parágrafos e Quebra de linhas',
    src: 'exercicios/ex002/img/exercise.png',
    url: 'exercicios/ex002/index.html'
  },
  {
    name: 'Exercício 03 - Testando carga e Imagens',
    src: 'exercicios/ex003/img/exercise.png',
    url: 'exercicios/ex003/index.html'
  },
  {
    name: 'Exercício 04 - Favicon',
    url: 'exercicios/ex004/index.html',
    src: 'exercicios/ex004/img/exercise.png'
  },
  {
    name: 'Exercício 06 - Hierarquia de títulos',
    url: 'exercicios/ex006/index.html',
    src: 'exercicios/ex006/img/exercise.png'
  },
  {
    name: 'Exercício 07 - Exemplos HTML4 e HTML5',
    url: 'exercicios/ex007/index.html',
    src: 'exercicios/ex007/img/exercise.png'
  },
  {
    name: 'Exercício 08 - Principais Semânticas',
    url: 'exercicios/ex008/index.html',
    src: 'exercicios/ex008/img/exercise.png'
  },
  {
    name: 'Exercício 08b - Outras formatações',
    url: 'exercicios/ex008b/index.html',
    src: 'exercicios/ex008b/img/exercise.png'
  },
  {
    name: 'Exercício 09 - Trabalhando com listas',
    url: 'exercicios/ex009/index.html',
    src: 'exercicios/ex009/img/exercise.png'
  },
  {
    name: 'Exercício 10 - Usando links Externos',
    url: 'exercicios/ex010/index.html',
    src: 'exercicios/ex010/img/exercise.png'
  },
  {
    name: 'Exercício 11 - Mídias em HTML5',
    url: 'exercicios/ex011/index.html',
    src: 'exercicios/ex011/img/exercise.png'
  },
  {
    name: 'Exercício 12 - Meus vídeos',
    url: 'exercicios/ex012/index.html',
    src: 'exercicios/ex012/img/exercise.png'
  },
  {
    name: 'Exercício 13 - Estilos Inline',
    url: 'exercicios/ex013/index.html',
    src: 'exercicios/ex013/img/exercise.png'
  },
  {
    name: 'Exercício 14 - Estilos locais ou internos',
    url: 'exercicios/ex014/index.html',
    src: 'exercicios/ex014/img/exercise.png'
  },
  {
    name: 'Exercício 15 - Estilos Externos',
    url: 'exercicios/ex015/index.html',
    src: 'exercicios/ex015/img/exercise.png'
  }
];

const res = document.querySelector('#res');
res.innerHTML = ''
for (let i of contents) {
  const createCard = document.createElement('div');
  const article = document.createElement('article');
  const divImg = document.createElement('div');
  const divContent = document.createElement('div');

  createCard.setAttribute('class', 'l-cards');
  article.setAttribute('class', 'c-card');
  divImg.setAttribute('class', 'card-img');
  divContent.setAttribute('class', 'content');

  divImg.innerHTML = `<a href="${i.url}"><img src="${i.src}" alt="Image Placeholder" width="100%"></img></a>`
  article.appendChild(divImg)

  divContent.innerHTML = `<span>${i.name}</span>`
  article.appendChild(divContent)
  
  createCard.appendChild(article);


  res.appendChild(createCard);
}

