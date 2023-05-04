import React from 'react'
import style from './Footer.module.css'


function Footer() {
    return (
        <div className={style.footerBlock}>
            <h3> Михаил Козлов </h3>
            <div className={style.divContainer}>
                <div className={style.divContainerElement}>  </div>
                <div className={style.divContainerElement}>  </div>
                <div className={style.divContainerElement}>  </div>
                <div className={style.divContainerElement}>  </div>
            </div>
            <h4> © Все права защищены </h4>
        </div>
    )
}

export default Footer;