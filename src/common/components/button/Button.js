import React from 'react';
import style from "./Button.module.scss"


function Button(props) {
    const buttonHandler = () => {

    }
    return (
        <button className={style.button} type={props.buttonType} onClick={buttonHandler}>
            {props.buttonName}
        </button>
    )

}
export default Button;