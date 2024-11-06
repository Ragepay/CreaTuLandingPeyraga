import { useParams } from "react-router-dom";
import FormProduct from "./FormProduct";
import { adminConfig } from "../../config/config";






const AddProduct = () => {
    const { password } = useParams();
    const adminpassword = adminConfig.password
    console.log(adminConfig.password)
    
    if (password == adminpassword) return (<FormProduct />)

    return (
        <div>
            Pagina no disponible. Solo paras admins.
        </div>
    );
};

export default AddProduct;
