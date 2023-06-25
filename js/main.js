//const hamburguesa = document.querySelector('.hamburguesa');
//const menu = document.querySelector('.menuPrincipal .menu');

//hamburguesa.addEventListener('click', () => {
//  menu.classList.toggle('mostrar'); // Agrega o quita la clase "mostrar" al menú al hacer clic en la hamburguesa
//});

const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menuPrincipal .menu');

hamburguesa.addEventListener('click', () => {
menu.classList.toggle('mostrar');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 800) {
    menu.classList.remove('mostrar'); // Oculta el menú en dispositivos de escritorio
  }
});

