import React from 'react';
import style from './ProjectItem.module.css';



function ProjectItem(props) {
    return (
        <div className={style.projectItem}>
            <div className={style.pictureContainer}>
                {/*<img href="" alt={props.pictureDescription}/>*/}
                <a className={style.projectButton}>Look</a>
            </div>
            <h6 className={style.projectTitle}>{props.title}</h6>
            <span className={style.projectText}>
                {props.description}
            </span>
        </div>
    );
}

export default ProjectItem;