import React from 'react';
import style from './Contact.module.scss';
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";
import Flip from 'react-reveal/Flip';

function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${style.contactContainer}`}>
                <Flip top>
                    <Title text={"Contact"}/>
                </Flip>
                <form className={style.form}>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="text" name="e-mail" placeholder="E-mail"/>
                    <textarea name="message" placeholder="Your message"/>
                    <Button buttonType={"submit"} buttonName="Send message"/>
                </form>


            </div>
        </div>
    );
}

export default Contact;