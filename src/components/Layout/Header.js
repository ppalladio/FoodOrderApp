import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import meals from '../../Assets/meals.jpg';
function Header(props) {
    return (
        <>
            <header className={classes.header}>
                <h1> ReactMeal</h1>
                <HeaderCartButton onCartClick={props.onCartClick}/>
                {/* //.' here the action name can be customized because its a customized component' */}
            </header>
            <div className={classes['main-image']}>
                {/* ⬆️//.can't use dot notation because there is a dash in the class name */}
                <img src={meals} alt="food" />
            </div>
        </>
    );
}

export default Header;
