import React from 'react';
import './Home.css';
import image from '../../images/fridge.jpg';
const Home = () => {
    return (
        <div className='product-into-container'>
            <div className="product-into">
                <h1>Your next Fridge your best fridge</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui hic eum cupiditate consequuntur iusto beatae perspiciatis rerum ut ab nihil?</p>
                <button className='btn btn-primary'>Live demo</button>
            </div>
            <div className="product-image">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;