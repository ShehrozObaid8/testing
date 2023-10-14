import React from 'react'

export default function Card(props) {
    const { images, title, price, description } = props
    return (
        <div class="card" style="width: 18rem;">
            <img src={images} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">TITLE:{title}</h5>
                <p class="card-text">PRICE:{price}</p>
                <p>CATEGORY:<span>{description}</span></p>
            </div>
        </div>
    )
}


