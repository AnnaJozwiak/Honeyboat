import React from 'react';
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import Main from "./components/Main";
import AdminPanel from "./admin/AdminPanel";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/admin' element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
