import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_33235299.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.77775e67.js"}],"styles":[{"type":"external","src":"/_astro/about.40206257.css"},{"type":"external","src":"/_astro/example-post.fca592ad.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.77775e67.js"}],"styles":[{"type":"external","src":"/_astro/about.40206257.css"},{"type":"external","src":"/_astro/example-post.fca592ad.css"}],"routeData":{"route":"/resources","type":"page","pattern":"^\\/resources\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources.astro","pathname":"/resources","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.77775e67.js"}],"styles":[{"type":"external","src":"/_astro/about.40206257.css"},{"type":"external","src":"/_astro/example-post.fca592ad.css"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.77775e67.js"}],"styles":[{"type":"external","src":"/_astro/about.40206257.css"},{"type":"external","src":"/_astro/example-post.fca592ad.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.77775e67.js"}],"styles":[{"type":"external","src":"/_astro/about.40206257.css"},{"type":"external","src":"/_astro/example-post.fca592ad.css"}],"routeData":{"route":"/blog/getting-started-with-astro","type":"page","pattern":"^\\/blog\\/getting-started-with-astro\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"getting-started-with-astro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/getting-started-with-astro.mdx","pathname":"/blog/getting-started-with-astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.77775e67.js"}],"styles":[{"type":"external","src":"/_astro/about.40206257.css"},{"type":"external","src":"/_astro/example-post.fca592ad.css"}],"routeData":{"route":"/blog/example-post","type":"page","pattern":"^\\/blog\\/example-post\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"example-post","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/example-post.mdx","pathname":"/blog/example-post","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/blog/example-post.mdx",{"propagation":"none","containsHead":true}],["/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/blog/getting-started-with-astro.mdx",{"propagation":"none","containsHead":true}],["/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/pages/resources.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/resources@_@astro":"pages/resources.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/getting-started-with-astro@_@mdx":"pages/blog/getting-started-with-astro.astro.mjs","\u0000@astro-page:src/pages/blog/example-post@_@mdx":"pages/blog/example-post.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/contact.astro":"chunks/pages/contact_30f39286.mjs","/src/pages/blog/getting-started-with-astro.mdx":"chunks/pages/getting-started-with-astro_a2c7f6e5.mjs","/src/pages/index.astro":"chunks/pages/index_4694d155.mjs","/src/pages/resources.astro":"chunks/pages/resources_682ee2af.mjs","\u0000@astrojs-manifest":"manifest_4d967701.mjs","/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_c120ba3e.mjs","/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/layouts/BlogPost.astro":"chunks/BlogPost_28360502.mjs","/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/components/ThemeToggle":"_astro/ThemeToggle.7a851243.js","/Users/jaimeledesma/Development/1.WebDev/10.Sites/5.Astro_sites/Test_Blog/src/components/NavScroll":"_astro/NavScroll.d117c378.js","/astro/hoisted.js?q=0":"_astro/hoisted.77775e67.js","@astrojs/react/client.js":"_astro/client.25911f27.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
