import React from 'react';
import style from './Freelance.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/components/title/Title";



function Freelance() {
    return (
        <div className={style.freelanceBlock}>
            <div className={`${styleContainer.container} ${style.freelanceContainer }`}>
                <Title text = {"I'm available for Freelancer"}/>
            </div>

        </div>
    );
}

export default Freelance;