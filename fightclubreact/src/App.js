import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Acceuil from './components/Acceuil';
import Connexion from './components/Connexion';
import Navlink from './components/Navlink';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tarifs from './components/Tarifs';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navlink/>
      <Routes>
        <Route path="/" element={<Acceuil/>} />
        <Route path="/Connexion" element={<Connexion/>} />
        <Route path="/Tarifs" element={<Tarifs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
