/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, h as renderSlot, e as renderComponent } from '../astro_CbfoSXOY.mjs';
import { c as cn, b as $$MainLayout } from './404_BHnlnMZ3.mjs';
import 'clsx';

const $$Section = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="h-full"> <div${addAttribute(cn("grid-container py-3 h-full justify-between"), "class")}> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/components/Section/ui/Section.astro", void 0);

const thumbnailImg = new Proxy({"src":"/_astro/BTC.CDVC1zMa.jpg","width":608,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/assets/images/BTC.jpg";
							}
							
							return target[name];
						}
					});

const $$BlogContainer = createComponent(($$result, $$props, $$slots) => {
  const mockArticles = [
    {
      slug: "/blog/test-blog",
      id: "1",
      title: "test de titulo",
      thumbnail: thumbnailImg.src
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`grid w-full grid-flow-row-dense grid-cols-12 gap-4`, "class")}> ${mockArticles?.map((article, index) => renderTemplate`${renderComponent($$result2, "ArticleCard", null, { "client:only": "react", "slug": article.slug, "index": index, "id": article.id, "title": article.title, "thumbnail": article.thumbnail, "client:component-hydration": "only", "client:component-path": "@/components/Card/ui/ArticleCard", "client:component-export": "ArticleCard" })}`)} </div> ` })}`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/features/blog/ui/BlogContainer.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogContainer", $$BlogContainer, {})} ` })}`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/pages/blog/index.astro", void 0);

const $$file$1 = "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {})}`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/pages/index.astro", void 0);

const $$file = "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
