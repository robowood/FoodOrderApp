import {Fragment,useState} from 'react';
import Header from './Components/Layouts/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
//import MealItemFrom from './Components/Meals/MealItem/MealItemForm';

function App() {
   const[cartIsShown,setCartIsShown]=useState(false);

   const showCartHandler=()=>{
     setCartIsShown(true);
   }
   const hideCartHandler=()=>{
    setCartIsShown(false)
   }
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
         <Meals/>
      </main>
      {/* React.CreatePortal( <Cart/>  , document.getElementById("ul")); */}
    </Fragment>
   
  );
}

export default App;
