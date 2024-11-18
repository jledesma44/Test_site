/* empty css                           */import 'html-escaper';
import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, h as renderComponent, i as renderHead, j as renderSlot, m as maybeRenderHead } from '../astro_33235299.mjs';
import 'clsx';
/* empty css                                  */import { jsx } from 'react/jsx-runtime';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate", handleForms } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${handleForms ? renderTemplate`<meta name="astro-view-transitions-forms" content="true">` : ""}`;
}, "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/node_modules/astro/components/ViewTransitions.astro", void 0);

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") ?? "light";
      setTheme(savedTheme);
    }
  }, []);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800",
      children: theme === "light" ? /* @__PURE__ */ jsx(Moon, { size: 20 }) : /* @__PURE__ */ jsx(Sun, { size: 20 })
    }
  );
}

function NavScroll() {
  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return null;
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro blog with dark mode"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> <div class="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-900"> ${renderComponent($$result, "NavScroll", NavScroll, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/components/NavScroll", "client:component-export": "default" })} <header class="border-b border-indigo-900 fixed w-full top-0 z-50 transition-colors duration-300 bg-indigo-950"> <div class="container flex items-center justify-between py-4"> <a href="/" class="text-2xl font-bold">DevStack</a> <nav class="flex-1 flex justify-center gap-8"> <a href="/" class="hover:text-gray-600 dark:hover:text-gray-300">Home</a> <a href="/about" class="hover:text-gray-600 dark:hover:text-gray-300">About</a> <a href="/resources" class="hover:text-gray-600 dark:hover:text-gray-300">Resources</a> <a href="/contact" class="hover:text-gray-600 dark:hover:text-gray-300">Contact</a> </nav> <div class="flex items-center gap-4"> <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="hover:text-gray-600 dark:hover:text-gray-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> </a> <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="hover:text-gray-600 dark:hover:text-gray-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> </a> ${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/components/ThemeToggle", "client:component-export": "default" })} </div> </div> </header> <main class="max-w-[1100px] mx-auto pt-32 pb-8 px-4"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="border-t"> <div class="container py-4 text-center text-sm text-gray-600 dark:text-gray-400">
© ${( new Date()).getFullYear()} DevStack. All rights reserved.
</div> </footer> </div> </body></html>`;
}, "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/layouts/Layout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About - DevStack" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold mb-8">About DevStack</h1> <div class="prose dark:prose-invert max-w-none"> <p class="text-lg mb-4">
Welcome to DevStack, your go-to resource for web development insights and tutorials.
</p> <p class="mb-4">
We're passionate about sharing knowledge and helping developers grow in their careers.
			Whether you're just starting out or you're a seasoned professional, DevStack has something
			for everyone.
</p> <p>
Our mission is to make web development more accessible and enjoyable for everyone
			through high-quality tutorials, resources, and community support.
</p> </div> ` })}`;
}, "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/about.astro", void 0);

const $$file = "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, about as a };
