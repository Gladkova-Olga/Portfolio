import React from 'react';
import style from './Main.module.scss';
import meImg from './../assets/images/me.jpg'
import ReactTypingEffect from 'react-typing-effect';

function Main() {
    return (
        <div className={style.mainBlock} id="main">

            <div className={` ${style.mainContainer}`}>
                <div className={style.mainContent}>
                    <div className={style.text}>
                        <span>Hi there!</span>
                        <h4 className={style.title}>I'm Olga Gladkova</h4>
                        <ReactTypingEffect className={style.description}
                            text={"A frontend developer"}
                        />
                    </div>
                    <div className={style.photoContainer}>
                        <img className={style.photo}
                             src={meImg}
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