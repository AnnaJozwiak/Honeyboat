import React from 'react';
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import Main from "./components/Main";
import AdminPulpit from "./admin/AdminPulpit";
import AppPanel from "./admin/AppPanel";
import Update from "./admin/Update";
import Login from "./admin/Login";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/admin' element={<AdminPulpit/>}/>
          <Route path='/admin/:id' element={<Update/>} />
            <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
