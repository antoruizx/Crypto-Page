import  { useState } from 'react';
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

function Products() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0); 

    return (
        <>
            <Cart 
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducs={setCountProducts}
            />
            <ProductList 
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducs={setCountProducts}
            />
        </>
    );
}

export default Products;
