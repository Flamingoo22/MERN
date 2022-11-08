import React, { useState, useEffect } from 'react'
import ProductForm from '../components/ProductForm'
import Products from '../components/Products'

const Main = () => {
    const [products, setProducts] = useState([])

    return (
        <>
            <ProductForm setProducts={setProducts} products={products}/>
            <hr/>
            <Products products={products} setProducts={setProducts}/>
        </>
    )
}

export default Main