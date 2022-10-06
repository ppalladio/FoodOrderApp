import classes from './Cart.module.css';
import Modal from '../UI/Modal'
const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: 'c1', name: 'sushi', amount: '1', price: 12.99 }].map(
                (item) => (
                    <li>{item.name}</li>
                ),
            )}
        </ul>
    );

    return (
        <Modal onClickClose={props.onClickClose}>
            {cartItems}
            <div className={classes.total}>
                <div>total amount</div>
                <div>31.1</div>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClickClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
