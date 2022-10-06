import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClickClose}></div>;
};//'first calling with onCLick 

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};
const portalDestination = document.getElementById('overlay');

const Modal = (props) => {
    return (
        <>
            {/* <Backdrop />
        <ModalOverlay>{props.children}</ModalOverlay> */}
            {ReactDOM.createPortal(<Backdrop onClickClose={props.onClickClose}/>, portalDestination)}
            {/* //' here we need to call the onClickClose again */}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalDestination)}
        </>
    );
};

export default Modal;
