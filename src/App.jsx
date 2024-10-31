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
        "id": "gfh347fj",
        "title": "Xbox Series X",
        "image": "https://via.placeholder.com/300x300",
        "description": "Disponible en 1 TB.",
        "price": "600",
        "stock": 15,
        "quantity": 0,
        "category": "Consolas"
      },
      {
        "id": "sdfg457fh",
        "title": "Xbox Series S",
        "image": "https://via.placeholder.com/300x300",
        "description": "Disponible en 500 GB.",
        "price": "400",
        "stock": 25,
        "quantity": 0,
        "category": "Consolas"
      },
      {
        "id": "gjsnfj48fh",
        "title": "Nintendo Switch",
        "image": "https://via.placeholder.com/300x300",
        "description": "Edición estándar con Joy-Con azul y rojo.",
        "price": "300",
        "stock": 40,
        "quantity": 0,
        "category": "Consolas"
      },
      {
        "id": "lsdnfj234jh",
        "title": "Nintendo Switch OLED",
        "image": "https://via.placeholder.com/300x300",
        "description": "Pantalla OLED y 64 GB de almacenamiento interno.",
        "price": "350",
        "stock": 30,
        "quantity": 0,
        "category": "Consolas"
      },
      {
        "id": "jsdhfbv84fj",
        "title": "PlayStation VR",
        "image": "https://via.placeholder.com/300x300",
        "description": "Auriculares de realidad virtual para PS4 y PS5.",
        "price": "250",
        "stock": 20,
        "quantity": 0,
        "category": "Accesorios"
      },
      {
        "id": "bvfngj347dj",
        "title": "Xbox Elite Controller",
        "image": "https://via.placeholder.com/300x300",
        "description": "Controlador de alta precisión para Xbox y PC.",
        "price": "150",
        "stock": 35,
        "quantity": 0,
        "category": "Accesorios"
      },
      {
        "id": "hsdjfhg734hj",
        "title": "DualSense Controller",
        "image": "https://via.placeholder.com/300x300",
        "description": "Controlador inalámbrico para PS5.",
        "price": "70",
        "stock": 50,
        "quantity": 0,
        "category": "Accesorios"
      },
      {
        "id": "kgfhwiu847dh",
        "title": "PlayStation 4 Slim",
        "image": "https://via.placeholder.com/300x300",
        "description": "Versión compacta de la PS4, 500 GB.",
        "price": "400",
        "stock": 25,
        "quantity": 0,
        "category": "Consolas"
      },
      {
        "id": "asdfg8347kj",
        "title": "Nintendo Switch Lite",
        "image": "https://via.placeholder.com/300x300",
        "description": "Consola portátil en colores variados.",
        "price": "200",
        "stock": 45,
        "quantity": 0,
        "category": "Consolas"
      },
      {
        "id": "qwer5482bn",
        "title": "Xbox Game Pass Ultimate",
        "image": "https://via.placeholder.com/300x300",
        "description": "Suscripción de 12 meses con acceso a más de 100 juegos.",
        "price": "100",
        "stock": 100,
        "quantity": 0,
        "category": "Suscripciones"
      }
    ]
    );
  }, []); // Ejecuta solo una vez al montar el componente


  // Incrementar contador
  const increment = (id) => {
    setCount(count + 1);
    setProductos((productos) =>
      productos.map((producto) =>
        producto.id === id
          ? { ...producto, stock: producto.stock - 1 }
          : producto
      )
    );
  };
  //  Decrementar contador
  const decrement = (id) => {
    if (count > 0) {
      setCount(count - 1);
      setProductos((productos) =>
        productos.map((producto) =>
          producto.id === id
            ? { ...producto, stock: producto.stock + 1 }
            : producto
        )
      );
    }
  };

  // Layout de Header + Children + Footer.
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
          <Route path="/carrito" element={<Carrito productos={productos} />} />
          <Route path="/productos" element={<ItemListContainer productos={productos} />} />
          <Route path="/detail/:id" element={<Detail productos={productos} onClickMas={increment} onClickMenos={decrement} key={productos.id} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;

