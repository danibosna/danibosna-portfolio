import React from 'react';
import yoImg from "@images/yo_img.png";

const Modal = ({modalFunct}) => {
  return (
    <section id="modal-cont" className="modal__box">
      <div id="modal" className="modal">
        <button id="close" className="close" onClick={modalFunct}>X</button>
        <img src={yoImg} alt="" />
        <div className="info">
          <h2 className="titles">Me</h2>
          <p>
            <strong>
            Con una pasion inagotable por la industria Tech, busco llevar soluciones a ambitos sociales que acarrean con sistemas deficientes. Como Desarrollador Web busco implementar tecnologias que permitan dar respuestas oportunas y eficientes a cualquier mal que pueda padecer nuestra sociedad.<br />
            Me apasiona el Open Source y trabajar con Equipos que expandan nuestra cultura global, porque no hay mayor alegría en lo que hago que ayudar a triunfar a las personas que sueñan en grande, como yo. Me gusta forjar relaciones sólidas con mis clientes y colaboradores, que luego se convierten en socios, que luego se hacen amigos.
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Modal;