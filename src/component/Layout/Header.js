import React from 'react'
import classes from './Header.module.css'
import meal from '../Img/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <div>
        <div className={classes.header}>
            <h1>ReactMeal</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </div>
        <div className={classes['main-image']}>
        <img src={meal} alt='A table full of delicious food!'/>
        </div>
    </div>
  )
}

export default Header

