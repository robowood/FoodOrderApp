import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'



const MealItemForm = (props) => {

  const cartCtx=useContext(CartContext)

  // const [amountIsValid,setAmountIsValid]=useState(true)

  // const amountInputRef=useRef();


  const addItemToCart=e=>{
    e.preventDefault();
    const quantity=document.getElementById('amount_'+props.id).value;
    cartCtx.addItem({...props.item, quantity:quantity})

    console.log('cartCtx',cartCtx);
    // console.log(quantity);


  //   const enteredAmount=amountInputRef.current.value;
  //   const enteredAmountNumber=+enteredAmount;
  //   if(enteredAmount.trim().length===0 || enteredAmountNumber < 1 || enteredAmountNumber >5){
  //     setAmountIsValid(false)
  //     return;
  //   }

  //   props.onAddToCart(enteredAmountNumber)

  }

  return (
    <form  className={classes.form}>
        <Input
        // ref={amountInputRef}
         label="Amount" 
         input={{
          id:'amount_'+props.id,
          type:'number',
          min:'1',
          max:'5',
          defaultValue:'1'
        }} />
        <button onClick={addItemToCart} >+Add</button>
        {/* {!amountIsValid && <p>Please enter a valid amount (1-5)</p>} */}
    </form>
  )
}

export default MealItemForm