import React, {useState} from 'react';
import { Route, Routes, Link, BrowserRouter,HashRouter} from 'react-router-dom';

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
      <HashRouter>
          {/*<HashRouter basename='/Honeyboat'>*/}
      {/*<BrowserRouter basename='/React'>*/}
        <Routes>
          <Route exact path='/' element={<Main />}/>
          <Route path='/admin' element={<AdminPulpit/>}/>
          <Route path='/admin/:id' element={<Update/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/shop' element={<ShopPulpit/>}/>
        </Routes>
      </HashRouter>
      </div>
      </CartProvider>
  )
}

export default App;
