import React from 'react'
import style from './Work.module.css';


type PropsType = {
    title: string
    description: string
}
function Work(props: PropsType) {
    return (
        <div className={style.work}>
            <div className={style.icon}>  </div>
            <h3> {props.title} </h3>
            <span className={style.description}>
            {props.description}
            </span>
        </div>
    )
}

export default Work;