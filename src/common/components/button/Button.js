import React from 'react';
import style from "./Button.module.scss"


function Button(props) {
    return (
        <button className={style.button} type={props.buttonType}>
            {props.buttonName}
        </button>
    )

}
export default Button;