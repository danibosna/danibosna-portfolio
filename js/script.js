//variables
const btnMn = document.querySelector('#button');
const menu = document.querySelector('#menu');
const cerrarModal = document.querySelector('#close');
const abrirModal = document.querySelector('#me');
const modal = document.querySelector('#modal');
const modalCont = document.querySelector('#modal-cont');
const port = document.querySelector('#port');
const especialidad = document.querySelector('#especialities');
const experiencia = document.querySelector('#experience');
const skill = document.querySelector('#skills');
const btnFoot = document.querySelector('#foot-btn');
const footCont = document.querySelector('#foot-cont');
const githubLink = document.querySelector('#github');
const twitterLink = document.querySelector('#tw');
const linkedLink = document.querySelector('#linkedin');
const cont = document.querySelector('#contact');
const logo = document.querySelector('#logo');

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
        window.scrollTo(0, 753.5999755859375);
    });
    experiencia.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 1153.5999755859375);
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
    });
    window.addEventListener('DOMContentLoaded', () => {
        const slice = document.querySelector('.nivo-main-image');
        let imgMovil = ["img/wallpaper-mobile-simonns-750w.png", "img/wallpaper-mobile-boski-750w.png"];
        let imgDesktop = ["img/wallpaper-desktop-simonns-1522w.png", "img/wallpaper-desktop-boski-1522w.png"];
        if(innerWidth <= 800) {
            setInterval(() => {
                imgMovil.forEach((image) => {
                    slice.src = image;
                });
            }, 3000);
        } else {
            setInterval(() => {
                imgDesktop.forEach((image) => {
                    slice.src = image;
                });
            }, 3000);
        }
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
    twitterLink.addEventListener('click', (e) =>{ e.preventDefault();
      return window.open('https://twitter.com/DanielBosna', '_blank');
    });
    linkedLink.addEventListener('click', (e) =>{ e.preventDefault();
      return window.open('https://linkedin.com/in/danibosna', '_blank'); 
    });
    cont.addEventListener('click', (e) =>{ e.preventDefault();
      return location.href = "../contact.html"; 
    });
    logo.addEventListener('click', (e) =>{ e.preventDefault();
      return location.href = "../index.html"; 
    });
}

//funciones

//nivoSlider
$(window).on('load', function() {
    $('#slider').nivoSlider({
        pauseTime: 5000
    }); 
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