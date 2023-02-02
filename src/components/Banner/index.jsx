import React from 'react'
import s from "./index.module.css"
import banner from "../../media/banner.png"

export default function Banner() {
  return (
    <div className={["wrapper", s.banner_section].join(" ")}>
        <div className={s.banner_sub_section}>
            <div className={s.banner_block}>
                <p>Sale </p>
                <p>of the new season</p>
                <div>
                    <div className={s.banner_btn}>
                      <button>Sales</button>  
                      <button>More</button>
                    </div>
                </div>
            </div>
            <img src={banner} alt="banner" />
        </div>        
    </div>

  )
}