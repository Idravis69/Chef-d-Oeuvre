import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Acceuil from './components/Acceuil';
import Connexion from './components/Connexion';
import Navlink from './components/Navlink';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tarifs from './components/Tarifs';
import Boutique from './components/Boutique';
import Create from './components/create';
import Edit from './components/edit';
import View from './components/view';
import Inscription from './components/Inscription';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navlink/>
      <Routes>
        <Route path="/Accueil" element={<Acceuil/>} />
        <Route path="/Connexion" element={<Connexion/>} />
        <Route path="/Tarifs" element={<Tarifs/>} />
        <Route path='/Boutique' element={<Boutique />} />
        <Route path='/create' element={localStorage.getItem('role') ? <Create/> :<Acceuil/>} />
        <Route path='/edit/:id' element={localStorage.getItem('role') ? <Edit/> :<Acceuil/>} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/Inscription' element={localStorage.getItem('role') ? <Inscription/> :<Acceuil/>} />
        <Route path='/Cart' element={localStorage.getItem('token') ? <Cart/> :<Acceuil/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
