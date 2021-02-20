const divButton = document.querySelector(".contenedor__button");
const listado = document.querySelector(".menu-responsive__ul");


divButton.addEventListener("click", (e) => {
  if (!listado.classList.contains('ver')) {
    listado.classList.add('ver');
    //  console.log('menu desplegado');
  } else {
    if (listado.classList.contains('ver')) {
      listado.classList.remove('ver');
      // console.log('menu cerrado')
    }
  }
});
