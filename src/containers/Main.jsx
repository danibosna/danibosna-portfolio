import React from 'react';
import useGetSomethings from '@hooks/useGetSomethings.js';
import ProductItem from '@templates/ProductItem.jsx';
const API = process.env.API;

const Main = () => {
  const products = useGetSomethings(API);

  return (
    <section className="main">
      <div id="resultado" className="resultado">
        {products.map(product => (
          <ProductItem
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Main;