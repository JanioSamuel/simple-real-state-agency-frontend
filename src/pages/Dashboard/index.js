import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';

import Carousel from 'nuka-carousel';

export default function Dashboard() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function loadProperties() {
      const response = await api.get('/property');
      setProperties(response.data);
    }
    loadProperties();
  }, []);

  return (
    <>
      <div className="background-image">
        <h2>Imobiliária ...</h2>
      </div>
      <div className="searchbox">
        <input type="text" placeholder="Search" />
        <button type="submit">BUSCAR</button>
      </div>
      <section>
        <ul className="content">
          <h1>Imóveis em destaque</h1>
          <Carousel slidesToShow={5} cellSpacing={10}>
            {properties.map(property => (
              <li key={property.id} >
                <h3>{property.title}</h3>
                <img src={property.PropertyImages[0].thumbnail_url} alt="" />
                <span>{property.type}</span>
                <span>R${property.price}</span>
              </li>
            ))}
          </Carousel>
        </ul>
      </section>

      <h1>Imóveis</h1>
      <section className="card">

        <ul className="content content2">
          {properties.map(property => (
            <li key={property.id} >
              <h3>{property.title}</h3>
              <img src={property.PropertyImages[0].thumbnail_url} alt="" />
              <span>{property.type}</span>
              <span>R${property.price}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="background-image footer">
        <span>© 2020 Janio Samuel</span>

      </section>
    </>
  )
}