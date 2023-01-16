import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState={
    items:[],
    totalAmount:0
};

const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedItems=state.items.concat(action.item);
        const updatedTotalAmunt=state.totalAmount+action.item.price*action.item.quantity;
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmunt
        }
    }
    if(action.type==='REMOVE'){
        const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.id);
        const existingItem=state.items[existingCartItemIndex];
        const updatedTotalAmunt=state.totalAmount-existingItem.price
        let updatedItems;
        updatedItems=state.items.filter((item)=>item.id!==action.id);
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmunt
        }
    }

    return defaultCartState
}

const CartProvider = (props) => {

    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);

    const addItemHandler=(item)=>{
        dispatchCartAction({type:'ADD' ,item:item})
    };

    const removeItemHandler=(id)=>{
        dispatchCartAction({type:'REMOVE', id:id})
    };

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemHandler,
        removeItem:removeItemHandler
    }

  return (
  <CartContext.Provider value={cartContext}>
 
 {props.children}

  </CartContext.Provider>
)
}
 
export default CartProvider