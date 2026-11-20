/**
 * Single source of truth for values that change between environments or
 * before launch. Nothing else in the app should hard-code these.
 */

/** TestFlight link for the "Try Retouch" button. */
export const APP_LINK = "https://testflight.apple.com/join/a6sEP244";

/**
 * Public support address. Shown on /support and in the footer, and referenced
 * by the privacy policy. If it loses its "@", the support and privacy pages
 * show a notice instead of a broken mailto: link.
 */
export const SUPPORT_EMAIL = "mirrorretouch@gmail.com";

export const OWNER_NAME = "Heptaseas";

/**
 * Absolute origin, used for canonical links and Open Graph URLs.
 *
 * TODO(owner): no domain has been registered or confirmed. The same token
 * appears in index.html. Grep for DOMAIN_NOT_SET before deploying.
 */
export const SITE_URL = "https://retouch-mirror.vercel.app/";

/** Shown as "Last updated" on the privacy page. */
export const PRIVACY_LAST_UPDATED = "20 November 2026";

/** True when the support address still holds its placeholder value. */
export const hasSupportEmail = SUPPORT_EMAIL.includes("@");

/** True when a real domain has been set. */
export const hasSiteUrl = !SITE_URL.includes("DOMAIN_NOT_SET");
