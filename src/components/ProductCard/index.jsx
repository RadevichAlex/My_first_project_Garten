import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/reducers/cart';
import s from "./index.module.css"

export default function ProductCard({ id, title, price, discont_price, image }) {

    const img = `http://localhost:3333${image}`;
    const product_url = `/products/${id}`

    const dispatch = useDispatch();
    const add_to_cart = () => dispatch(addToCart({ id, title, image, price, discont_price }))
    
    const discont = `${Math.round(100 - discont_price * 100 / price)}`;

  return (
    <div className={['wrapper', s.block].join(" ")}>
            <div className={s.product_block}>
                <div className={s.img_block}>
                    <img src={img} alt={title} />
                    <button onClick={add_to_cart}>Add to cart</button>
                </div>
            <Link to={product_url}>    
                <div className={s.price_block}>
                    <p className={s.discont_price}>{ discont_price }p</p>
                    <p className={s.price}>{ price }p</p>
                    <p className={s.discont}>{ discont }%</p>
                </div>
                <p className={s.title}>{ title }</p>
            </Link>   
            </div>
    </div>
  )
}