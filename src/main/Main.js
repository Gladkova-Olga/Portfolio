import React from 'react';
import style from './Main.module.scss';
import meImg from './../assets/images/me.jpg'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-tilt'
import Flip from 'react-reveal/Flip';

function Main() {
    return (
        <div className={style.mainBlock} id="main">

            <div className={` ${style.mainContainer}`}>
                <div className={style.mainContent}>
                    <Flip top>
                        <div className={style.text}>
                            <span>Hi there!</span>
                            <h4 className={style.title}>I'm Olga Gladkova</h4>
                            <ReactTypingEffect className={style.description}
                                               text={"A frontend developer"}
                            />
                        </div>
                    </Flip>
                    <div className={style.photoContainer}>
                        <Tilt className="Tilt" options={{max: 15}}>
                            <img className={style.photo}
                                 src={meImg}
                                 alt={""}/>
                        </Tilt>
                    </div>
                </div>

                <div className={style.mainBlockLink}>
                    <a href="#contacts">Hire me</a>
                </div>
            </div>

        </div>
    );
}

export default Main;