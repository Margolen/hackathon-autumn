import "./Header.scss";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink to="/" className="header-logo">Логотип</NavLink>
        <NavLink to="/training">Тренировка</NavLink>
        <NavLink to="/challenge">Челлендж</NavLink>
      </nav>
    </header>
  );
}
