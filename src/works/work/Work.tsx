import React from 'react'
import style from './Work.module.css';


type PropsType = {
    title: string
    description: string
}
function Work(props: PropsType) {
    return (
        <div>
            <div className={style.container}>
                <img src={'https://sun9-52.userapi.com/impf/c626828/v626828393/6dc0/jQxeR1HAOwM.jpg?size=320x213&quality=96&crop=2,0,1275,849&sign=ea7bccb558751e189cdc3be1072ee8ce&c_uniq_tag=qHI5gOAaGexiN5NJspym3K7rzdOIjavl7eajqTgLKcc&type=album'} alt="Картинка"/>
                <button className={style.btn}> Смотреть </button>
            </div>
            <span > {props.title} </span>
            <div className={style.description}>
                {props.description}
            </div>
        </div>
    )
}

export default Work;