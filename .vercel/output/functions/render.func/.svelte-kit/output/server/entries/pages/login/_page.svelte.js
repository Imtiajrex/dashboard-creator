import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { B as Brand, I as Input, S as Social } from "../../../chunks/social.js";
const Forgot_password = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"text-sm"}"><a href="${"#"}" class="${"font-medium text-indigo-600 hover:text-indigo-500"}">Forgot your password?</a></div>`;
});
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"form-control"}"><label class="${"label cursor-pointer"}"><span class="${"label-text"}">Remember me</span>
		<input type="${"checkbox"}" class="${"checkbox ml-2"}"></label></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1cz7sqn_START -->${$$result.title = `<title>Sign in to Dashgen</title>`, ""}<!-- HEAD_svelte-1cz7sqn_END -->`, ""}
<div class="${"flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8"}"><div class="${"w-full max-w-lg p-6 md:p-10 space-y-8 bg-base-300 "}">${validate_component(Brand, "Brand").$$render($$result, {}, {}, {})}
		<form class="${"mt-8 space-y-6"}" action="${"#"}" method="${"POST"}"><div>${validate_component(Input, "Input").$$render(
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

			<div class="${"flex items-center justify-between"}">${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}
				${validate_component(Forgot_password, "ForgotPassword").$$render($$result, {}, {}, {})}</div>

			<button type="${"submit"}" class="${"btn btn-primary w-full relative"}">Sign in </button>

			<div class="${"divider"}">OR</div>
			<div>${validate_component(Social, "Social").$$render($$result, {}, {}, {})}</div></form></div></div>`;
});
export {
  Page as default
};
