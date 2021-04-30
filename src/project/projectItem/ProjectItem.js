import React from 'react';
import style from './ProjectItem.module.css';



function ProjectItem(props) {
    return (
        <div className={style.projectItem}>
            <div className={style.picture}>
                <img href="" alt={props.pictureDescription}/>
            </div>
            <span className={style.title}>{props.title}</span>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
}

export default ProjectItem;