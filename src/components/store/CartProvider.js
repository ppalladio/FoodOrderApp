import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    //>state: last state snapshot. action:(the action was dispatched) after an action is executed, the state has changed.
    //: add logic
    if (action.type === 'ADD') {
        const updatedTotalAcmount =
            state.totalAmount + action.item.amount * action.item.price;

        //>check if item is already in the cart:
        const existedItemID = state.items.findIndex(
            (item) => item.id === action.item.id,
        );
        const existedItem = state.items[existedItemID];
        let updatedItems;
        //> if the item existed, the set to a new object where set the existing item but update the amount.
        if (existedItem) {
            const updatedItem = {
                ...existedItem,
                amount: existedItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existedItemID] = updatedItem;
            //????what?
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAcmount,
        };
    }

    //: remove logic
    if (action.type === 'REMOVE') {
        const existedItemID = state.items.findIndex(
            (item) => item.id === action.item.id,
        );
        const existedItem = state.items[existedItemID];
        const updatedTotalAmount = state.totalAmount - existedItem.price;
        let updatedItems;
        if (existedItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = {
                ...existedItem,
                amount: existedItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existedItemID] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultState;
};

//# component function
const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultState);
    //. the defaultstate is the initial state for cartstate snapshot

    const addItemToCartHandler = (item) => {
        dispatchCart({ type: 'ADD', item: item });
    };
    // ' to make sure addItemToCartHandler is being called, for that we need to go to the place where we call [addItem] on cartContext, track to the mealItem, when the form is submitted, we want to add items to the cart
    const removeItemFromCartHandler = (id) => {
        dispatchCart({ type: 'REMOVE', id: id });
    };

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
};

export default CartProvider;
