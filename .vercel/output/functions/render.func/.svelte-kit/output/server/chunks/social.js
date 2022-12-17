import { c as create_ssr_component, b as add_attribute, d as escape } from "./index.js";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "text" } = $$props;
  let { required = false } = $$props;
  let { label = "Input" } = $$props;
  let { placeholder = "Enter " + label } = $$props;
  const id = label.toLowerCase().replace(" ", "-");
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `<label${add_attribute("for", id, 0)} class="${"label label-text text-slate-200"}">${escape(label)}</label>
<input${add_attribute("type", type, 0)} ${required ? "required" : ""}${add_attribute("id", id, 0)}${add_attribute("placeholder", placeholder, 0)} class="${"input w-full input-bordered "}">`;
});
const Brand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img class="${"mx-auto h-12 w-auto"}" src="${"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"}" alt="${"Your Company"}">
<h2 class="${"mt-6 text-center text-3xl font-bold tracking-tight text-white"}">Sign in to your account
</h2>`;
});
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="${"btn btn-outline w-full my-2"}"><img src="${"/brand/google.png"}" alt="${"Google Logo"}" class="${"w-6 mr-3"}">
	Sign in with Google
</button>
<button class="${"btn btn-outline w-full my-2"}"><img src="${"/brand/github.png"}" alt="${"Google Logo"}" class="${"w-6 mr-3"}">
	Sign in with Github
</button>`;
});
export {
  Brand as B,
  Input as I,
  Social as S
};
