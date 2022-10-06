import React ,{useContext}from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';
const HeaderCartButton = (props) => {

    const ctx = useContext(second)
    return (

        <button className={classes.button} onClick = {props.onCartClick}>
            {/* //'here the name(onClick) can't be cutomized because ⬆️its not a cutomized component */}
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
};

export default HeaderCartButton;
