import { Link } from "react-router";

export default function Header() {
  return (
    <header className="backdrop-blur-2xl bg-light-gray/20 w-full flex items-center justify-between px-12.5 py-5 rounded-full">
      <Link to="/">
        <img
          src="/images/Visuance Logo.png"
          alt="Visuance Logo"
          className="w-52.5 h-17.5"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-12.5 text-base">
          <li>
            <Link to="/the-group">The Group</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
