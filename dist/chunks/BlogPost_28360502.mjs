import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, g as addAttribute, j as renderSlot } from './astro_33235299.mjs';
import 'html-escaper';
import { $ as $$Layout } from './pages/about_6fe7feac.mjs';

const $$Astro = createAstro();
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate } = Astro2.props;
  const date = new Date(pubDate);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-3xl mx-auto px-4 py-8"> <header class="mb-8"> <h1 class="text-4xl font-bold mb-2">${title}</h1> <time${addAttribute(date.toISOString(), "datetime")} class="text-gray-500"> ${date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> </header> <div class="prose dark:prose-invert max-w-none"> ${renderSlot($$result2, $$slots["default"])} </div> </article> ` })}`;
}, "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as default };
