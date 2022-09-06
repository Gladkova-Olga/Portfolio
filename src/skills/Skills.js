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
            icon: jsIcon
        },
        {
            title: "React",
            icon: reactIcon
        },
        {
            title: "Redux",
            icon: reduxIcon
        },
        {
            title: "CSS",
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
                        return <SkillItem title={s.title} icon={s.icon}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Skills;