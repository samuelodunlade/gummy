import {useContext, useState} from "react";
import { productContext } from "../context/productContext";

const Add = () => {

    const {setProducts, products} = useContext(productContext)
    const [formData, setFormData] = useState({
            id:null, 
            name:null,
            price:null
        });



    const addNewProduct = () => {
        const newProduct = formData;
        setProducts([...products, newProduct])
        alert("product added")
    }



  return (
    <div>
        <form>
            <input type="number" name="id" onChange={(e)=>{setFormData({...formData, id:e.target.value})}} value={formData.id} placeholder="id"/>
            <input type="text" name="name" onChange={(e)=>{setFormData({...formData, name:e.target.value})}} value={formData.name} placeholder="name"/>
            <input type="number" name="price" onChange={(e)=>{setFormData({...formData, price:e.target.value})}} value={formData.price} placeholder="price"/>
            <button type="button" onClick={()=>{addNewProduct()}}>Add New Product</button>
        </form>
        
    </div>
  )
}

export default Add