import React from 'react';
import style from './Freelance.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";


function Freelance() {
    return (
        <div className={style.freelanceBlock}>
            <div className={`${styleContainer.container} ${style.freelanceContainer }`}>
                <Title text = {"I'm available for Freelancer"}/>
                <div className={style.buttonContainer}>
                   <Button buttonType= {''} buttonName = {"Hire me"}/>
                </div>

            </div>

        </div>
    );
}

export default Freelance;