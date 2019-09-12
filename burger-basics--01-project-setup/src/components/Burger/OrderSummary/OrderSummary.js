import React from 'react';
import Aux from '../../../hoc/Hoc';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    });

    return (
        <Aux>
            <h1>Your Order</h1>
            <p>
                A delicious burger with the folowing ingredients:
            </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price : {props.totalPrice}</p>
            <p>Continue to Checkout ?</p>
        </Aux>
    )
};

export default OrderSummary;