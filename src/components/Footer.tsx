import { Link } from "react-router-dom";
import { OWNER_NAME, SUPPORT_EMAIL, hasSupportEmail } from "../config";

/* Resolved once at module load rather than on every render, so the component
   stays pure. The copyright year does not need to change mid-session. */
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <nav className="footer-links" aria-label="Footer">
          <Link to="/support">Support</Link>
          <Link to="/privacy">Privacy</Link>
          {hasSupportEmail && <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>}
        </nav>
        <p>
          &copy; {year} {OWNER_NAME}. Re-touch is made for iPhone.
        </p>
      </div>
    </footer>
  );
}
