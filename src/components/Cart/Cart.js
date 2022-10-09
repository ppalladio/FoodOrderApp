import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { useContext } from 'react';
import CartContext from '../store/cart-context';
const Cart = (props) => {
    const ctx = useContext(CartContext);
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

    const isEmpty = ctx.items.length === 0; //.check if there is any item in the cart, is no item then dont display check out button

    const itemAddHandler = (item) => {
        ctx.addItem({...item,amount:1})
    };
    const itemRemoveHandler = (id) => {ctx.removeItem(id)};
    const cartItems = (
        <ul className={classes['cart-items']}>
            {ctx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={itemAddHandler.bind(null, item)}
                    //?why use bind??
                    onRemove={itemRemoveHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClickClose={props.onClickClose}>
            {cartItems}
            <div className={classes.total}>
                <div>total amount</div>
                <div>{totalAmount}</div>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                    onClick={props.onClickClose}
                >
                    Close
                </button>
                {!isEmpty && (
                    <button button className={classes.button}>
                        Check out
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
