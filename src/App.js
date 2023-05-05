import React, {useState} from 'react';
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom';

import Main from "./components/Main";
import AdminPulpit from "./admin/AdminPulpit";
import Update from "./admin/Update";
import Login from "./admin/Login";
import ShopPulpit from "./components/shop/ShopPulpit";
import CartProvider from "./components/shop/CartContext";

function App() {

  return (
      <CartProvider>
      <div>
      <BrowserRouter basename="/index.html">
        <Routes>
          <Route exact path='/' element={<Main />}/>
          <Route path='/admin' element={<AdminPulpit/>}/>
          <Route path='/admin/:id' element={<Update/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/shop' element={<ShopPulpit/>}/>
        </Routes>
      </BrowserRouter>
      </div>
      </CartProvider>
  )
}

export default App;
