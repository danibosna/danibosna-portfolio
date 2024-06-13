/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as createAstro, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_C01veE1b.mjs';
/* empty css                              */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { create } from 'zustand';

const aboutIcon = new Proxy({"src":"/_astro/question.BMmv6Yzx.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/assets/icons/question.svg";
							}
							
							return target[name];
						}
					});

const homeIcon = new Proxy({"src":"/_astro/home.BZoegAtg.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/assets/icons/home.svg";
							}
							
							return target[name];
						}
					});

const blogIcon = new Proxy({"src":"/_astro/pen.Em74sCxb.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/assets/icons/pen.svg";
							}
							
							return target[name];
						}
					});

const portfolioIcon = new Proxy({"src":"/_astro/briefcase.CjlZIUAd.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/assets/icons/briefcase.svg";
							}
							
							return target[name];
						}
					});

const githubIcon = new Proxy({"src":"/_astro/github-white.ye4_cj-H.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/assets/icons/github-white.svg";
							}
							
							return target[name];
						}
					});

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
      buttonTitle: void 0,
      variant: void 0,
      size: void 0,
      clickFnIdentifier: void 0
    }
  },
  {
    showOnMenu: true,
    name: "Blog",
    href: "/blog",
    icon: blogIcon.src,
    description: "Bienvenido a mi portafolio de desarrollador blockchain. Descubre mis proyectos, habilidades y experiencia en la página principal.",
    sectionTitle: "Blog",
    withButton: {
      showButton: false,
      buttonTitle: void 0,
      variant: void 0,
      size: void 0,
      clickFnIdentifier: void 0
    }
  },
  {
    showOnMenu: true,
    name: "Portafolio",
    href: "/portfolio",
    icon: portfolioIcon.src,
    description: "Explora mi portafolio de proyectos blockchain, incluyendo aplicaciones descentralizadas (DApps), contratos inteligentes y otros desarrollos innovadores. Cada proyecto está detallado con su contexto, tecnologías utilizadas y resultados alcanzados.",
    sectionTitle: "Portfolio",
    withButton: {
      showButton: true,
      buttonTitle: githubIcon.src,
      variant: "icon",
      size: "icon",
      clickFnIdentifier: "goToGithub"
    }
  },
  {
    showOnMenu: true,
    name: "Sobre Mi",
    href: "/danibosna",
    icon: aboutIcon.src,
    description: "Conoce más sobre mí, Dani Bosna, desarrollador blockchain con experiencia en la creación de soluciones innovadoras y seguras. Descubre mi trayectoria profesional y mis logros.",
    sectionTitle: "DaniBosna",
    withButton: {
      showButton: true,
      buttonTitle: githubIcon.src,
      variant: "icon",
      size: "icon",
      clickFnIdentifier: "goToGithub"
    }
  }
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

const logoIcon = new Proxy({"src":"/_astro/danibosna-logo-white.CyVHkAKX.webp","width":512,"height":504,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/assets/images/danibosna-logo-white.webp";
							}
							
							return target[name];
						}
					});

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$2 = createAstro();
const $$NavItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavItem;
  const { item } = Astro2.props;
  const currentRoute = new URLSearchParams("").toString();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    !currentRoute.includes(item.href.split("/")[2]) ? "mb-2" : "opacity-5",
    `mb-2 pl-2 py-1 flex flex-col justify-center text-xs md:text-lg textwalle hover:glass w-full rounded-l-3xl`
  ), "class")}> <a${addAttribute(item.href, "href")} data-astro-prefetch> <span class="flex items-center gap-4"> <img class="p-1 nav-item-icon"${addAttribute(item?.icon, "src")}${addAttribute(item.name, "alt")}${addAttribute(32, "width")}> <span${addAttribute(`w-full text-sm nav-item-text font-medium text-primary-foreground`, "class")}> ${item.name} </span> </span> </a> </div>`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/components/NavMenu/ui/NavItem.astro", void 0);

const $$NavMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav id="nav"${addAttribute(`lg:[grid-area:aside] flex justify-center pl-2 overflow-y-auto overflow-x-hidden clip-container`, "class")}> <div${addAttribute(`w-full h-full flex flex-col space-y-5`, "class")}> <div${addAttribute(`w-full pt-3 px-1 flex flex-col justify-start text-xs font-bold md:mb-2 md:text-lg`, "class")}> <a href="/"> <img${addAttribute(logoIcon.src, "src")} class="w-16 p-2"> </a> </div> <div${addAttribute(`nav-item w-full flex flex-col py-2 pl-2`, "class")}> ${navigation?.map(
    (item, index) => item.subItems && item.subItems.some((i) => i.showOnMenu == true) ? renderTemplate`${renderComponent($$result, "ItemAccordion", null, { "client:only": "react", "item": item, "client:component-hydration": "only", "client:component-path": "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/components/NavMenu/ui/ItemAccordion", "client:component-export": "ItemAccordion" })}` : renderTemplate`${renderComponent($$result, "NavItem", $$NavItem, { "item": item })}`
  )} </div> </div> </nav>`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/components/NavMenu/ui/NavMenu.astro", void 0);

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-white shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        icon: "bg-primary shadow hover:bg-primary-foreground/90"
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "w-14 h-8 text-lg",
        sm: "w-44 h-12 text-lg",
        lg: "w-64 h-12 text-lg",
        icon: "h-10 w-10 rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

let navigateOnServerWarned = false;
async function navigate(href, options) {
  {
    if (!navigateOnServerWarned) {
      const warning = new Error(
        "The view transitions client API was called during a server side render. This may be unintentional as the navigate() function is expected to be called in response to user interactions. Please make sure that your usage is correct."
      );
      warning.name = "Warning";
      console.warn(warning);
      navigateOnServerWarned = true;
    }
    return;
  }
}

var ModalType = /* @__PURE__ */ ((ModalType2) => {
  ModalType2["VIDEO"] = "video";
  ModalType2["ALERTS"] = "alerts";
  return ModalType2;
})(ModalType || {});

const useModalStore = create((set) => ({
  showModal: false,
  modalType: ModalType.ALERTS,
  toggleShowModal: () => set((state) => ({
    ...state,
    showModal: !state.showModal
  })),
  setModalType: (modalType) => set(() => ({
    modalType
  }))
}));

const useDynamicRoutes = () => {
  const { toggleShowModal, setModalType } = useModalStore();
  const dynamicRoutesFnMappings = {
    defaultKey: () => "",
    back: () => window.history.back(),
    goToGithub: () => {
      navigate();
    },
    addInsurers: () => `/configuracion/aseguradoras/agregar/nueva-aseguradora`,
    addTeam: () => `/configuracion/el-team/agregar/nuevo-usuario`,
    editProfile: (id) => `/configuracion/mi-perfil/editar/${id ?? "test-ID"}`,
    addProspect: () => `/prospectos/agregar/nuevo-prospecto`,
    addCustomer: () => `/clientes/agregar/nuevo-cliente`,
    addNews: () => {
      toggleShowModal();
    },
    addTraining: () => {
      toggleShowModal();
    }
  };
  return dynamicRoutesFnMappings;
};

const Header = ({
  sectionTitle,
  buttonData,
  query
}) => {
  const dynamicRoutes = useDynamicRoutes();
  const handleClick = () => {
    const fn = dynamicRoutes[buttonData.clickFnIdentifier ?? "defaultKey"];
    if (typeof fn === "function") {
      const route = query ? fn(query) : fn();
      if (typeof route === "string") {
        return navigate();
      } else if (typeof route === "function") {
        return route;
      }
    } else {
      console.error("Función no definida para", buttonData.clickFnIdentifier);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 justify-end md:gap-6 sm:justify-between px-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "w-3/4 sm:w-1/2 sm:text-start text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-400", children: sectionTitle }),
    buttonData?.showButton && /* @__PURE__ */ jsx(
      Button,
      {
        type: "button",
        variant: buttonData.variant,
        size: buttonData.size,
        onClick: handleClick,
        children: buttonData.size !== "icon" ? /* @__PURE__ */ jsx("span", { children: buttonData.buttonTitle }) : /* @__PURE__ */ jsx("img", { src: buttonData?.buttonTitle, alt: "" })
      }
    )
  ] });
};

const alertIcon = new Proxy({"src":"/_astro/chart.Dvx96PfV.jpg","width":1920,"height":1056,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/assets/images/chart.jpg";
							}
							
							return target[name];
						}
					});

const $$AlertModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="px-4 space-y-4 flex flex-col items-center"> <div class="space-y-8 mb-16 text-center"> <div class="flex items-center justify-center"> <img class=""${addAttribute(alertIcon.src, "src")} alt=""> </div> <h3 class="text-lg text-tertiary font-semibold"> ${"\xA1\xDAltima oportunidad!"} </h3> <p class="w-1/2 mx-auto text-lg text-tertiary font-medium">
Al continuar aceptas que ya no podrás retroceder el estado del cliente.
</p> </div> ${renderComponent($$result, "Button", Button, { "className": "text-white", "size": "sm", "variant": "default" }, { "default": ($$result2) => renderTemplate`
Visto
` })} </div>`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/components/Alerts/ui/AlertModal.astro", void 0);

const $$ModalVideo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full text-center mb-2"> <h3 class="text-tertiary font-semibold text-lg"> ${"Keynote (Google I/O '18)"} </h3> </div> <div class="w-full my-4"> ${renderComponent($$result, "lite-youtube", "lite-youtube", { "id": "yt-iframe", "videoid": "XEzRZ35urlk" })} </div> <div class="w-full flex justify-around my-2"> <a${addAttribute("#", "href")} target="_blank" rel="noopener noreferrer" class="w-64 h-12 text-lg text-white bg-primary rounded-3xl inline-flex items-center justify-center whitespace-nowrap font-medium"> ${"Iniciar test"} </a> ${renderComponent($$result, "Button", Button, { "size": "lg" }, { "default": ($$result2) => renderTemplate` Salir ` })} </div>`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/components/Modal/ui/ModalVideo.astro", void 0);

const $$Modal = createComponent(($$result, $$props, $$slots) => {
  ({
    [ModalType.VIDEO]: $$ModalVideo,
    [ModalType.ALERTS]: $$AlertModal
  });
  return renderTemplate`${false}`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/components/Modal/ui/Modal.astro", void 0);

function findMetadataForPath(path, items) {
  const pathParts = path.split("/");
  for (const item of items) {
    const itemParts = item.href.split("/");
    if (path === item.href) {
      return {
        title: `${item.name} - DaniBosna`,
        description: item.description,
        sectionTitle: item.sectionTitle,
        withButton: item.withButton
      };
    }
    const section = itemParts.find((part, index) => {
      if (pathParts.length === 5) {
        return index === 2 && part === pathParts[index];
      } else if (pathParts.length === 4) {
        return index === 1 && part === pathParts[index];
      }
      return false;
    });
    if (section && itemParts.some((part, index) => index > 0 && part.startsWith(":"))) {
      return {
        title: `${item.name} - DaniBosna`,
        description: item.description,
        sectionTitle: item.sectionTitle,
        withButton: item.withButton
      };
    }
    if (item.subItems) {
      const metadata = findMetadataForPath(path, item.subItems);
      if (metadata)
        return metadata;
    }
  }
}
function getPageMetadata(path) {
  const metadata = findMetadataForPath(path, navigation);
  return metadata || {
    title: "DaniBosna",
    description: "Blockchain Developer",
    sectionTitle: "",
    withButton: {
      showButton: false,
      buttonTitle: "",
      variant: void 0,
      size: void 0,
      clickFnIdentifier: null
    }
  };
}

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/node_modules/.pnpm/astro@4.10.2_@types+node@20.14.2_typescript@5.4.5/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const url = new URL(Astro2.request.url);
  const path = url.pathname;
  const metadata = getPageMetadata(path);
  const { action } = Astro2.params;
  const { title, description, sectionTitle, withButton } = metadata;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="stylesheet" href="node_modules/lite-youtube-embed/src/lite-yt-embed.css">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "animate" })}${renderHead()}</head> <body> <div id="body" class="h-screen w-full lg:p-10 2xl:px-14 overflow-hidden"> <div id="app" class="clip-container"> ${renderComponent($$result, "NavMenu", $$NavMenu, {})} <main class="[grid-area:main] w-full px-3 pt-5 pb-12 md:px-4 md:py-7"> ${renderComponent($$result, "Header", Header, { "client:load": true, "sectionTitle": sectionTitle, "buttonData": withButton, "query": action, "client:component-hydration": "load", "client:component-path": "@/components/Header/ui/Header", "client:component-export": "default" })} <div class="pt-6 w-full h-[80vh] overflow-y-scroll"> ${renderSlot($$result, $$slots["default"])} </div> </main> </div> </div> ${renderComponent($$result, "Modal", $$Modal, {})} </body></html>`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/layouts/MainLayout.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {})}`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/pages/404.astro", void 0);

const $$file = "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ViewTransitions as $, Header as H, _404 as _, $$NavMenu as a, $$Modal as b, $$MainLayout as c, getPageMetadata as g };
