// import {useState} from 'react';
// import Header from './Components/Layouts/Header';
// import Meals from './Components/Meals/Meals';
// import Cart from './Components/Cart/Cart';
// //import MealItemFrom from './Components/Meals/MealItem/MealItemForm';
// import CartProvider from './store/CartProvider';
// function App() {
//    const[cartIsShown,setCartIsShown]=useState(false);

//    const showCartHandler=()=>{
//      setCartIsShown(true);
//    }
//    const hideCartHandler=()=>{
//     setCartIsShown(false)
//    }
//   return (
//     <CartProvider>
//       {cartIsShown && <Cart onClose={hideCartHandler}/>}
//       <Header onShowCart={showCartHandler}/>
//       <main>
//          <Meals/>
//       </main>
//       {/* React.CreatePortal( <Cart/>  , document.getElementById("ul")); */}
//     </CartProvider>
   
//   );
// }

// // export default App;
// import {Fragment,useState} from 'react';
// import Header from './Components/Layouts/Header';
// import Meals from './Components/Meals/Meals';
// import Cart from './Components/Cart/Cart';
// //import MealItemFrom from './Components/Meals/MealItem/MealItemForm';

// function App() {
//    const[cartIsShown,setCartIsShown]=useState(false);

//    const showCartHandler=()=>{
//      setCartIsShown(true);
//    }
//    const hideCartHandler=()=>{
//     setCartIsShown(false)
//    }
//   return (
//     <Fragment>
//       {cartIsShown && <Cart onClose={hideCartHandler}/>}
//       <Header onShowCart={showCartHandler}/>
//       <main>
//          <Meals/>
//       </main>
//       {/* React.CreatePortal( <Cart/>  , document.getElementById("ul")); */}
//     </Fragment>
   
//   );
// }

// export default App;
import {  useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import AvailableMeal from "./component/Meals/AvailableMeal";
import Meal from "./component/Meals/Meal";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true)
  };

  const hideCartHandler=()=>{
      setCartIsShown(false)
  }

  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
        <AvailableMeal />
      </main>
    </CartProvider>
  );
}

export default App; 
