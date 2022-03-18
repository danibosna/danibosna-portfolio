import github from '@images/github_social_icon.png';
import twitter from '@images/twitter_social_icon.png';
import linkedin from '@images/linkedin_social_icon.png';
import mixer from '@images/mixer_icon.png';
import code from '@images/code_icon.png';
import logoDaniBosna from '@images/logo-danielboscan.png';
import htmlImg from '@images/html_icon.png';
import cssImg from '@images/css_icon.png';
import jsImg from '@images/javascript_icon.png';
import sassImg from '@images/sass_icon.png';
import bootstrapImg from '@images/bootstrap_icon.png';
import wordpressImg from '@images/wordpress_icon.png';
import gitImg from '@images/git_icon.png';
import nodejsImg from '@images/nodejs_icon.png';
import githubSkillImg from '@images/github_icon.png';
import yoImg from '@images/yo_img.png';

const Template = async () => {

  const view = `
    <header>
      <div class="box">
          <a href="#" id="logo" class="box__logo">
              <h1>Dani Bosna</br> <span>Digital Solutions Developer.</span></h1>
          </a>
          <button type="button" class="box__menu" id="button"></button>
          <div class="box__social">
              <a href="#" id="github"><img src="${github}" ></a>
              <a href="#" id="tw"><img src="${twitter}" ></a>
              <a href="#" id="linkedin"><img src="${linkedin}" ></a>
          </div>
      </div>
      <menu id="menu" class="lista lista-close">
          <ul class="nav_list">
              <li>
                  <a href="#" id="me">
                      <i class="far fa-id-badge"></i>
                      <span>Me</span>
                  </a>
              </li>
              <li>
                  <a href="#" id="port">
                      <i class="fas fa-folder-open"></i>
                      <span>Portafolio</span>
                      <i class="fas fa-chevron-down arrow"></i>
                  </a>
                  <ul class="sub-mn">
                      <li>
                          <a href="#" class="link_name">Portafolio</a>
                      </li>
                      <li>
                          <a href="#">BoskiCookBook</a>
                      </li>
                      <li>
                          <a href="#">SimonnsTattoo</a>
                      </li>
                  </ul>
              </li>
              <li>
                  <a href="#" id="experience">
                      <i class="fas fa-code"></i>
                      <span>Experience</span>
                  </a>
              </li>
              <li>
                  <a href="#" id="especialities">
                      <i class="fas fa-chart-bar"></i>
                      <span>Especialities</span>
                  </a>
              </li>
              <li>
                  <a href="#" id="skills">
                      <i class="fas fa-braille"></i>
                      <span>Skills</span>
                  </a>
              </li>
              <li>
                  <a href="#" id="contact">
                      <i class="far fa-comments"></i>
                      <span>Conversemos</span>
                  </a>
              </li>
          </ul>
      </menu>
    </header>	

    <section class="jumbotron slider-wrapper theme-default">
      <!-- <div id="slider" class="nivoSlider" >

      </div>  -->
      <!-- <div class="education container">
          <h2 class="titles"><strong>Boski CookBook.</strong></h2>
          <ul>
              <li><p><strong>Html5, css3, Wordpress.</strong></p></li>
              <li><p><strong>SimonnsTattoo.</strong><br /> Hito._ Diseño y desarrollo.<br /> <strong>DevTech._ Html5, Css3, Wordpress.</strong></p></li>
          </ul>
      </div> -->
    </section>
    <section class="special container">
      <h2 class="titles">My Specialities</h2>
      <div class="specialities">
          <div>
              <img src="${mixer}" />
              <h4>Audio Mastering</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium quos iure totam. Fugiat dicta quisquam earum porro, sunt est. Nostrum doloribus ab quam praesentium, illo aliquid dolores labore tempora.</p>
          </div>
          <div>
              <img src="${code}" />
              <h4>Programming</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium quos iure totam. Fugiat dicta quisquam earum porro, sunt est. Nostrum doloribus ab quam praesentium, illo aliquid dolores labore tempora.</p>
          </div>
      </div>
    </section>
    <section id="experience" class="experience container">
      <h2 class="titles">Work Experience</h2>
      <ul class="card-wrapper">
          <li class="card">
              <img src="${logoDaniBosna}" alt="">
              <h3>DaniBosna</h3>
              <p>
                  Creacion y preparacion de contenido para desarrollo de portafolio
                  <br />
                  <strong>Febrero 2020</strong>
              </p>
              <a href="./index.html">
                  <i class="fas fa-external-link-alt"></i>
              </a>
          </li>
          <li class="card">
              <img src="${logoDaniBosna}" alt="">
              <h3>APV</h3>
              <p>
                  Creacion de Administrador de Pacientes de Veterinaria
                  <br />
                  <strong>Agosto 2020</strong>
              </p>
              <a href="https://danibosna-apv.netlify.app/">
                  <i class="fas fa-external-link-alt"></i>
              </a>
          </li>
          <li class="card">
              <img src="${logoDaniBosna}" alt="">
              <h3>APV</h3>
              <p>
                  Creacion de Administrador de Pacientes de Veterinaria
                  <br />
                  <strong>Agosto 2020</strong>
              </p>
              <a href="https://danibosna-apv.netlify.app/">
                  <i class="fas fa-external-link-alt"></i>
              </a>
          </li>
          <li class="card">
              <img src="${logoDaniBosna}" alt="">
              <h3>APV</h3>
              <p>
                  Creacion de Administrador de Pacientes de Veterinaria
                  <br />
                  <strong>Agosto 2020</strong>
              </p>
              <a href="https://danibosna-apv.netlify.app/">
                  <i class="fas fa-external-link-alt"></i>
              </a>
          </li>
          <li class="card">
              <img src="${logoDaniBosna}" alt="">
              <h3>APV</h3>
              <p>
                  Creacion de Administrador de Pacientes de Veterinaria
                  <br />
                  <strong>Agosto 2020</strong>
              </p>
              <a href="https://danibosna-apv.netlify.app/">
                  <i class="fas fa-external-link-alt"></i>
              </a>
          </li>

      </ul>
    </section>
    <section id="skills" class="skills container">
      <h2 class="titles">Skills</h2>
      <div class="technology">
          <h3>Tech</h3>
          <div class="tech">
              <a href="#"><img src="${htmlImg}"></a>
              <a href="#"><img src="${cssImg}"></a>
              <a href="#"><img src="${jsImg}"></a>
              <a href="#"><img src="${sassImg}"></a>
              <a href="#"><img src="${bootstrapImg}"></a>
              <a href="#"><img src="${wordpressImg}"></a>
              <a href="#"><img src="${gitImg}"></a>
              <a href="#"><img src="${nodejsImg}"></a>
              <a href="#"><img src="${githubSkillImg}"></a>
          </div>
      </div>
      <div class="language">
          <h3>Language</h3>
          <div class="lang"></div>
      </div>
    </section>
    <section id="modal-cont" class="modal-container">
      <div id="modal" class="personal modal modal-close">
          <button id="close" class="close">X</button>
          <img src="${yoImg}" alt="" loading="lazy">
          <div class="info">
              <h2 class="titles">Me</h2>
              <p>
                  <strong> 
                  Con una pasion inagotable por la industria Tech, busco llevar soluciones a ambitos sociales que acarrean con sistemas deficientes. Como Desarrollador Web busco implementar tecnologias que permitan dar respuestas oportunas y eficientes a cualquier mal que pueda padecer nuestra sociedad.

                  Me apasiona el Open Source y trabajar con Equipos que expandan nuestra cultura global, porque no hay mayor alegría en lo que hago que ayudar a triunfar a las personas que sueñan en grande, como yo. Me gusta forjar relaciones sólidas con mis clientes y colaboradores, que luego se convierten en socios, que luego se hacen amigos.
                  </strong>
              </p>
          </div>
      </div>
    </section>
    <footer>
      <section id="foot-cont" class="footer-container foot-close container">
          <button id="foot-btn" class="foot-btn">></button>

      </section>
      <df-messenger
      intent="WELCOME"
      chat-title="DialogflowMessenger"
      agent-id="88e28ace-0e81-4b05-931e-c27567baffba"
      language-code="es"
      class="chatBot"
      ></df-messenger>
    </footer>

    
	<script src="https://kit.fontawesome.com/671a8e910f.js" crossorigin="anonymous"></script>
	<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
	<!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> -->
	<!-- <script src="js/jquery.nivo.slider.js"></script> -->
    <script src="../src/utils/script.js"></script>
  `;
  return view;
};

export default Template;