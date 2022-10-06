import classes from './Modal.module.css';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};
const portalDestination = document.getElementById('overlay');

const Modal = (props) => {
    <>
        {/* <Backdrop />
        <ModalOverlay>{props.children}</ModalOverlay> */}
        {ReactDOM.createPortal(<Backdrop />, portalDestination)}
        {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalDestination,
        )}
    </>;
};

export default Modal;
