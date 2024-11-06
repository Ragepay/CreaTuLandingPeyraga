import { useContext, useState } from 'react';
import "./FormProduct.css";
import CardAdmin from './CardAdmin.jsx';
import { ProductContext } from '../Context/productsContext.jsx';

const FormProduct = () => {
    const { AddProduct } = useContext(ProductContext);
    const [formData, setFormData] = useState({
        title: '',
        stock: 0,
        status: true,
        price: '',
        image: null,
        description: '',
        category: '',
        quantity: 0  
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        AddProduct(formData);  // `AddProduct` maneja la adición a Firebase
        console.log(formData); // Verificar los datos antes de enviarlos
    };

    return (
        <div className="form-container">
            <h2>Agregar Producto</h2>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Stock:</label>
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <input
                        type="checkbox"
                        name="status"
                        checked={formData.status}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        accept="image/*"
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Agregar Producto</button>
            </form>

            {/* Vista previa del producto en una Card */}
            <div className="card-preview">
                <CardAdmin
                    id={formData.id}
                    title={formData.title}
                    image={"https://via.placeholder.com/400x400"}//formData.image ? URL.createObjectURL(formData.image) : ''}
                    description={formData.description}
                    price={formData.price}
                    stock={formData.stock}
                />
            </div>
        </div>
    );
};

export default FormProduct;
