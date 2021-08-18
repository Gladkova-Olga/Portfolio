import React from 'react';
import style from './ProjectItem.module.css';


function ProjectItem(props) {
    return (
        <div className={style.projectItem}>
            <div className={style.pictureContainer} style={props.style}>
                {/*<img href="" alt={props.pictureDescription}/>*/}
                <a className={style.projectButton}>Look</a>

            </div>
            <div className={style.projectInfo}>
                <h6 className={style.projectTitle}>{props.title}</h6>
                <p className={style.projectText}>{props.description}</p>
            </div>

        </div>
    );
}

export default ProjectItem;