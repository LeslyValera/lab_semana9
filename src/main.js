import React from 'react';
import { Carousel } from 'react-bootstrap';
import Makeup from './data/makeup.json'
import { useNavigate } from "react-router-dom";


const feather = require('feather-icons');

setTimeout(() => {
  feather.replace();
}, 1000);


const Main = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
      navigate("/detalle/" + slug);
  }

  return <main>
      <Carousel>
          {
              Makeup.map(it => {
                return (<Carousel.Item interval={1000} onClick={(e) => {
                  e.preventDefault(); handleClick(it.slug)
              }}>
                  <img className='w-100 dark-image weight:100px' src={it.picture}></img>
                  <Carousel.Caption>
                      <h3>{it.name}</h3>
                      <p>{it.description}</p>
                      <button className="btn btn-primary" >Ver detalle</button>
                  </Carousel.Caption>
              </Carousel.Item>);
                    
              })
          }
      </Carousel>
  </main >;
}

    {/*<div className="mt-4">
      <h2>Descubre nuestras últimas tendencias y productos para realzar tu belleza natural.</h2>
        
      <p>En nuestro sitio, te sumergirás en el maravilloso mundo del maquillaje, donde la creatividad se une con la belleza para realzar tus rasgos naturales y expresar tu personalidad única.</p>
      <p>Descubre nuestra amplia gama de productos de maquillaje de alta calidad, diseñados para satisfacer las necesidades de cualquier ocasión. Tenemos todo lo que necesitas para lograr el look perfecto.</p>
</div>*/}



export default Main;