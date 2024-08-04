import "./Menu.css";

import { Link } from "react-router-dom";

import logoSite from "../../img/logo-tranpartente.png";

const Menu = () => {
  return (
    <>
      <section className="container-menu">
        <ul className="menu">
          <img className="title-h2" src={logoSite} alt="" />
          <div className="title-h2"></div>
          <li>
            <Link className="link" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="link" to="/contatos">
              Contatos
            </Link>
          </li>
          <li>
            <Link className="link" to="/treino">
              Treino
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Menu;
