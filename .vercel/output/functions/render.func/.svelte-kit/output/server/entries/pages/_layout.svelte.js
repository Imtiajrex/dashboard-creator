import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/index.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<footer class="${"text-gray-600 body-font bg-transparent"}"><div class="${"container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"}"><a class="${"flex title-font font-medium items-center md:justify-start justify-center text-gray-900"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"}" viewBox="${"0 0 24 24"}"><path d="${"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"}"></path></svg>
			<span class="${"ml-3 text-xl"}">Tailblocks</span></a>
		<p class="${"text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"}">© 2020 Tailblocks —
			<a href="${"https://twitter.com/knyttneve"}" class="${"text-gray-600 ml-1"}" rel="${"noopener noreferrer"}" target="${"_blank"}">@knyttneve</a></p>
		<span class="${"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"}"><a class="${"text-gray-500"}"><svg fill="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><path d="${"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"}"></path></svg></a>
			<a class="${"ml-3 text-gray-500"}"><svg fill="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><path d="${"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"}"></path></svg></a>
			<a class="${"ml-3 text-gray-500"}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><rect width="${"20"}" height="${"20"}" x="${"2"}" y="${"2"}" rx="${"5"}" ry="${"5"}"></rect><path d="${"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"}"></path></svg></a>
			<a class="${"ml-3 text-gray-500"}"><svg fill="${"currentColor"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"0"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><path stroke="${"none"}" d="${"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}"></path><circle cx="${"4"}" cy="${"4"}" r="${"2"}" stroke="${"none"}"></circle></svg></a></span></div></footer>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];
  return `


<div class="${"navbar bg-transparent fixed z-50"}"><div class="${"navbar-start"}"><div class="${"dropdown"}"><label tabindex="${"0"}" class="${"btn btn-ghost lg:hidden"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h8m-8 6h16"}"></path></svg></label>
			<ul tabindex="${"0"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}">${each(menuItems, (item) => {
    return `<li><a${add_attribute("href", item.href, 0)}>${escape(item.label)}</a>
					</li>`;
  })}</ul></div>
		<a href="${"/"}" class="${"btn btn-ghost normal-case text-xl"}">daisyUI</a></div>
	<div class="${"navbar-center hidden lg:flex"}"><ul class="${"menu menu-horizontal px-1"}">${each(menuItems, (item) => {
    return `<li><a${add_attribute("href", item.href, 0)}>${escape(item.label)}</a>
				</li>`;
  })}</ul></div>
	<div class="${"navbar-end"}"><a href="${"/login"}" class="${"btn btn-ghost mx-3 "}">Login</a>
		<a href="${"/register"}" class="${"btn btn-light btn-outline"}">Get started</a></div></div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bg{background-size:5px 5px;background-image:radial-gradient(hsla(var(--bc) / 0.1) 0.5px, hsla(var(--b2) / 1) 0.5px)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<div class="${"bg"}"><div class="${"min-h-screen"}">${slots.default ? slots.default({}) : ``}</div>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
