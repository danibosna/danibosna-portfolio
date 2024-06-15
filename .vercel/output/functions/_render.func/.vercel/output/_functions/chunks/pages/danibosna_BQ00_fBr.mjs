/* empty css                          */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderComponent, g as renderHead, h as renderSlot, f as createAstro, u as unescapeHTML } from '../astro_CbfoSXOY.mjs';
/* empty css                              */
import { g as getPageMetadata, $ as $$ViewTransitions, H as Header, a as $$Modal } from './404_BHnlnMZ3.mjs';

const $$Astro = createAstro();
const $$AboutMeLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutMeLayout;
  const url = new URL(Astro2.request.url);
  const path = url.pathname;
  const metadata = getPageMetadata(path);
  const { action } = Astro2.params;
  const { frontmatter } = Astro2.props;
  const { sectionTitle, withButton } = metadata;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(frontmatter.description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/danibosna-logo-white.webp"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${frontmatter.title}</title><link rel="stylesheet" href="node_modules/lite-youtube-embed/src/lite-yt-embed.css">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "animate" })}${renderHead()}</head> <body> <div id="body" class="h-screen w-full lg:p-10 2xl:px-14 overflow-hidden"> <div id="app" class="clip-container"> ${renderComponent($$result, "NavMenu", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/NavMenu/ui/NavMenu", "client:component-export": "default" })} <main class="[grid-area:main] w-full px-3 pt-5 pb-12 md:px-4 md:py-7"> ${renderComponent($$result, "Header", Header, { "client:load": true, "sectionTitle": sectionTitle, "buttonData": withButton, "query": action, "client:component-hydration": "load", "client:component-path": "@/components/Header/ui/Header", "client:component-export": "default" })} <div class="pt-6 w-full h-[80vh] overflow-y-scroll text-white"> ${renderSlot($$result, $$slots["default"])} </div> </main> </div> </div> ${renderComponent($$result, "Modal", $$Modal, {})} </body></html>`;
}, "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/layouts/AboutMeLayout.astro", void 0);

const html = "<p>Driven by an unyielding passion for the tech industry, I am dedicated to creating solutions that address the needs of underdeveloped systems. As a <strong>Solidity Engineer &#x26; Smart Contract Auditor</strong>, I focus on developing and securing blockchain solutions to ensure the highest standards of quality and reliability.</p>\n<p>I am a fervent advocate for <strong>Open Source</strong> and thrive on collaborating with teams to enhance our global tech culture. I believe in building strong relationships with my clients and collaborators, who often become partners and friends. Helping others achieve their big dreams brings me the greatest joy.</p>\n<!-- ### Selected Projects :star: -->\n<!---->\n<!-- - **[Project Name 1]** -->\n<!---->\n<!--   - Developed and audited a suite of smart contracts for a decentralized finance (DeFi) platform. -->\n<!--   - Technologies used: Solidity, Hardhat, OpenZeppelin. -->\n<!---->\n<!-- - **[Project Name 2]** -->\n<!--   - Conducted a comprehensive security audit for an NFT marketplace. -->\n<!--   - Technologies used: Solidity, Hardhat, MythX. -->\n<h2 id=\"solidity-engineer--smart-contract-auditor\">Solidity Engineer &#x26; Smart-Contract Auditor</h2>\n<ul>\n<li><em>Front-end development</em></li>\n<li><em>Back-end development</em></li>\n<li><em>Server Management</em></li>\n</ul>\n<h2 id=\"my-tech-stack\">My Tech Stack</h2>\n<ul>\n<li>\n<p><strong>Development Technologies:</strong>\n<em>Foundry,</em>\n<em>Hardhat,</em>\n<em>Solidity,</em>\n<em>Rust,</em>\n<em>TypeScript,</em>\n<em>Astro.js,</em>\n<em>Three.js,</em>\n<em>Tailwind</em></p>\n</li>\n<li>\n<p><strong>Infrastructure Technologies:</strong>\n<em>Docker,</em>\n<em>CLI - Linux,</em>\n<em>Google Cloud</em></p>\n</li>\n<li>\n<p><strong>Data Management:</strong>\n<em>PostgreSQL,</em>\n<em>MySQL,</em>\n<em>MongoDB</em></p>\n</li>\n</ul>\n<h2 id=\"expressions-of-gratitude\">Expressions of Gratitude 🎁</h2>\n<ul>\n<li>Tell others about these projects 📢</li>\n<li>Buy me a beer 🍺 or a coffee ☕</li>\n<li>Eternally grateful to those who supported me along the way 🤓</li>\n<li>etc.</li>\n</ul>";

				const frontmatter = {"layout":"../layouts/AboutMeLayout.astro","title":"Solidity Engineer & Smart Contract Auditor","author":"DaniBosna","description":"About Me","slug":"/danibosna"};
				const file = "/home/azazel/Dev/project-danibosna/danibosna-portfolio/src/pages/danibosna.md";
				const url = "/danibosna";
				function rawContent() {
					return "\nDriven by an unyielding passion for the tech industry, I am dedicated to creating solutions that address the needs of underdeveloped systems. As a **Solidity Engineer & Smart Contract Auditor**, I focus on developing and securing blockchain solutions to ensure the highest standards of quality and reliability.\n\nI am a fervent advocate for **Open Source** and thrive on collaborating with teams to enhance our global tech culture. I believe in building strong relationships with my clients and collaborators, who often become partners and friends. Helping others achieve their big dreams brings me the greatest joy.\n\n<!-- ### Selected Projects :star: -->\n<!---->\n<!-- - **[Project Name 1]** -->\n<!---->\n<!--   - Developed and audited a suite of smart contracts for a decentralized finance (DeFi) platform. -->\n<!--   - Technologies used: Solidity, Hardhat, OpenZeppelin. -->\n<!---->\n<!-- - **[Project Name 2]** -->\n<!--   - Conducted a comprehensive security audit for an NFT marketplace. -->\n<!--   - Technologies used: Solidity, Hardhat, MythX. -->\n\n## Solidity Engineer & Smart-Contract Auditor\n\n- _Front-end development_\n- _Back-end development_\n- _Server Management_\n\n## My Tech Stack\n\n- **Development Technologies:**\n  _Foundry,_\n  _Hardhat,_\n  _Solidity,_\n  _Rust,_\n  _TypeScript,_\n  _Astro.js,_\n  _Three.js,_\n  _Tailwind_\n\n- **Infrastructure Technologies:**\n  _Docker,_\n  _CLI - Linux,_\n  _Google Cloud_\n\n- **Data Management:**\n  _PostgreSQL,_\n  _MySQL,_\n  _MongoDB_\n\n## Expressions of Gratitude 🎁\n\n- Tell others about these projects 📢\n- Buy me a beer 🍺 or a coffee ☕\n- Eternally grateful to those who supported me along the way 🤓\n- etc.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"solidity-engineer--smart-contract-auditor","text":"Solidity Engineer & Smart-Contract Auditor"},{"depth":2,"slug":"my-tech-stack","text":"My Tech Stack"},{"depth":2,"slug":"expressions-of-gratitude","text":"Expressions of Gratitude 🎁"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutMeLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
