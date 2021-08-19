import React from 'react';
import style from './Title.module.scss'


function Title(props) {
    return (
        <div className={style.title}>
            <h4>{props.text} </h4>
        </div>
    );
}

export default Title;