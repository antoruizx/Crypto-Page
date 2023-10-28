import React from 'react';
import { dataProducts } from "../assets/dataProducts";


const ProductList = ({allProducts, setAllProducts}) => {
    
    const onAddProducts = () => {
        console.log("add");
    }
  return (
    <div className='container-items'>
        {dataProducts.map(product => (
            <div className='item' key={product.id}>
                <figure>
                    <img src={product.img} alt={product.nameProduct} />
                </figure>
                <div className='info-product'>
                    <h2>{product.nameProduct}</h2>
                    <p className='price'>${product.price}</p>
                    <button onClick={() => onAddProducts()}>
                        Añadir al carrito
                    </button>
                </div>
            </div>
        ))}
    </div>
  );
};

export default ProductList;