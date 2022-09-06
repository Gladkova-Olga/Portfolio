import React from 'react';
import style from './SlillItem.module.scss';


function SkillItem(props) {
    return (
        <div className={style.skillItem}>
            <div className={style.iconContainer}>
                <img className={style.icon} src={props.icon} alt={""}/>
            </div>
            <h6 className={style.skillTitle}>{props.title}</h6>
            {/*<span className={style.description}>*/}
            {/*    {props.description}*/}
            {/*</span>*/}
        </div>
    );
}

export default SkillItem;