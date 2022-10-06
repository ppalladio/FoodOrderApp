import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.div}>
            <lable htmlFor={props.input.id}></lable>
            <input id={props.input.id} {...props.input} />
            {/* //'use spread operator to⬆️ make sure all the key value pairs recieved are added as props to input */}
        </div>
    );
};

export default Input;
