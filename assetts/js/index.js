const imagenes = [
  "assetts/img/img0.webp",
  "assetts/img/img1.webp",
  "assetts/img/img2.webp",
  "assetts/img/img3.webp",
  "assetts/img/img4.webp",
  "assetts/img/img5.webp",
];


let indice = 0;

const imagen = document.getElementById("imagen-carrusel");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

function mostrarImagen() {
  imagen.src = imagenes[indice];
}

btnPrev.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
});

btnNext.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen();
});

mostrarImagen();
