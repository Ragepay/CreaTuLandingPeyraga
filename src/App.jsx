// Utils
import React from 'react';
import { Route } from 'react-router-dom';
//  Componentes
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
//  Pages
import Carrito from './components/pages/Carrito';
import Contacto from './components/pages/Contacto';
import Detail from './components/pages/Detail';
import Home from './components/pages/Home';
import ItemListContainer from './components/pages/ItemListContainer';
import NotFound from './components/pages/NotFound';

//  CSS
import "./App.css"
// USE STATE
import { useState, useEffect } from 'react';
import { Routes } from 'react-router-dom';

const App = () => {

  // Hook useState de contador de productos.
  const [count, setCount] = useState(0);
  const [productos, setProductos] = useState([])
  //const [nombre, setNombre] = useState('');

  // useEffect para establecer el estado de productos
  useEffect(() => {
    setProductos([
      {
        id: "jsdhfnj347fj",
        title: "Play Station 4",
        image: "https://nextgames.com.ar/img/Public/1040/62236-producto-61ffvkc3d3l-ac-sl1500.jpg",
        description: "Disponible en 500 GB y 1 TB.",
        price: "500", 
        stock: 20,
        quantity:0
      },
      {
        id: "jsdhfnj347fh",
        title: "Play Station 5",
        image: "https://nextgames.com.ar/img/Public/1040/62236-producto-61ffvkc3d3l-ac-sl1500.jpg",
        description: "Disponible en 1 TB y 2 TB.",
        price: "650",
        stock: 30,
        quantity:0
      }
    ]);
  }, []); // Ejecuta solo una vez al montar el componente


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

/*
  const eliminarProducto = (id) => {
    const nuevosProductos = productosCart.filter(producto => producto.id !== id);
    setProductos(nuevosProductos);
};

const aumentarCantidad = (id) => {
  const nuevosProductos = productosCart.map(producto => 
      producto.id === id ? { ...producto, quantity: producto.quantity + 1 } : producto
  );
  setProductos(nuevosProductos);
};
*/

  /*
  // useEffect para saludo del nombre
  useEffect(() => {
    const nombreIngresado = prompt("Ingrese su nombre:");
    if (nombreIngresado) {
      setNombre(nombreIngresado);
    }
  }, []);
  */

  // Layout de Header + Footer.
  const Layout = ({ children }) => {
    return (
      <div>
        <NavBar counter={count} />
        {children}
        <Footer />
      </div>
    )
  }

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito productos={productos} />}></Route>
          <Route path="/productos" element={<ItemListContainer onClickMas={increment} onClickMenos={decrement} productos={productos} />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  );
};

export default App;

//<NavBar counter={count} />
//      <ItemListContainer onClickMas={increment} onClickMenos={decrement} />
//    <Footer />