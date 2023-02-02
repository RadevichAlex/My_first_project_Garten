import React from 'react'
import Banner from '../../components/Banner'
import Discount from '../../components/Discount'
import Promo from '../../components/Promo'
import CategoriesPage from '../CategoriesPage'

export default function HomePage() {
  return (
    <div>
        <Banner />
        <CategoriesPage />
        <Discount />
        <Promo />
    </div>
  )
}