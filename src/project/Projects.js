import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import ProjectItem from "./projectItem/ProjectItem";
import Title from "../common/components/title/Title";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
               <Title text = "My Projects"/>

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