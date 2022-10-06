import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultState = {
    items: [],
    totalAmount: 0,
};
const cartReducer = (state, action) => {
    if(action.type ==='ADD'){
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAcmount = state.totalAmount + action.item.amount * action.item.price
    return{
        items: updatedItems,
        totalAmount: updatedTotalAcmount,
    }}
    return defaultState;
};


const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultState)

    const addItemToCartHandler = (item) => {
        dispatchCart({type:'ADD',item:item});

    const removeItemFromCartHandler = (item) => {};

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}};

export default CartProvider;
