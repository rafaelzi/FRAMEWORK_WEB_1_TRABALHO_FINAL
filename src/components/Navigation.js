/*Barra de navegação*/
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemon">Lista</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;