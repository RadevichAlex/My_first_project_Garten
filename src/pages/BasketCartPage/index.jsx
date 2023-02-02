import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BasketCard from '../../components/BasketCard';
import { clearCart } from '../../store/reducers/cart'
import s from "./index.module.css"

export default function BasketCartPages() {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className={["wrapper", s.basket_page].join(" ")}>
      <div className={s.basket_container}>
        <h2 className={s.basket}>Basket</h2>
        <div className={s.nav_menu}>
          <p className={s.home_basket}>Home / Basket</p>
          <p className={s.back_to}>Back to shop</p>
        </div>
          {
            cart.length === 0
            ? <div>The cart is empty</div>
            : <div>
              {
                cart.map(el => <BasketCard key={el.id} {...el} ID={el.id} />)
              }
            </div>
          }
      </div>
      
      <div className={s.basket_block}>
        <h2>Order Details</h2>
        <div className={s.sum_block}>
          <p className={s.sum}>Sum</p>
          <p className={s.count}>
            {
              cart.reduce((prev, {price, count}) => prev + price * count, 0)
            }p
          </p>
        </div>
        <div className={s.btn_block}>
          <input type="tel" name='phone' placeholder='Your phone number' />
          <button onClick={() => dispatch(clearCart())}>Clear the cart</button>
        </div>
        
      </div>
    </div>
  )
}