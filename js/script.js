//variables
const btnMn = document.querySelector('#button');
const menu = document.querySelector('#menu');
const cerrarModal = document.querySelector('#close');
const abrirModal = document.querySelector('#cta');
const modal = document.querySelector('#modal');
const modalCont = document.querySelector('#modal-cont');
const port = document.querySelector('#port');
const especialidad = document.querySelector('#especialidad');
const experiencia = document.querySelector('#experiencia');
const skill = document.querySelector('#skill');
const btnFoot = document.querySelector('#foot-btn');
const footCont = document.querySelector('#foot-cont');
const githubLink = document.querySelector('#github');
const paypalLink = document.querySelector('#paypal');
const twitterLink = document.querySelector('#tw');
const linkedLink = document.querySelector('#linkedin');

eventListeners();
function eventListeners() {
    btnMn.addEventListener('click', mostrarMenu);
    abrirModal.addEventListener('click', mostrarModal);
    cerrarModal.addEventListener('click', ocultarModal);
    port.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
    });
    especialidad.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 662.4000244140625);
    });
    experiencia.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 1025.5999755859375);
    });
    skill.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 999999);
    });
    window.addEventListener('click', (e) => {
        if(e.target == modalCont) {
            modal.classList.toggle("modal-close");
            setTimeout(() => {
                modalCont.style.opacity = "0";
                modalCont.style.visibility = "hidden";
            }, 900);
        }
        console.log(e.target);
    });
    btnFoot.addEventListener('click', (e) => {
        e.preventDefault();

        footCont.classList.toggle('foot-close');

        if(footCont.classList.contains('foot-close')) {
            setTimeout(() => {
                footCont.classList.remove('foot-container');
            },900);
        } else {
            footCont.classList.add('footer-container');
        }
    });
    githubLink.addEventListener('click', (e) =>{ e.preventDefault();
      return window.open('https://github.com/AzazelMaquiavelo', '_blank');
    });
    paypalLink.addEventListener('click', (e) =>{ e.preventDefault();
      return window.open('https://paypal.me/bosnalink?locale.x=es_XC', '_blank'); 
    });
    twitterLink.addEventListener('click', (e) =>{ e.preventDefault();
      return window.open('https://twitter.com/DanielBosna', '_blank');
    });
    linkedLink.addEventListener('click', (e) =>{ e.preventDefault();
      return window.open('www.linkedin.com/in/danibosna', '_blank'); 
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

    menu.classList.toggle('lista-close');

    if(menu.classList.contains('lista-close')) {
        setTimeout(() => {
            menu.classList.remove('lista');
            menu.style.opacity = "0";
            menu.style.visibility = "hidden";
        },900);
    } else {
        menu.classList.add('lista');
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