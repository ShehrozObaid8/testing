import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '../Components/card'

export default function Portfolio() {
    const [product, setproduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setproduct(res))
    }, [])
    return (
        <div>
            {
                product.map((item) => {
                    return (
                   <Card images={item.images}/>
                    )
                }
                )
            }
        </div>
    )
}
