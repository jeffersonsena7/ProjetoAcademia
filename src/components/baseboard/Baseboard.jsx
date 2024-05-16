import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

import './Baseboard.css'

import logoSite from '../../img/logo-tranpartente.png'

const Baseboard = () => {
  return (
    <div className='container-baseboard1'>
      <footer className='container-baseboard'>
        <section>
          <img  className='logo-site'src={logoSite} alt="Logo do site" />
          <ul className='baseboard-lista'>
            <a href="https://www.facebook.com/Jefferson.Joseane/" target='_blanc'>
              <li>
                <FaFacebook className="icon icon-hover"/>
              </li>
            </a>
            <a href="https://www.instagram.com/jeffersonjoseane/" target='_blanc'>
              <li>
                <FaInstagram className="icon icon-hover"/>
              </li>
            </a>
            <a href="https://contate.me/jeffersonsena" target='_blanc'>
              <li>
                <FaWhatsapp className="icon icon-hover"/>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/jefferson-sena-0b347a232/" target='_blanc'>
              <li>
                <FaLinkedin className="icon icon-hover"/>
              </li>
            </a>
            <a href="https://github.com/jeffersonsena7" target='_blanc'>
              <li>
                <FaGithub className="icon icon-hover"/>
              </li>
            </a>
          </ul>
          <p>
            <a
              className='baseboard-link'
              href="https://www.instagram.com/jeffersonjoseane/"
              target="_blank"
              rel="noreferrer"
            >
              &copy;Jefferson Sena
            </a>
          </p>
        </section>
      </footer>
    </div>
  );
};

export default Baseboard;
