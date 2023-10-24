import React from 'react'
import { PostAd } from '../Config/firebase';
import { useState } from 'react';

export function PostAdForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [price, setPrice] = useState('');

    const submitButton = () => {
    const ad = PostAd(title,description,file,price)    
    }


    return (
        <div>
            <h1>Post an Ad</h1>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <label htmlFor="file">Choose File:</label>
            <input
                type="file"
                id="file"
                name="file"
                onChange={(e) => setFile(e.target.files)}
                accept=".jpg, .jpeg, .png" // Adjust accepted file types as needed
                required
            />
            <label htmlFor="price">Price:</label>
            <input
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <button onClick={submitButton} type="submit">Submit</button>
        </div>
    );
}
