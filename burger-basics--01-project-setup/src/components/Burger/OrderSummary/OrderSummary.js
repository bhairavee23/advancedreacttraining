import React from 'react';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey => {
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
        </Aux>
    )
};

export default OrderSummary;