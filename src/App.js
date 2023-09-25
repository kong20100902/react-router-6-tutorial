import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';

import Error from './pages/Error';
import Sharedlayout from './pages/Sharedlayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from './pages/SharedProductLayout'
function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Sharedlayout />} >
          <Route index element = {<Home />} />
          <Route path = 'about' element = {<About />} />
          <Route path = 'products' element = {<SharedProductLayout />} >
            <Route index element = {<Products />} />
            <Route path = ':productId' element = {<SingleProduct />} />
          </Route>
          <Route path = 'login' element = {<Login setUser={setUser} />} />
          <Route path = 'dashboard' element = {
          <ProtectedRoute user={user}>

            <Dashboard user={user} />
          </ProtectedRoute>
            
            } />

          <Route path = '*' element = {<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
