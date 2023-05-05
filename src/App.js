
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/views/Home';
import Account from './components/views/Account';
import Login from './components/views/LogIn';
import Register from './components/views/Register';



function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/account" element={<Account/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
  
  </Routes>
  </BrowserRouter>


  </>
  );
}

export default App;
