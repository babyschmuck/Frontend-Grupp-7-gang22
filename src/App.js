
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/views/Home';
import Account from './components/views/Account';
import Login from './components/views/LogIn';
import Register from './components/views/Register';
import Welcome from './components/views/Welcome';



function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/account" element={<Account/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/welcome" element={<Welcome/>}/>
  
  </Routes>
  </BrowserRouter>


  </>
  );
}

export default App;
