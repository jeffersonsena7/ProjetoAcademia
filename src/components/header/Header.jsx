import { useState, useEffect } from "react";

import { FaFacebook, FaInstagram, FaMobile, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

import "./Header.css";
import Menu from '../menu/Menu';

import logo1 from '../../img/logo-tranpartente.png'


const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const scrollThreshold = 30; // Defina o ponto de rolagem para esconder o cabeçalho

      if (scrolled > scrollThreshold) {
        setShowHeader(false);
        setShowMenu(true);
      } 
      else {
        setShowHeader(true);
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showHeader && (
        <section className="container-header">
          <ul className="container-header-menu">
            <img className='menu-img' src={logo1} alt="Logo" />
            <li>
              <FaMobile />
              (83) 98803-8630
            </li>
              <li className="container-header-menu2">                
                  <a className='header-menu-div1' href="https://www.facebook.com/Jefferson.Joseane/" target='_blanc'>
                      <FaFacebook className="icon icon-hover"/>
                  </a>

                  <a className='header-menu-div2' href="https://www.instagram.com/jeffersonjoseane/" target='_blanc'>
                      <FaInstagram className="icon icon-hover"/>
                  </a>
                  <a className='header-menu-div3' href="https://contate.me/jeffersonsena" target='_blanc'>
                      <FaWhatsapp className="icon icon-hover"/>
                  </a>

                  <a className='header-menu-div3' href="https://www.linkedin.com/in/jefferson-sena-0b347a232/" target='_blanc'>
                      <FaLinkedin className="icon icon-hover"/>
                  </a>

                  <a className='header-menu-div3' href="https://github.com/jeffersonsena7" target='_blanc'>
                      <FaGithub className="icon icon-hover"/>
                  </a>
              </li>
          </ul>
        </section>
      )}
        <section>{showMenu && (<Menu showMenu={showMenu} />)}</section>
    </div>
  );
};

export default Header;