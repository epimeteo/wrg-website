// Public routes for sitemap.xml (excludes /thank-you/ and 404).
import { routes, offices } from './site';
import { services, serviceHref } from './services';
import { projects, projectHref } from './projects';
import { getInsights } from './insights';

export const getPublicRoutes = async (): Promise<string[]> => [
  routes.home,
  routes.about,
  routes.reviews,
  routes.careers,
  routes.services,
  ...services.map((s) => serviceHref(s.slug)),
  routes.locations,
  ...offices.map((o) => o.href),
  routes.projects,
  ...projects.map((p) => projectHref(p.slug)),
  routes.blog,
  ...(await getInsights()).map((i) => i.href),
  routes.faqs,
  routes.contact,
  routes.privacy,
  routes.terms,
];
