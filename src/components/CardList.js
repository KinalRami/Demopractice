import React from 'react';
import Card from './Card';
import './cardlist.css';

const Cardlist = (props) => {
    return (
        <div>
            <div className='card-list'>
                {props.users.map((user) =>
                (
                    <Card key={user.id} user={user}/>
                ))}
            </div>
        </div>
    );
};



export default Cardlist;
