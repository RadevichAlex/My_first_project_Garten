import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CategoriesCards from '../../components/CategoriesCards';
import { load_categories } from '../../requests/categories_req'
import s from "./index.module.css"

export default function CategoriesPage() {

    const dispatch = useDispatch();
    const category = useSelector(state => state.category);

    useEffect(() => {
        dispatch(load_categories)
    }, []);

    return (
        <div className={["wrapper", s.category].join(" ")}>
            <h1>Category</h1>
            <div className={s.category_block}>
                {
                    category.map((el, index) => index >= 0 && index <= 3 ?
                    <CategoriesCards key={el.id} categorys={el.id} {...el} /> : "")
                }
            </div>
        </div>
    )
}