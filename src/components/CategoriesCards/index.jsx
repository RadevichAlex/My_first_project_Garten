import React from 'react'
import { Link } from 'react-router-dom'
import s from "./index.module.css"

export default function CategoriesCardы({ categorys, title }) {

    const image = `http://localhost:3333/category_img/${categorys}.jpeg`

    const link = `../category/${categorys}`

  return (
    <div className='wrapper'>
        <Link to={link} className={s.card_block}>
            <img src={image} alt={title} />
            <p>{ title }</p>
        </Link>
    </div>
  )
}