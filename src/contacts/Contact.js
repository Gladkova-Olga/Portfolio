import React from 'react';
import style from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";


function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.form}>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="text" name="e-mail" placeholder="E-mail"/>
                    <textarea name="message" placeholder="Your message" ></textarea>
                </form>
                <button type = "submit">Send message</button>
            </div>
        </div>
    );
}

export default Contact;