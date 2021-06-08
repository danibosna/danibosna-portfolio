//variables
const btnMn = document.querySelector('.btn-menu');
const menu = document.querySelector('.lista');
const cerrarModal = document.querySelector('.close');
const abrirModal = document.querySelector('.cta');
const modal = document.querySelector('.modal');
const modalCont = document.querySelector('.modal-container');

eventListeners();
function eventListeners() {
    btnMn.addEventListener('click', mostrarMenu);
    abrirModal.addEventListener('click', mostrarModal);
    cerrarModal.addEventListener('click', ocultarModal);
    window.addEventListener('click', (e) => {
        console.log(e.target);
        if(e.target == modalCont) {
            modal.classList.toggle("modal-close");
            setTimeout(() => {
                modalCont.style.opacity = "0";
                modalCont.style.visibility = "hidden";
            }, 900);
        }
    });
}

//funciones

//nivoSlider
$(window).on('load', function() {
    $('#slider').nivoSlider(); 
});

//mostrar y ocultar menu
function mostrarMenu(e) {
    e.preventDefault();
    menu.classList.toggle("lista-close");
    
    if(menu.classList.contains('lista-close')) {
        setTimeout(() => {
            menu.style.opacity = "0";
            menu.style.visibility = "hidden";
        },900);
    } else {
        menu.style.opacity = "1";
        menu.style.visibility = "visible";
    }
}

//mostrar y ocultar modal
function mostrarModal(e) {
    e.preventDefault();
    modalCont.style.opacity = "1";
    modalCont.style.visibility = "visible";
    modal.classList.toggle("modal-close");

}
function ocultarModal() {
    
    modal.classList.toggle("modal-close");
    setTimeout(() => {
        modalCont.style.opacity = "0";
        modalCont.style.visibility = "hidden";
    }, 900);
}