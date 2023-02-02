import React from 'react'
import { promo } from '../../data/promo'
import PromoCards from '../PromoCards'
import s from "./index.module.css"

export default function Promo() {
    return (
        <div className={["wrapper", s.info_block].join(" ")}>
            <h2>Sales</h2>
            <div className={s.block}>
                {
                    promo.map(el => <PromoCards key={el.id} {...el} />)
                }
            </div>
        </div>
    )
}