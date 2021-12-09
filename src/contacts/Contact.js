import React from 'react';
import style from './Contact.module.scss';
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";


function Contact() {
    return (
        <div className={style.contactBlock} id = "contacts">
            <div className={`${style.contactContainer}`}>
                <Title text = {"Contact"}/>
                <form className={style.form}>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="text" name="e-mail" placeholder="E-mail"/>
                    <textarea name="message" placeholder="Your message" />
                </form>
                <Button buttonType = {"submit"} buttonName = "Send message"/>
            </div>
        </div>
    );
}

export default Contact;