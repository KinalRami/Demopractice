import React from 'react';
import './card.css';

const Card = (props) => {
    // console.log("id::",props.user.id); 
    return (
        <div className='card-cotainer'>
            <img  alt="user" src="https://robohash.org/${props.user.id}?set=set2"/>
            <h2>{props.user.name}</h2>
            <p>{props.user.email}</p>
        </div>
    );
};


export default Card;
