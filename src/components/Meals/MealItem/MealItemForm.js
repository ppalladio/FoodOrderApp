import classes from './MealItemForm.module.css';
import { useRef, useState } from 'react';
import Input from '../../UI/Input';
const MealItemForm = (props) => {
    const [errormsg, setErrormsg] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value; //. the value is always a string
        const enteredAmountNum = +enteredAmount;

        //> logic check

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNum < 1 ||
            enteredAmountNum > 5
        ) {
            setErrormsg(false);
            return;
        }

        props.onAddToCart(enteredAmountNum);
        //.because the cart item we want to add need more data than just amount, but in this form we only have amount
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef} //' for the ref to work in the custom component, we have to go to the component [Input]...
                Lable="amount"
                input={{
                    id: 'amount ' + props.id,
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>Add</button>
            {!errormsg && <p> please enter a value amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;
