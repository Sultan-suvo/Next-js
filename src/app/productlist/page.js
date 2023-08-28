'use client'
import React, { useEffect, useState } from 'react';
import Button from './product';

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
                    <div key={product.id}>
                        <h2> Name : {product.title}</h2>
                        <Button price={product.price}/>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductList;
