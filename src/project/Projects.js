import React from 'react';
import style from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import ProjectItem from "./projectItem/ProjectItem";
import Title from "../common/components/title/Title";
import todoImage from "./../assets/images/todoList.jpeg"
import socialNetworkImage from "./../assets/images/Social-network.jpeg"


function Projects() {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todoList = {
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <div className={style.projectsBlock} id="projects">
            <div className={` ${style.projectsContainer}`}>
                <Title text="My Projects"/>
                <div className={style.projects}>
                    <ProjectItem
                        style={socialNetwork}
                        title={"Social network"}
                        description={"It's simple social network"}
                        projectLink={"https://github.com/Gladkova-Olga/SocialNetwork"}
                    />
                    <ProjectItem
                        style={todoList}
                        title={"TodoList"}
                        description={"Some description"}
                        projectLink={"https://github.com/Gladkova-Olga/MyTodoList"}
                    />
                </div>

            </div>

        </div>
    );
}

export default Projects;