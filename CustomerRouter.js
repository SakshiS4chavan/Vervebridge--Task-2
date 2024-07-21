import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './HomePage';
import Cart from './Cart';
import Item from './Item';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
