import React from 'react';

const Player = (props) => {
    const {name, image, salary} = props.player
        return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt=""/>
            <h5>{salary}</h5>
        </div>
    );
};

export default Player;