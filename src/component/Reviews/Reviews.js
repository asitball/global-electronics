import React from 'react';
import './Reviews.css'
const Reviews = (props) => {
    const { name, comment, rating, image } = props.review;
    return (
        <div className='review-container'>
                <img src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <h4>{comment}</h4>
                <p>{rating}</p>
            </div>
        </div>
    );
};

export default Reviews;