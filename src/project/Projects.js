import React from 'react';
import style from "./Projects.module.scss";
import ProjectItem from "./projectItem/ProjectItem";
import Title from "../common/components/title/Title";
import todoImage from "./../assets/images/ToDoList.png"
import socialNetworkImage from "./../assets/images/SocialNetwork.png"
import cardsImage from "./../assets/images/Cards.png"
import Flip from 'react-reveal/Flip';


function Projects() {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todoList = {
        backgroundImage: `url(${todoImage})`,
    };
    const cards = {
        backgroundImage: `url(${cardsImage})`,
    };
    const projectItems = [
        {
            style: socialNetwork,
            title: "Social network",
            description: "This is a simple social network. It was is my learning project." +
                "I used Typescript, React, Redux, SCSS. This project was developed by applying of " +
                "React class based components. " +
                "Also I used such libraries like redux-thunk, axios. ",
            projectLink: "https://github.com/Gladkova-Olga/SocialNetwork"
        },
        {
            style: todoList,
            title: "TodoList",
            description: "I used Typescript, React, Redux for developing the To Do List. " +
                "You can add, change, delete your tasks at different lists. It was a learning project. " +
                "It was developed by applying of React functional components. " +
                "I used axios, material-ui, redux-thunk, formic.",
            projectLink: "https://github.com/Gladkova-Olga/MyTodoList"
        },
        {
            style: cards,
            title: "Cards",
            description: "Cards is application which help to learn whatever you want. " +
                "You can make your own packs or use packs of other users, sort or delete them. " +
                "For every card you can grade your answer. I used Typescript, React, Redux. " +
                "It was developed by applying of React functional components. I used axios, formic, redux-thunk.",
            projectLink: "https://github.com/Gladkova-Olga/Cards"
        }
    ]

    return (
        <div className={style.projectsBlock} id="projects">
            <div className={` ${style.projectsContainer}`}>
                <Flip top>
                    <Title text="My Projects"/>
                </Flip>


                <div className={style.projects}>
                    {projectItems.map((p) => {
                        return <ProjectItem style={p.style} title={p.title}
                                            description={p.description} projectLink={p.projectLink}/>
                    })}

                </div>

            </div>


        </div>
    )
        ;
}

export default Projects;