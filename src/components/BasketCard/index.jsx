import React from 'react'
import { useDispatch } from 'react-redux'
import { cartDecrement, cartIncrement, clearCart } from '../../store/reducers/cart';
import s from "./index.module.css"

export default function BasketCard({ id, title, price, image, count, discont_price }) {

  const dispatch = useDispatch();
  const increment = () => dispatch(cartIncrement(id));
  const decrement = () => dispatch(cartDecrement(id));

  const img = `http://localhost:3333${image}`;

  return (
    <div className={["wrapper", s.basket].join.apply(" ")}>
      <p className={s.border_p}></p>
      <div className={s.basket_block}>
        <div className={s.img_block}>
          <img src={img} alt={title} />
          <button>X</button>
          <p className={s.price_block}>{ discont_price }p</p>
          <p className={s.count_block}>{ price }p</p>
          {/* <p>{ price } X { count } = { price * count }</p> */}
        </div>
        <div className={s.title_block}>
          <p>{ title }</p>
          <div className={s.btn}>
            <button onClick={decrement} className={s.increment}>-</button>
              { count }
            <button onClick={increment}>+</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}