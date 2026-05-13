import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  buildDocumentTitle,
  getSeoForPath,
  getSiteOrigin,
  normalizePathname,
  SEO_DEFAULT,
  SEO_SITE_NAME,
} from '../content/seo';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = attr === 'name' ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function upsertJsonLd(id: string, json: Record<string, unknown>) {
  const selector = `script[type="application/ld+json"][data-seo="${id}"]`;
  let el = document.head.querySelector(selector) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.dataset.seo = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(json);
}

/** Atualiza título, canonical, Open Graph, Twitter e JSON-LD conforme a rota. */
export function SeoHead() {
  const { pathname } = useLocation();
  const path = normalizePathname(pathname);

  useEffect(() => {
    const page = getSeoForPath(path);
    const title = buildDocumentTitle(page.title);
    const origin = getSiteOrigin();
    const canonicalPath = path === '/' ? '/' : path;
    const canonical = origin ? `${origin}${canonicalPath === '/' ? '/' : canonicalPath}` : '';
    const ogImage = origin ? `${origin}${SEO_DEFAULT.ogImagePath}` : '';

    document.title = title;

    upsertMeta('name', 'description', page.description);
    upsertMeta('name', 'keywords', SEO_DEFAULT.keywords);
    upsertMeta('name', 'robots', 'index, follow');
    upsertMeta(
      'name',
      'googlebot',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    );

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SEO_SITE_NAME);
    upsertMeta('property', 'og:locale', 'pt_BR');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', page.description);
    if (canonical) upsertMeta('property', 'og:url', canonical);
    if (ogImage) {
      upsertMeta('property', 'og:image', ogImage);
      upsertMeta('property', 'og:image:alt', `${SEO_SITE_NAME} — MedSênior Curitiba`);
    }

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', page.description);
    if (ogImage) upsertMeta('name', 'twitter:image', ogImage);

    if (canonical) upsertLink('canonical', canonical);

    if (origin) {
      const logoUrl = `${origin}/brand/brascare-logotipo-horizontal.webp`;
      upsertJsonLd('graph', {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'InsuranceAgency',
            '@id': `${origin}/#organization`,
            name: SEO_SITE_NAME,
            url: origin,
            logo: logoUrl,
            description: SEO_DEFAULT.description,
            areaServed: { '@type': 'AdministrativeArea', name: 'Curitiba' },
          },
          {
            '@type': 'WebSite',
            '@id': `${origin}/#website`,
            name: `${SEO_SITE_NAME} — MedSênior Curitiba`,
            url: origin,
            description: SEO_DEFAULT.description,
            publisher: { '@id': `${origin}/#organization` },
          },
        ],
      });
    }
  }, [path]);

  return null;
}
