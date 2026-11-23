import { APP_LINK } from "../config";

/**
 * The primary call to action. Until APP_LINK points at TestFlight or the App
 * Store the button says "Coming soon" and is disabled, so the page never ships
 * a link that goes nowhere.
 */
export default function CtaButton({ label }: { label: string }) {
  if (!APP_LINK) {
    return (
      <button type="button" className="btn btn-disabled" disabled>
        Coming soon
      </button>
    );
  }

  return (
    <a className="btn btn-primary" href={APP_LINK}>
      {label}
    </a>
  );
}
