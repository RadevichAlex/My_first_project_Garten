import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { load_products } from '../../requests/products_req' 
import s from "./index.module.css"
import ProductCard from '../../components/ProductCard'
import { searchPrice, sortProducts } from '../../store/reducers/products'

export default function ProductsPage() {

  const { categororys } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const category = useSelector(state => state.category);

  useEffect(() => {
    dispatch(load_products(categororys))
  }, []);

  const order = event => dispatch(sortProducts(event.target.value));
  const search_price = event => {
    event.preventDefault();
    const { min, max } = event.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(searchPrice({ min_value, max_value }))
  }

  

  const category_up = category.length >= 1 ? category[categories - 1].title : "";

  return (
    <div className={["wrapper", s.products_container].join(" ")}>
      <h2>{ category_up }</h2>
      <div className={s.product_section}>
        <div className={s.sort_block}>
          <span>Цена:</span>
          <form onSubmit={search_price} className={s.search_form}>
            <input type="number" name="min" placeholder="from" min="0" />
            <input type="number" name="max" placeholder="to" />
            <button>Add</button>
          </form>
        </div>
        <div className={s.sort_section}>
          <span>Сортировать:</span>
          <select onInput={order} className={s.sort_select}>
            <option value="default">Default</option>
            <option value="title">Title</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      <div className={s.product_block}>
        {
          products
          .filter(el => !el.hide_mark)
          .map(el => <ProductCard key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}