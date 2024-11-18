export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/example-post_1309dc9c.mjs').then(n => n.e);

export { page };
