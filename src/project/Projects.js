import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import ProjectItem from "./projectItem/ProjectItem";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                <ProjectItem
                    title = {"Social network"}
                    description = {"It's simple social network"}
                    pictureDescription = {"Social network"}
                />
                    <ProjectItem
                        title = {"TodoList"}
                        description = {"Some description"}
                        pictureDescription = {"TodoList"}
                    />
                    <ProjectItem
                        title = {"Counter"}
                        description = {"One more description"}
                        pictureDescription = {"Counter"}
                    />
                </div>

            </div>

        </div>
    );
}

export default Projects;