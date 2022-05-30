import React from 'react';
import './Reviews.css'
const Reviews = (props) => {
    const { name, comment, rating, image } = props.review;
    return (
        <div className='reviews-container'>
            <img src={image} alt="" />
            <div>
            <h2>{name}</h2>
            <p>{comment}</p>
            <p>{rating}</p>
            </div>
        </div>
    );
};

export default Reviews;