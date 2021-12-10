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

    return (
        <div className={style.skillsBlock} id="skills">
            <div className={` ${style.skillsContainer}`}>
                <Flip top>
                    <Title text="Skills"/>
                </Flip>
                <div className={style.skills}>
                    <SkillItem title={"JavaScript"}
                               description={"Our long-long-long-lon-long description1"}
                               icon={jsIcon}
                    />
                    <SkillItem title={"React"}
                               description={"Our description2"}
                               icon={reactIcon}
                    />
                    <SkillItem title={"Redux"}
                               description={"Our description3"}
                               icon={reduxIcon}
                    />
                    <SkillItem title={"CSS"}
                               description={"Our description4"}
                               icon={cssIcon}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;