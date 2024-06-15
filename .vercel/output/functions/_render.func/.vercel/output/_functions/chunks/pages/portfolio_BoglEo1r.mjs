/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as createAstro, e as renderComponent } from '../astro_CbfoSXOY.mjs';
import { b as $$MainLayout } from './404_BHnlnMZ3.mjs';
import 'clsx';

const linkIcon = new Proxy({"src":"/_astro/new-tab.CySD9pJj.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/assets/icons/new-tab.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Project;
  const { logo, title, extract, date, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="glass clip-container"> <div class="flex flex-col"> <img class="w-full py-4"${addAttribute(logo, "src")} alt="logo"> <div class="w-full space-y-5 my-2"> <h3 class="w-full text-3xl text-center font-semibold text-primary-foreground my-5"> ${title} </h3> <p class="w-full text-secondary text-start px-4"> ${extract} </p> <p class="px-8 text-secondary text-sm font-semibold">${date}</p> <p class="w-full px-8"> <a class="w-full flex justify-end"${addAttribute(href, "href")}> <img${addAttribute(linkIcon.src, "src")} alt=""> </a> </p> </div> </div> </li>`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/components/Card/ui/Project.astro", void 0);

const logo = new Proxy({"src":"/_astro/LogoCodMoreHDW.DsfHyLuo.webp","width":1000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/features/portfolio/assets/codmore/LogoCodMoreHDW.webp";
							}
							
							return target[name];
						}
					});

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul> ${renderComponent($$result, "Project", $$Project, { "logo": logo.src, "title": "CODMORE", "extract": "Se implement\xF3 Next.js y React.js para crear una interfaz de usuario modular y de alto rendimiento. Adem\xE1s, se utilizaron Hardhat y Solidity para desarrollar contratos inteligentes en Ethereum, a\xF1adiendo caracter\xEDsticas descentralizadas y seguridad blockchain. Se incorpor\xF3 Three.js para efectos visuales en 3D, Tailwind CSS para un dise\xF1o atractivo y responsivo, y TypeScript para mejorar la detecci\xF3n de errores y la escalabilidad. En resumen, el proyecto web se benefici\xF3 de Next.js, React.js, Hardhat, Solidity, Three.js, Tailwind CSS y TypeScript, resultando en una aplicaci\xF3n web robusta, segura y visualmente atractiva.", "date": "Febrero 2020", "href": "https://codmore.vercel.app/" })} </ul>`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/features/portfolio/ui/Projects.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Projects", $$Projects, {})} ` })}`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/pages/portfolio.astro", void 0);

const $$file = "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/pages/portfolio.astro";
const $$url = "/portfolio";

export { $$Portfolio as default, $$file as file, $$url as url };
