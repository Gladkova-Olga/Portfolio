import React from 'react';
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import meImg from './../assets/images/me.jpg'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Hi there!</span>
                    <h4 className={style.title}>I'm Olga Gladkova</h4>
                    <p className={style.description}>A frontend developer</p>
                </div>
                <div >
                    <img className={style.photo}src = {meImg} alt={""}/>
                </div>
            </div>
        </div>
    );
}

export default Main;