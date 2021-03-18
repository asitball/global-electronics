import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name, image, salary} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
        return (
        <div  className="players-info">
            <h2>{name}</h2>
            <img src={image} alt=""/>
            <h5> Salary: {salary}</h5>
            <button className="btn btn-primary" onClick={()=>handleAddPlayer(props.player)} >Player Add <FontAwesomeIcon icon={faPlus} /></button>
           
        </div>
    );
};

export default Player;