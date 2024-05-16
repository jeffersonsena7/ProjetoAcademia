import './Icone.css'
import React from 'react';

import icone1  from "../../img/Post instagram academia treino foco dedicação motivação preto amarelo branco (1).png";
import icone2 from '../../img/logo-tranpartente-grande.png'
import icone3 from '../../img/vecteezy_workout-vector-icon-design_16630126.jpg'

const Icone = () => {
  return ( 
    <>
      <div className= 'container-icones'>
        <section>
          <img className='icon-img' src={icone1} alt="" />
        </section>
        <section>
          <img className='icon-img2' src={icone2} alt="" />
        </section>
        <section>
          <img className='icon-img3' src={icone3} alt="" />
        </section>
      </div>
    </>
   );
}
 
export default Icone;