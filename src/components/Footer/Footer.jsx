import './Footer.css'; // Puedes agregar tus estilos en un archivo separado

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; 2024 Tienda Peyraga. Todos los derechos reservados.</p>
        <ul className="links">
          <li><a href="#" target="_blank" >Facebook</a></li>
          <li><a href="#" target="_blank" >Twitter</a></li>
          <li><a href="#" target="_blank" >Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;