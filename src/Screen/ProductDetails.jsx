import React, { useEffect, useState } from 'react';
import Detail from '../Components/Detail';
import { useParams } from 'react-router-dom';

const productThingStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#ffff',
};

const productDetailStyle = {
    maxWidth: '400px', 
    textAlign: 'center', 
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
};

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);
    if (!product) {
        return <img width={100} style={{ marginTop: '200px', marginLeft: '20px' }} src="https://i.gifer.com/ZZ5H.gif" alt="" />
    }

    return (
        <div style={productThingStyle}>
           <div style={productDetailStyle}>
                <Detail
                    categ={product.category}
                    desc={product.description}
                    ident={product.id}
                    image={product.image}
                    price={product.price}
                    rate={product.rating.rate}
                    title={product.title}
                />
            </div>
        </div>
    );
}
