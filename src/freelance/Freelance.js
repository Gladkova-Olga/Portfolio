import React from 'react';
import style from './Freelance.module.scss';
import Title from "../common/components/title/Title";
import Flip from 'react-reveal/Flip';


function Freelance() {
    return (
        <div className={style.freelanceBlock}>
            <Flip top>
                <div className={` ${style.freelanceContainer}`}>
                    <Title text={"I'm available for Freelancer"}/>
                </div>
            </Flip>

        </div>
    )
        ;
}

export default Freelance;