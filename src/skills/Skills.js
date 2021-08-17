import React from 'react';
import style from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import SkillItem from "./skilItem/SkillItem";
import Title from "../common/components/title/Title";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text = "Skills"/>
                <div className={style.skills}>
                    <SkillItem title = {"JS"} description = {"Our long-long-long-lon-long description1"}/>
                    <SkillItem title = {"CSS & HTML"} description = {"Our description2"}/>
                    <SkillItem title = {"React"} description = {"Our description3"}/>
                </div>
            </div>

        </div>
    );
}

export default Skills;