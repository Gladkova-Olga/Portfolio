import React from 'react';
import style from './Skills.module.scss';
import SkillItem from "./skilItem/SkillItem";
import Title from "../common/components/title/Title";
import jsIcon from "../assets/images/java-script.svg"
import reactIcon from "../assets/images/react.svg"
import reduxIcon from "../assets/images/redux.svg"
import cssIcon from "../assets/images/css.svg"
import Flip from 'react-reveal/Flip';

function Skills() {
    const skillsItem = [
        {
            title: "JavaScript",
            description: "Our long-long-long-lon-long description1",
            icon: jsIcon
        },
        {
            title: "React",
            description: "Our description2",
            icon: reactIcon
        },
        {
            title: "Redux",
            description: "Our description3",
            icon: reduxIcon
        },
        {
            title: "CSS",
            description: "Our description4",
            icon: cssIcon
        },
    ]

    return (
        <div className={style.skillsBlock} id="skills">
            <div className={` ${style.skillsContainer}`}>
                <Flip top>
                    <Title text="Skills"/>
                </Flip>
                <div className={style.skills}>
                    {skillsItem.map((s) => {
                        return <SkillItem title={s.title} description={s.description} icon={s.icon}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Skills;