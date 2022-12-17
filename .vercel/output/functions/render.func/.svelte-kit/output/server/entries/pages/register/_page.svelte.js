import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { B as Brand, I as Input, S as Social } from "../../../chunks/social.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-10he5fx_START -->${$$result.title = `<title>Sign up for Dashgen</title>`, ""}<!-- HEAD_svelte-10he5fx_END -->`, ""}
<div class="${"flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8"}"><div class="${"w-full max-w-lg p-6 md:p-10 space-y-8 bg-base-300 "}">${validate_component(Brand, "Brand").$$render($$result, {}, {}, {})}
		<form class="${"mt-8 space-y-6"}" action="${"#"}" method="${"POST"}"><div>${validate_component(Input, "Input").$$render(
    $$result,
    {
      label: "Name",
      required: true,
      type: "text"
    },
    {},
    {}
  )}
				${validate_component(Input, "Input").$$render(
    $$result,
    {
      label: "Email",
      required: true,
      type: "email"
    },
    {},
    {}
  )}
				${validate_component(Input, "Input").$$render(
    $$result,
    {
      label: "Password",
      required: true,
      type: "password"
    },
    {},
    {}
  )}</div>

			<button type="${"submit"}" class="${"btn btn-primary w-full relative"}">Sign up</button>

			<div class="${"divider"}">OR</div>
			<div>${validate_component(Social, "Social").$$render($$result, {}, {}, {})}</div></form></div></div>`;
});
export {
  Page as default
};
