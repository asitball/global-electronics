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
                    <p>Keep your food fresher for longer. Striking good looks and cool innovations meet space-saving features and energy efficiency when you choose a new state-of-the-art Global Electronics refrigerator. It’s like having your very own personal assistant in the kitchen.</p>
                    <button className='live-demo-btn'>Live demo</button>
                </div>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
           </div>
            <div className='review-container'>
                {
                    reviews?.map(review => <Reviews review={review}></Reviews>)
                }
                
            </div>
        </div>

    );
};

export default Home;