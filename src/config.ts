/**
 * Single source of truth for values that change between environments or
 * before launch. Nothing else in the app should hard-code these.
 */

/** TestFlight link for the "Try Re-touch" button. */
export const APP_LINK = "https://apps.apple.com/id/app/re-touch-the-better-mirror/id6827142921";

/**
 * Public support address. Shown on /support and in the footer, and referenced
 * by the privacy policy. If it loses its "@", the support and privacy pages
 * show a notice instead of a broken mailto: link.
 */
export const SUPPORT_EMAIL = "mirrorretouch@gmail.com";

export const OWNER_NAME = "Heptaseas";

/**
 * Absolute origin, used for canonical links and Open Graph URLs. No trailing
 * slash: useDocumentMeta appends a path that already begins with one, and a
 * slash here produced a doubled canonical URL on the home page.
 *
 * The same origin is hardcoded in index.html, which social scrapers read
 * directly rather than running the app. Change the two together.
 */
export const SITE_URL = "https://retouch-mirror.vercel.app";

/** Shown as "Last updated" on the privacy page. */
export const PRIVACY_LAST_UPDATED = "20 November 2026";

/** True when the support address still holds its placeholder value. */
export const hasSupportEmail = SUPPORT_EMAIL.includes("@");

/** True when a real domain has been set. */
export const hasSiteUrl = !SITE_URL.includes("DOMAIN_NOT_SET");
