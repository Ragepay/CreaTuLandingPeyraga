import React from 'react';
//  Componentes
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer';
//  CSS
import "./App.css"
// USE STATE
import { useState } from 'react';

const App = () => {
  
  // Hook
  const [count, setCount] = useState(0);

  // Incrementar contador
  const increment = () => {
    setCount(count + 1);
  };
  //  Decrementar contador
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <NavBar counter={count} />
      <ItemListContainer onClickMas={increment} onClickMenos={decrement} />
      <Footer />
    </>
  );
};

export default App;