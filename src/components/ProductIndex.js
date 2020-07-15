import React from 'react'
import { shoes } from "./Shoes";
import { Link } from 'react-router-dom';
import styles from './ProductIndex.module.css';

export const ProductIndex = () => {
    return (
        <div>
             <ul className={ styles }>
      {Object.entries(shoes).map(([productId, { name, img }]) => (
        <li key={productId}>
          <Link to={`/Products/${productId}`}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
        </div>
    )
}
