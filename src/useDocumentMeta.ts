import { useEffect } from "react";
import { SITE_URL, hasSiteUrl } from "./config";

/**
 * Sets the document title, meta description and canonical link for a route.
 *
 * Open Graph tags are not set here. Social scrapers read the HTML they are
 * served, and this is a client-rendered single page app, so the Open Graph
 * tags live statically in index.html and describe the landing page.
 */
export default function useDocumentMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  useEffect(() => {
    document.title = title;

    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (meta) meta.content = description;

    // No canonical link at all is better than one pointing at a domain nobody
    // has registered, so this stays off until SITE_URL is real.
    if (!hasSiteUrl) return;

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${path}`;
  }, [title, description, path]);
}
