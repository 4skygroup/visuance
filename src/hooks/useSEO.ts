import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const DEFAULT_IMAGE = "https://visuanceagency.com/images/Visuance%20Logo.webp";

export function useSEO({ title, description, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector<HTMLMetaElement>(selector);
      if (el) el.content = content;
    };

    const setLink = (selector: string, href: string) => {
      const el = document.querySelector<HTMLLinkElement>(selector);
      if (el) el.href = href;
    };

    const image = ogImage ?? DEFAULT_IMAGE;

    setMeta('meta[name="description"]', description);
    setLink('link[rel="canonical"]', canonical);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[property="og:image"]', image);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', image);
  }, [title, description, canonical, ogImage]);
}
