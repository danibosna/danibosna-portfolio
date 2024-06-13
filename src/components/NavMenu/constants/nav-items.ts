import type { NavItem } from "../model/nav-item";
import aboutIcon from "@/assets/icons/question.svg";
import homeIcon from "@/assets/icons/home.svg";
import blogIcon from "@/assets/icons/pen.svg";
import portfolioIcon from "@/assets/icons/briefcase.svg";
import githubIcon from "@/assets/icons/github-white.svg";

const navigation = [
  {
    showOnMenu: true,
    name: "/",
    href: "/",
    icon: homeIcon.src,
    description: "Solidity Developer & SmartContract Research",
    sectionTitle: "/",
    withButton: {
      showButton: false,
      buttonTitle: undefined,
      variant: undefined,
      size: undefined,
      clickFnIdentifier: undefined,
    },
  },
  {
    showOnMenu: true,
    name: "Blog",
    href: "/blog",
    icon: blogIcon.src,
    description:
      "Bienvenido a mi portafolio de desarrollador blockchain. Descubre mis proyectos, habilidades y experiencia en la página principal.",
    sectionTitle: "Blog",
    withButton: {
      showButton: false,
      buttonTitle: undefined,
      variant: undefined,
      size: undefined,
      clickFnIdentifier: undefined,
    },
  },
  {
    showOnMenu: true,
    name: "Portafolio",
    href: "/portfolio",
    icon: portfolioIcon.src,
    description:
      "Explora mi portafolio de proyectos blockchain, incluyendo aplicaciones descentralizadas (DApps), contratos inteligentes y otros desarrollos innovadores. Cada proyecto está detallado con su contexto, tecnologías utilizadas y resultados alcanzados.",
    sectionTitle: "Portfolio",
    withButton: {
      showButton: true,
      buttonTitle: githubIcon.src,
      variant: "icon",
      size: "icon",
      clickFnIdentifier: "goToGithub",
    },
  },
  {
    showOnMenu: true,
    name: "Sobre Mi",
    href: "/danibosna",
    icon: aboutIcon.src,
    description:
      "Conoce más sobre mí, Dani Bosna, desarrollador blockchain con experiencia en la creación de soluciones innovadoras y seguras. Descubre mi trayectoria profesional y mis logros.",
    sectionTitle: "DaniBosna",
    withButton: {
      showButton: true,
      buttonTitle: githubIcon.src,
      variant: "icon",
      size: "icon",
      clickFnIdentifier: "goToGithub",
    },
  },
  // {
  //   showOnMenu: false,
  //   name: "Extra",
  //   href: "/extra",
  //   icon: gitHubIcon.src,
  //   description:
  //     "Accede a recursos adicionales y extras que complementan mi portafolio. Aquí encontrarás artículos, tutoriales, y otras contribuciones que he realizado en el ámbito del desarrollo blockchain.",
  //   sectionTitle: "Extra",
  //   withButton: {
  //     showButton: false,
  //     buttonTitle: undefined,
  //     variant: undefined,
  //     size: undefined,
  //     clickFnIdentifier: undefined,
  //   },
  //   subItems: [
  //     {
  //       showOnMenu: false,
  //       name: "Subitem Extra",
  //       href: "/extra/subitem",
  //       icon: gitHubIcon.src,
  //       description:
  //         "Descubre contenido adicional específico que no encaja en las otras categorías de mi portafolio, pero que puede ser de gran interés para entusiastas del blockchain.",
  //       sectionTitle: "Subitem Extra",
  //       withButton: {
  //         showButton: true,
  //         buttonTitle: gitHubIcon.src,
  //         variant: "icon",
  //         size: "icon",
  //         clickFnIdentifier: "back",
  //       },
  //     },
  //   ],
  // },
];

export default navigation as NavItem[];
