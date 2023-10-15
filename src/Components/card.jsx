import React from 'react'
import './product.css'


export default function Card(props) {

    return (

        <div className="card">
            <img className="card-image" src={props.image} alt="Product" />
            <div className="card-details">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-price">{props.price}</p>
                <p className="card-description">{props.description}</p>
                <p className="card-category">{props.category}</p>
                <p className="card-rating">{props.rating}</p>
                <p className="card-id">{props.id}</p>
            </div>
        </div>
    );
}


