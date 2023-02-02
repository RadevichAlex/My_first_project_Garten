import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import s from "./index.module.css"

export default function Layout() {
  return (
    <div>
        <Header />
        <main className={s.main_block}>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}