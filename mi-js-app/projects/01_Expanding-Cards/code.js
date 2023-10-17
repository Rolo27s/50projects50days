const $shadowDOM = document.createElement('div');
$shadowDOM.classList.add('cards-container');

// Función para ingresar imágenes. La extensión de las imágenes serán en jpg
const insertImage = function (container, src) {
  const alt = src.split('/')[2];
  container.innerHTML += `
    <div class = "card">
      <img src="${src}.jpg" alt= "${alt}">
      <figcaption>${alt}</figcaption>
    </div>
  `;
}

// Imagen 1.
insertImage ($shadowDOM, './assets/lake-and-mountains-nature');

// Virtual o Shadow DOM to DOM. Corregir terminologías.
document.body.insertAdjacentElement('beforeend', $shadowDOM);
