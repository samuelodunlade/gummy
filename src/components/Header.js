import { useContext } from "react"
import { productContext } from "../context/productContext"


const Header = () => {

    const {products}= useContext(productContext);


  return (
    <div>
        <h1>Products List</h1>
        count: {products.length} 
    </div>
  )
}

export default Header