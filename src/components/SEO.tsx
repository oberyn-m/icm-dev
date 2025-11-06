import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = 'Isaac Cabral Matos - Desenvolvedor Full Stack',
  description = 'Desenvolvedor Full Stack com +10 anos de experiência em React, Node.js, TypeScript e muito mais. Especializado em criar aplicações web modernas e escaláveis.',
  image = '/og-image.png',
  url = 'https://isaacmatos.com',
  type = 'website',
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags: Record<string, string> = {
      description,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'og:type': type,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;

      if (!element) {
        element = document.querySelector(`meta[property="${name}"]`) as HTMLMetaElement;
      }

      if (element) {
        element.content = content;
      } else {
        const meta = document.createElement('meta');
        const attr = name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name';
        meta.setAttribute(attr, name);
        meta.content = content;
        document.head.appendChild(meta);
      }
    });
  }, [title, description, image, url, type]);

  return null;
}
