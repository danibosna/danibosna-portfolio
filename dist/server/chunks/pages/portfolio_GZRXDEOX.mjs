/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as createAstro, f as renderComponent } from '../astro_C01veE1b.mjs';
import { c as $$MainLayout } from './404_CCJmIcf5.mjs';
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
  return renderTemplate`${maybeRenderHead()}<li class="glass clip-container"> <div class="flex"> <img class="w-1/3 py-6"${addAttribute(logo, "src")} alt="logo"> <div class="w-full space-y-5 my-2"> <h3 class="w-full text-3xl text-center font-semibold text-primary-foreground my-5"> ${title} </h3> <p class="w-4/5 text-secondary text-start"> ${extract} </p> <p class="text-secondary text-sm font-semibold">${date}</p> <p class="w-full px-8"> <a class="w-full flex justify-end"${addAttribute(href, "href")}> <img${addAttribute(linkIcon.src, "src")} alt=""> </a> </p> </div> </div> </li>`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/components/Card/ui/Project.astro", void 0);

const logo = new Proxy({"src":"/_astro/codmoreHDwhite.C8Jaw9bx.webp","width":1080,"height":332,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/features/portfolio/assets/codmore/codmoreHDwhite.webp";
							}
							
							return target[name];
						}
					});

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul> ${renderComponent($$result, "Project", $$Project, { "logo": logo.src, "title": "Codmore", "extract": "Creacion y preparacion de contenido para desarrollo de portafolio", "date": "Febrero 2020", "href": "https://codmore.vercel.app/" })} </ul>`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/features/portfolio/ui/Projects.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Projects", $$Projects, {})} ` })}`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/pages/portfolio.astro", void 0);

const $$file = "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/pages/portfolio.astro";
const $$url = "/portfolio";

export { $$Portfolio as default, $$file as file, $$url as url };
