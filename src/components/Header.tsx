import { Link, NavLink } from "react-router-dom";
import appIcon from "../assets/app-icon.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="brand">
          <img className="brand-mark" src={appIcon} alt="" width={32} height={32} />
          Re-touch
        </Link>
        <nav className="site-nav" aria-label="Main">
          <NavLink to="/support">Support</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
        </nav>
      </div>
    </header>
  );
}
