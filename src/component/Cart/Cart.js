import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartCtx=useContext(CartContext);

  const Total=`$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler=id=>{
      cartCtx.removeItem(id)
  };

    const cartItem=<ul className={classes['cart-items']}>{cartCtx.items.map((item)=>(<CartItem key={item.id} name={item.name} amount={item.quantity} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)}  />
    ))}</ul>

   

  return (
    <Modal onClose={props.onClose}>
        {cartItem}
    <div className={classes.total}>
    <span>Total Amount</span>
    <span>{Total}</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
    </Modal>
  )
}

export default Cart