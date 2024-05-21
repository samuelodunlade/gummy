
import {useContext} from "react";
import { productContext } from "../context/productContext";

const Content = () => {

    const { products, setProducts } = useContext(productContext);
    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    }

  return (
    <div>
        <h1>List Of Products</h1>
        <ul>
            {
                products.map(product=><li onClick={()=>{deleteProduct(product.id)}}>{product.name} : {product.price}</li>)
            }
        </ul>


    </div>
  )
}

export default Content