import React from 'react';
import style from './Main.module.scss';
import meImg from './../assets/images/me.jpg'

function Main() {
    return (
        <div className={style.mainBlock} id = "main">
            <div className={` ${style.mainContainer}`}>
                <div className={style.mainContent}>
                    <div className={style.text}>
                        <span>Hi there!</span>
                        <h4 className={style.title}>I'm Olga Gladkova</h4>
                        <p className={style.description}>A frontend developer</p>
                    </div>
                    <div className={style.photoContainer}>
                        <img className={style.photo}
                             src = {meImg}
                             alt={""}/>
                    </div>
                </div>

                <div className={style.mainBlockLink}>
                    <a href="../contacts/Contact.js#contacts">Hire me</a>
                </div>
            </div>
        </div>
    );
}

export default Main;