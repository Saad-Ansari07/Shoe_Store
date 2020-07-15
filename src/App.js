import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { NotFound } from './components/NotFound';
import { ProductIndex } from "./components/ProductIndex";
import { ProductDetails } from './components/ProductDetails'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="Products" element={<Products/>}>
        <Route path="/" element={<ProductIndex />} />
          <Route path=":productId" element={<ProductDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

