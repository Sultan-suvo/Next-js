'use client'
import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([])

    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {
                products.map((product) => (
                    <h2 key={product.id}> Name : {product.title}</h2>
                ))
            }
        </div>
    );
};

export default ProductList;
