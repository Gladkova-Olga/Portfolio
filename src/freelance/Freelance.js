import React from 'react';
import style from './Freelance.module.css';
import styleContainer from "../common/styles/Container.module.css";


function Freelance() {
    return (
        <div className={style.freelanceBlock}>
            <div className={`${styleContainer.container} ${style.freelanceContainer }`}>
                <h2 className={style.title}>I'm available for Freelancer </h2>
                <button className={style.button}>Hire me</button>
            </div>

        </div>
    );
}

export default Freelance;