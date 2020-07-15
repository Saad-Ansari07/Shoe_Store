import React from 'react';
import { Link } from 'react-router-dom';
import  styles from './Header.module.css'


export const Header = () => {
    return (
        <nav className={styles}>
            <Link to="home">Home</Link> {"  "}
            <Link to="products">Products</Link>
        </nav>
    )
}

