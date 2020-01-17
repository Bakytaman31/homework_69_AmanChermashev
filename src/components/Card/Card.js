import React from 'react';

const Card = props => {
    return (
        <div>
            <img src={props.img} alt='#'/>
            <h3 style={{textTransform: 'capitalize'}}>{props.name}</h3>
            <h4>Price: {props.price} KGS</h4>
            <button onClick={() => props.addToCart(props.name, props.price)}>Add to cart</button>
        </div>
    );
};

export default Card;