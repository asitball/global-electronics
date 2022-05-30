import React from 'react';
import './Home.css';
import image from '../../images/fridge.jpg';
import ReviewData from '../../hooks/ReviewData';
import Reviews from '../Reviews/Reviews';
const Home = () => {
    const [reviews, setReviews] = ReviewData();

    return (
        <div>
            <div className='product-into-container'>
                <div className="product-into">
                    <h1>Keeps your food <br /> <span className='highlight-title'>Fresher Longer</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui hic eum cupiditate consequuntur iusto beatae perspiciatis rerum ut ab nihil?</p>
                    <button className='live-demo-btn'>Live demo</button>
                </div>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
           </div>
            <div className='review-container'>
                {
                    reviews.map(review => <Reviews review={review}></Reviews>)
                }
            </div>
        </div>

    );
};

export default Home;