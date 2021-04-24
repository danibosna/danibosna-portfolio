$(window).on('load', function() {
    $('#slider').nivoSlider(); 
});

//mostrar y ocultar menu

const btnMn = document.querySelector('.btn-menu');

btnMn.addEventListener('click', mostrarMenu);

function mostrarMenu(e) {
    e.preventDefault();

    const menu = document.querySelector('.lista');

    if(menu.classList.contains('mostrar')) {
        //remover la clase mostrar
        menu.classList.remove('mostrar');
    
    } else {
        //mostrar el menu
        menu.classList.add('mostrar');

    }
}