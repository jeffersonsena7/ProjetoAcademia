import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './MyCarousel.css'
import Ingrid from'../../img/Post do instagram bora treinar para academia amarelo e preto moderno (1).jpg'
import Ingrid2 from '../../img/Post do instagram bora treinar para academia amarelo e preto moderno.jpg'
import Ingrid3 from '../../img/Post do instagram bora treinar para academia amarelo e preto moderno (2).jpg'

const MyCarousel = () => {
  return(
    <div className='container-carousel'>
      <Carousel>
        <Carousel.Item  interval={1000}>
          <img
            className='item-img-carousel'
            src={Ingrid2}
            alt="Image One"
          />
          <Carousel.Caption>
            {/* <h3>Treino de primeira </h3>
            <p>Novidades em treinos e saúde para a sua vida.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className='item-img-carousel'
            src={Ingrid}
            alt="Image Two"
          />
           <Carousel.Caption>
            {/* <h3>Treino de primeira 2</h3>
            <p>Novidades em treinos e saúde para a sua vida 2.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className='item-img-carousel'
            src={Ingrid3}
            alt="Image Two"
          />
           <Carousel.Caption>
            {/* <h3>Treino de primeira 2</h3>
            <p>Novidades em treinos e saúde para a sua vida 2.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default MyCarousel;