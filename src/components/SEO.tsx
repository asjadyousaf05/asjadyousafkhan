/* eslint-disable react-refresh/only-export-components */
import { useEffect } from 'react';
import { getProjectBySlug, projects } from '../data/projects';

const DEFAULT_SITE_URL = 'https://asjadyousaf.online';

const normalizeBaseUrl = (url: string) => url.replace(/\/+$/, '');
const normalizePathname = (pathname: string) => {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '');
};

interface SEOProps {
  pathname: string;
}

const SEO: React.FC<SEOProps> = ({ pathname }) => {
  useEffect(() => {
    const siteName = 'Asjad Yousaf Khan';
    const projectSlug = pathname.startsWith('/projects/')
      ? decodeURIComponent(pathname.replace('/projects/', ''))
      : '';
    const activeProject = projectSlug ? getProjectBySlug(projectSlug) : undefined;
    const siteTitle = activeProject
      ? `${activeProject.title} Case Study | Asjad Yousaf Khan`
      : pathname === '/projects'
        ? 'Projects | Asjad Yousaf Khan'
        : 'Asjad Yousaf Khan | Junior AI/ML Engineer';
    const siteDescription = activeProject
      ? activeProject.summary
      : pathname === '/projects'
        ? 'Complete portfolio of AI/ML, computer vision, NLP, RAG, generative AI, and web development projects by Asjad Yousaf Khan.'
        : 'Junior AI/ML Engineer and Computer Science graduate building machine learning, computer vision, NLP, RAG, LangChain, and full-stack AI applications.';
    const siteKeywords = [
      'AI Engineer',
      'Junior AI ML Engineer',
      'MERN Developer',
      'MERN Stack Developer',
      'AI Software Developer',
      'Business Systems Developer',
      'Web Development Services',
      'Automation Software',
      'Machine Learning Engineer',
      'Computer Vision',
      'RAG',
      'LangChain',
      'Vector Databases',
      'NLP Solutions',
      'Full Stack Developer',
      'React Developer',
      'Node.js Developer',
      'Express.js',
      'MongoDB',
      'Asjad Yousaf Khan',
    ].join(', ');
    const siteUrl = normalizeBaseUrl(import.meta.env.VITE_SITE_URL?.trim() || DEFAULT_SITE_URL);
    const canonicalUrl = `${siteUrl}${normalizePathname(pathname)}`;
    const ogImage = `${siteUrl}/og-image.jpg`;
    const sitemapUrl = `${siteUrl}/sitemap.xml`;
    const whatsappUrl =
      'https://wa.me/923144704840?text=Hi%20Asjad%2C%20I%20want%20to%20discuss%20a%20project.';
    const featuredProjects = projects.slice(0, 8);

    const upsertMeta = (attribute: 'name' | 'property', value: string, content: string) => {
      const selector = `meta[${attribute}="${value}"]`;
      let meta = document.head.querySelector(selector) as HTMLMetaElement | null;

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, value);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    const upsertLink = (rel: string, href: string) => {
      let link = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }

      link.setAttribute('href', href);
    };

    const upsertAlternateLink = (hreflang: 'en' | 'x-default', href: string) => {
      const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
      let link = document.head.querySelector(selector) as HTMLLinkElement | null;

      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }

      link.setAttribute('href', href);
    };

    document.title = siteTitle;
    document.documentElement.setAttribute('lang', 'en');

    upsertMeta('name', 'description', siteDescription);
    upsertMeta('name', 'keywords', siteKeywords);
    upsertMeta(
      'name',
      'robots',
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    );
    upsertMeta(
      'name',
      'googlebot',
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    );
    upsertMeta('name', 'author', siteName);
    upsertMeta('name', 'application-name', 'Asjad Yousaf Khan Portfolio');
    upsertMeta('name', 'theme-color', '#020617');
    upsertMeta('name', 'format-detection', 'telephone=no');
    upsertMeta('name', 'referrer', 'strict-origin-when-cross-origin');

    upsertMeta('property', 'og:title', siteTitle);
    upsertMeta('property', 'og:description', siteDescription);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:image:alt', 'Asjad Yousaf Khan - Junior AI/ML Engineer');
    upsertMeta('property', 'og:image:type', 'image/jpeg');
    upsertMeta('property', 'og:image:width', '800');
    upsertMeta('property', 'og:image:height', '800');
    upsertMeta('property', 'og:site_name', siteName);
    upsertMeta('property', 'og:locale', 'en_US');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', siteTitle);
    upsertMeta('name', 'twitter:description', siteDescription);
    upsertMeta('name', 'twitter:image', ogImage);
    upsertMeta('name', 'twitter:image:alt', 'Asjad Yousaf Khan - Junior AI/ML Engineer');

    upsertLink('canonical', canonicalUrl);
    upsertLink('sitemap', sitemapUrl);
    upsertAlternateLink('en', canonicalUrl);
    upsertAlternateLink('x-default', canonicalUrl);

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': `${siteUrl}/#person`,
          name: 'Asjad Yousaf Khan',
          url: `${siteUrl}/`,
          image: ogImage,
          jobTitle: 'Junior AI/ML Engineer',
          description:
            'Junior AI/ML Engineer and Computer Science graduate building machine learning, computer vision, NLP, RAG, LangChain, and full-stack AI applications.',
          email: 'mailto:asjadyousafkhan07@gmail.com',
          telephone: '+92-314-4704840',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'PK',
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: 'asjadyousafkhan07@gmail.com',
              telephone: '+92-314-4704840',
              availableLanguage: ['en'],
              areaServed: 'Worldwide',
            },
          ],
          sameAs: [
            'https://github.com/asjadyousaf05',
            'https://www.linkedin.com/in/asjad-yousaf-khan-066680269',
            whatsappUrl,
          ],
          knowsAbout: [
            'AI Software',
            'Machine Learning',
            'Deep Learning',
            'Computer Vision',
            'Natural Language Processing',
            'Retrieval-Augmented Generation',
            'LangChain',
            'Vector Databases',
            'Web Application Development',
          ],
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${siteUrl}/#service`,
          name: 'AI and Web Development Services',
          url: `${siteUrl}/`,
          provider: { '@id': `${siteUrl}/#person` },
          description:
            'Professional AI/ML software and web development services for machine learning systems, RAG chatbots, computer vision apps, and business websites.',
          areaServed: 'Worldwide',
          serviceType: [
            'AI Software Development',
            'Machine Learning Development',
            'Computer Vision Development',
            'RAG Chatbot Development',
            'NLP Application Development',
            'Full-Stack Web Development',
          ],
          knowsLanguage: ['English', 'Urdu'],
        },
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          url: `${siteUrl}/`,
          name: siteTitle,
          description: siteDescription,
          publisher: { '@id': `${siteUrl}/#person` },
          inLanguage: 'en',
        },
        {
          '@type': 'WebPage',
          '@id': `${siteUrl}/#webpage`,
          url: canonicalUrl,
          name: 'Asjad Yousaf Khan Portfolio',
          description: siteDescription,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#person` },
          primaryImageOfPage: ogImage,
        },
        {
          '@type': 'ItemList',
          '@id': `${siteUrl}/#projects`,
          name: 'Featured Web Projects',
          itemListElement: featuredProjects.map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'CreativeWork',
              name: project.title,
              url: `${siteUrl}/projects/${project.slug}`,
              creator: { '@id': `${siteUrl}/#person` },
            },
          })),
        },
      ],
    };

    let script = document.getElementById('seo-json-ld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'seo-json-ld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);
  }, [pathname]);

  return null;
};

export default SEO;
