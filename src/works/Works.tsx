import React from 'react'
import style from './Works.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";


function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}> My works </h2>
                <div className={style.works}>
                    <Work title={"JS"}
                           description={"Description1"}
                    />
                    <Work title={"HTML & CSS"}
                           description={"Description2"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Works;