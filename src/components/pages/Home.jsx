import './Home.css'; // Asegúrate de tener un archivo CSS para estilos

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">¡Bienvenido a Tienda Peyraga!</h1>
            <p className="home-intro">
                En Tienda Peyraga, ofrecemos una amplia variedad de productos para satisfacer todas tus necesidades. 
                Desde lo último en tecnología hasta artículos de hogar, tenemos todo lo que buscas. 
                Nuestro compromiso es ofrecer calidad y un excelente servicio al cliente. 
                ¡Explora nuestra selección y encuentra lo que más te gusta!
            </p>
            <button className="home-button" onClick={() => window.location.href='/productos'}>
                Ver Productos
            </button>
        </div>
    );
};

export default Home;
