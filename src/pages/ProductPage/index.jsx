import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { load_product } from '../../requests/product_req'
import { addToCart } from '../../store/reducers/cart';
import s from "./index.module.css"

export default function ProductPage() {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);

    const { id } = useParams();

    useEffect(() => {
        dispatch(load_product(id))
    }, []);

    const { title, description, price, image, discont_price } = product;

    const discont = `${Math.round(100 - discont_price * 100 / price)}`
    const img = `http://localhost:3333${image}`;

    const add_to_cart = () => dispatch(addToCart({ id, title, image, price, discont_price }))

  return (
    <div className={["wrapper", s.container].join(" ")}>
        <div className={s.product_container}>
            <p>{ title }</p>
            <img src={img} alt="{title}" />
        </div>
        <div>
            <div className={s.price_container}>
                <p className={s.discont_price}>{ discont_price }₽</p>
                <p className={s.price}>{ price }₽</p>
                <p className={s.discont}>{ discont }%</p>
            </div>
            <div className={s.title_container}>
                <button onClick={add_to_cart}>Add to cart</button>
                <p className={s.border_p}></p>
                <p className={s.descript}>Description</p>
                <p className={s.description}>{ description }</p>
            </div>
        </div>
    </div>
  )
}