import classes from './Input.module.css';
import React from 'react';

//' for useRef to work in custom component:
//' wrap function with React.forwardRef, add ref as secion argument, add ref={ref}
const Input = React.forwardRef((props,ref) => {
    return (
        <div className={classes.div}>
            <lable htmlFor={props.input.id}></lable>
            <input ref={ref} id={props.input.id} {...props.input} />
            {/* //'use spread operator to⬆️ make sure all the key value pairs recieved are added as props to input */}
        </div>
    );
})

export default Input;
