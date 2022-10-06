import classes from './Header.module.css';

import meals from '../../Assets/meals.jpg';
function Header(props) {
    return (
        <>
            <header className={classes.header}>
                <h1> ReactMeal</h1>
                <button> Cart</button>
            </header>
            <div className={classes['main-image']}>
                {/* ⬆️//.can't use dot notation because there is a dash in the class name */}
                <img src={meals} alt="food" />
            </div>
        </>
    );
}

export default Header;
