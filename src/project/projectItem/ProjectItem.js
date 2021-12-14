import React from 'react';
import style from './ProjectItem.module.scss';


function ProjectItem(props) {
    return (
        <div className={style.projectItem}>
            <a href={props.projectLink} className={style.projectButton}>
                <div className={style.pictureContainer} style={props.style}></div>
            </a>

            <div className={style.projectInfo}>
                <h6 className={style.projectTitle}>{props.title}</h6>
                <p className={style.projectDescription}>{props.description}</p>
            </div>

        </div>
    );
}

export default ProjectItem;