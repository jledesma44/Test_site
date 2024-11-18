/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_33235299.mjs';
import 'html-escaper';
import { $ as $$Layout } from './about_6fe7feac.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/example-post.mdx": () => import('./example-post_1309dc9c.mjs').then(n => n.e),"./blog/getting-started-with-astro.mdx": () => import('./getting-started-with-astro_a2c7f6e5.mjs')}), () => "./blog/*.mdx");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-8"> <h1 class="text-4xl font-bold mb-8">Latest Posts</h1> <div class="space-y-8"> ${posts.map((post) => renderTemplate`<article class="border-b pb-8"> <h2 class="text-2xl font-bold mb-2"> <a${addAttribute(post.url, "href")} class="hover:text-blue-500"> ${post.frontmatter.title} </a> </h2> <time class="text-gray-500 mb-2 block"> ${new Date(post.frontmatter.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> <p class="text-gray-700 dark:text-gray-300"> ${post.frontmatter.description} </p> </article>`)} </div> </main> ` })}`;
}, "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/index.astro", void 0);

const $$file = "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
