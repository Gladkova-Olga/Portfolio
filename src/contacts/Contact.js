import React from 'react';
import style from './Contact.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";


function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title text = {"Contact"}/>
                <form className={style.form}>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="text" name="e-mail" placeholder="E-mail"/>
                    <textarea name="message" placeholder="Your message" ></textarea>
                </form>
                <Button buttonType = {"submit"} buttonName = "Send message"/>
            </div>
        </div>
    );
}

export default Contact;