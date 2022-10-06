import React,{useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = ()=>{
        setCartIsShown(true)
    }

    const hideCartHandler = ()=>{
        setCartIsShown(false)
    }
    return (
        <>
            {cartIsShown&& <Cart onClickClose = {hideCartHandler}/>}
            <Header onCartClick={showCartHandler} />
            <main>
                <Meals />
            </main>
        </>
    );
}

export default App;
