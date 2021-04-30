import React from 'react';
import style from './SlillItem.module.css';



function SkillItem(props) {
    return (
        <div className={style.skillItem}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.discription}>
                {props.description}
            </span>
        </div>
    );
}

export default SkillItem;