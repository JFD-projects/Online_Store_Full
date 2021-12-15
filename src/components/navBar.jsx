import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">
            Главная
          </Link>
        </li>
      </ul>
      <h4 className="m-2">Online store </h4>
      <div className="d-flex flex-row">
        <Link className="nav-link active" aria-current="page" to="/admin">
          Адм.
        </Link>
        <Link className="nav-link" to="/login">
          Вход/Регистрация
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
