import {createContext, useState } from "react";

const productContext = createContext();


const ProductProvider = ({children}) => {

    const[products, setProducts] = useState([
        {id:1, name:"Product 1", price:10},
        {id:2, name:"Product 2", price:100},
        {id:3, name:"Product 3", price:210},
    ]);

    return (

        <productContext.Provider value={{products, setProducts}}>
            {children}
        </productContext.Provider>

    )

}


export{productContext, ProductProvider}