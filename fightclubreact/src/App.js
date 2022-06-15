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


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navlink/>
      <Routes>
        <Route path="/Acceuil" element={<Acceuil/>} />
        <Route path="/Connexion" element={<Connexion/>} />
        <Route path="/Tarifs" element={<Tarifs/>} />
        <Route path='/Boutique' element={<Boutique />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/view/:id' element={<View />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
