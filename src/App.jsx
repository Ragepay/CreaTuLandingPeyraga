import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import "./App.css"
import Footer from './components/Footer';
import { useState } from 'react';

const App = () => {
  // Definir el estado inicial del contador
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <NavBar counter={count} />
      <ItemListContainer mensaje="¡Bienvenido a nuestra tienda!" onClickMas={increment} onClickMenos={decrement} />
      <Footer />
    </>
  );
};

export default App;