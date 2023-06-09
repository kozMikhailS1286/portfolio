import React from 'react'
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}> Skills </h2>
                <div className={style.skills}>
                    <Skill title={"JS"}
                           description={"Description1"}
                    />
                    <Skill title={"HTML & CSS"}
                           description={"Description2"}
                    />
                    <Skill title={"React"}
                           description={"Description3"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills;