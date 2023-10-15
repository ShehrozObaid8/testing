import React from 'react';

export default function Detail(props) {
    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={props?.image} alt={props.title}  style={{width:100,height:100}}/>
            </div>
            <div className="product-info">
                <p className="product-category">{props.category}</p>
                <h2 className="product-title">{props.title}</h2>
                <p className="product-description">{props.description}</p>
                <div className="product-meta">
                    <p className="product-price">${props.price}</p>
                    <p className="product-rating">Rating: {props.rating}</p>
                </div>
            </div>
        </div>
    );
}
