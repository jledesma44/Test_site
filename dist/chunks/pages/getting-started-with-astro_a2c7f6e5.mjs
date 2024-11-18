/* empty css                           */import { _ as __astro_tag_component__, F as Fragment, l as createVNode } from '../astro_33235299.mjs';
import { $ as $$Image } from './example-post_1309dc9c.mjs';
import 'html-escaper';
import 'clsx';

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
  "title": "Getting Started with Astro",
  "description": "A beginner's guide to building with Astro",
  "pubDate": "2024-11-10"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-astro",
    "text": "What is Astro?"
  }, {
    "depth": 2,
    "slug": "quick-start",
    "text": "Quick Start"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    ul: "ul",
    li: "li",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Welcome to this guide on getting started with Astro! Astro is a modern static site generator that helps you build faster websites."
    }), "\n", createVNode(_components.h2, {
      id: "what-is-astro",
      children: "What is Astro?"
    }), "\n", createVNode(_components.p, {
      children: "Astro is an all-in-one web framework for building fast, content-focused websites. Some key features include:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Zero JavaScript by default"
      }), "\n", createVNode(_components.li, {
        children: "Component-based architecture"
      }), "\n", createVNode(_components.li, {
        children: "Built-in Markdown support"
      }), "\n", createVNode(_components.li, {
        children: "Excellent developer experience"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "quick-start",
      children: "Quick Start"
    }), "\n", createVNode(_components.p, {
      children: "To create a new Astro project:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " create"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " astro@latest"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "That\u2019s it! Follow the prompts and you\u2019ll have a new Astro project ready to go."
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
const url = "/blog/getting-started-with-astro";
const file = "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/blog/getting-started-with-astro.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/blog/getting-started-with-astro.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
