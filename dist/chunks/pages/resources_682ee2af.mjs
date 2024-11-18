/* empty css                           */import { f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_33235299.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './about_6fe7feac.mjs';

const $$Resources = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resources - DevStack" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold mb-8">Development Resources</h1> <div class="grid gap-6"> <section class="border rounded-lg p-6"> <h2 class="text-2xl font-semibold mb-4">Frontend Development</h2> <ul class="list-disc list-inside space-y-2"> <li>React.js Documentation</li> <li>Vue.js Tutorials</li> <li>CSS Tricks</li> <li>JavaScript Best Practices</li> </ul> </section> <section class="border rounded-lg p-6"> <h2 class="text-2xl font-semibold mb-4">Backend Development</h2> <ul class="list-disc list-inside space-y-2"> <li>Node.js Fundamentals</li> <li>Database Design</li> <li>API Development</li> <li>Security Best Practices</li> </ul> </section> </div> ` })}`;
}, "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/resources.astro", void 0);

const $$file = "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/resources.astro";
const $$url = "/resources";

export { $$Resources as default, $$file as file, $$url as url };
