//
//
//menu hambuguesa
const botonHamburguesa = document.getElementById("hamburguesa"); //opteniendo los elementos hamburguesa
const menu = document.querySelector(".menu"); //opteniendo los elementos menu
//agregando un event 
botonHamburguesa.addEventListener("click", () => {
  menu.classList.toggle("mostrar");
});

// Agrega el siguiente código adicional para cerrar el menú cuando se haga clic fuera de él
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !botonHamburguesa.contains(event.target)) {
    menu.classList.remove("mostrar");
  }
});

 // Oculta el menú de dispositivos mobil cuando pasa a desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('mostrar');
  }
});

//menu con la class active
const menuItems = document.querySelectorAll('.menu-item'); // selecciona de los class="menu-item"
  menuItems.forEach(function(item){ //iterar en los elementos li
    item.addEventListener("click", function(e){  //funcion
      const cuncurrenciaItem = document.querySelector('.active'); //selecciona el elemento
          cuncurrenciaItem.classList.remove('active'); //remueve la class active al event click
      e.target.classList.add('active') //agregar al nuevo item 
  });
});
