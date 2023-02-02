import React from 'react'
import s from "./index.module.css"

export default function PromoCards({ img, title, discount_price, price, discount }) {
  return (
    <div className='wrapper'>
        <div>
            <img src={img} alt={title} className={s.img} />
        </div>
        <div className={s.info_block}>
            <p className={s.discount_price}>{ discount_price }</p>
            <p className={s.price}>{ price }</p>
            <p className={s.discount}>{ discount }</p>
        </div>
        <p className={s.title}>{ title }</p>
    </div>
  )
}