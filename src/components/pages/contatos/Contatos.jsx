import Menu from './../../menu/Menu';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import './Contatos.css'
import { MyEmail } from '../../email/MyEmail';
import Baseboard from './../../baseboard/Baseboard';


const Contatos = () => {
  return ( 
    
    <>
      <Menu/>
      <div>
        <section className='container-contatos'>
          <ul>
            <div className='icon-contatos'>
              <a href="https://www.facebook.com/Jefferson.Joseane/" target='_blanc'>
                <li>
                  <FaFacebook/>
                </li>
              </a>
              <p>jefferson.sena</p>
            </div>
          </ul>
          <ul>
            <div className='icon-contatos'>
              <a href="https://www.instagram.com/jeffersonjoseane/" target='_blanc'>
                <li>
                  <FaInstagram/>
                </li>
              </a>
              <p>jefferson.sena</p>
            </div>
          </ul>
          <ul>
            <div className='icon-contatos'>
              <a href="https://contate.me/jeffersonsena" target='_blanc'>
                <li>
                  <FaWhatsapp/>
                </li>
              </a>
              <p>(83)98803-8630</p>
            </div>
          </ul>
        </section>
      </div>
      <div className='minha-pagina'>
        <MyEmail/>
      </div>
      <div className='baseboard-contatos'>
        <Baseboard/>
      </div>
      
      
    </> );
}
 
export default Contatos;