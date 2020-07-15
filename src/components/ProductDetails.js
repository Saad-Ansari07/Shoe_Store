import React from 'react'
import { useParams } from 'react-router-dom';
import { shoes } from './Shoes';

export const ProductDetails = () => {
    const { productId } = useParams();
    const shoe = shoes[productId];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }
  const { name, img } = shoe;
    return (
        <div>
              <h2>{name}</h2>
      <img src={img} alt={name} />
        </div>
    );
}
