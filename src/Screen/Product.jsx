import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '../Components/card'
import { Link } from 'react-router-dom'


export default function Product() {
    const [product, setProduct] = useState()
     console.log(product)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProduct(res))

    }, [])

    if (!product) {
        return <h2 style={{ marginTop: '230px' }}>Loading...</h2>
    }
    return (
        <div>
        {product.map((item) => (
            <Link key={item.id} to={`/ProductDetails/${item.id}`}>
                <Card image={item.image} title={item.title} description={item.description} price={item.price} category={item.category} rate={item.rating} />
            </Link>
        ))}
    </div>
    )
}
