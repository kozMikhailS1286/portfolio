import React from 'react'
import style from './Projects.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from './../assets/image/Todo.jpg';
import counterImage from './../assets/image/Counter.jpg';


function Projects() {
    const todo = {
        backgroundImage: `url(${todoImage})`,
    };

    const counter = {
        backgroundImage: `url(${counterImage})`,
    };

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Project"}/>
                <div className={style.works}>
                    <Project
                                style={todo}
                                title={"Project name1"}
                                description={"Description1"}
                    />
                    <Project
                                style={counter}
                                title={"Project name2"}
                                description={"Description2"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;