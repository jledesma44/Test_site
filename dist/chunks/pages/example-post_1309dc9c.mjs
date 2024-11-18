import '@astrojs/internal-helpers/path';
/* empty css                           */import { e as createAstro, f as createComponent, A as AstroError, k as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, _ as __astro_tag_component__, F as Fragment, l as createVNode } from '../astro_33235299.mjs';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_48747484.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro$2 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/node_modules/astro/components/Image.astro", void 0);

const $$Astro$1 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const outDir = new URL("file:///Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/dist/");
					new URL("_astro", outDir);
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$BlogCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-100 dark:bg-gray-800 py-16 mt-16"> <div class="max-w-[750px] mx-auto px-4 text-center"> <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2> <p class="text-gray-600 dark:text-gray-400 mb-8">
Stay updated with our latest posts and resources.
</p> <form class="flex gap-4 max-w-md mx-auto"> <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required> <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
Subscribe
</button> </form> </div> </section>`;
}, "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/components/BlogCTA.astro", void 0);

const $$Astro = createAstro();
const $$BlogPagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPagination;
  const { prevPost, nextPost } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-between items-center mt-16 py-8 border-t border-gray-200 dark:border-gray-700"> ${prevPost ? renderTemplate`<a${addAttribute(prevPost.url, "href")} class="flex items-center text-blue-500 hover:text-blue-600 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span>${prevPost.title}</span> </a>` : renderTemplate`<div></div>`} ${nextPost ? renderTemplate`<a${addAttribute(nextPost.url, "href")} class="flex items-center text-blue-500 hover:text-blue-600 transition-colors"> <span>${nextPost.title}</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </a>` : renderTemplate`<div></div>`} </nav>`;
}, "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/components/BlogPagination.astro", void 0);

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('../BlogPost_28360502.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "Example Blog Post",
  "description": "This is an example blog post using the new template",
  "pubDate": "2024-11-07T00:00:00.000Z",
  "featuredImage": {
    "url": "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    "alt": "Code on a computer screen"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "section-example",
    "text": "Section Example"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "This is an example blog post that demonstrates the new blog template features."
    }), "\n", createVNode(_components.h2, {
      id: "section-example",
      children: "Section Example"
    }), "\n", createVNode(_components.p, {
      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }), "\n", createVNode($$BlogPagination, {
      slot: "pagination",
      prevPost: {
        url: "/blog/previous-post",
        title: "Previous Post Title"
      },
      nextPost: {
        url: "/blog/next-post",
        title: "Next Post Title"
      }
    }), "\n", createVNode($$BlogCTA, {
      slot: "cta"
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/blog/example-post";
const file = "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/blog/example-post.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/blog/example-post.mdx";

const examplePost = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, examplePost as e };
