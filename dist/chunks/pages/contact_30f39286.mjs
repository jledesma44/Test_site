/* empty css                           */import { f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_33235299.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './about_6fe7feac.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact - DevStack" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]"> <h1 class="text-4xl font-bold mb-8">Contact Us</h1> <div class="max-w-2xl w-full px-4"> <p class="text-lg mb-8">
Have questions or suggestions? We'd love to hear from you. Send us a message
			and we'll respond as soon as possible.
</p> <form class="space-y-6"> <div> <label for="name" class="block text-sm font-medium mb-2">Name</label> <input type="text" id="name" name="name" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800" required> </div> <div> <label for="email" class="block text-sm font-medium mb-2">Email</label> <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800" required> </div> <div> <label for="message" class="block text-sm font-medium mb-2">Message</label> <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800" required></textarea> </div> <button type="submit" class="inline-block bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
Send Message
</button> </form> </div> </div>` })}`;
}, "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/contact.astro", void 0);

const $$file = "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
