import React from 'react'
import style from './Project.module.scss';


type PropsType = {
    title: string
    description: string
    style?: any
}
function Project(props: PropsType) {
    return (
        <div>
            <div className={style.container}>
                <div className={style.image} style={props.style}>
                    <a href={''}> <button className={style.btn}> Смотреть </button> </a>
                </div>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}> {props.title} </h3>
                <span className={style.description}>
                {props.description}
            </span></div>
        </div>
    )
}

export default Project;