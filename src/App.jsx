// Utils
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
import AddProduct from './components/Admin/AddProduct';
import NotFound from './components/pages/NotFound';
//  CSS
import "./App.css"
// USE STATE
import { Routes } from 'react-router-dom';

const App = () => {
  // Layout de Header + Children + Footer.
  const Layout = ({ children }) => {
    return (
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    )
  }

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin/:password" element={<AddProduct />} />
      </Routes>
    </>
  );
};

export default App;

