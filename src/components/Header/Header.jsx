import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-navigation">
        <NavLink to="/">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <div className="header__right-block">
          <NavLink to="/training">
            <span className="header__link">Тренировка</span>
          </NavLink>
          <NavLink to="/challenge">
            <span className="header__link">Челлендж</span>
          </NavLink>
          <button className="header-button">Log in</button>
        </div>
      </nav>
    </header>
  );
}
