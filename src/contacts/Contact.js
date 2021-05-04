import React from 'react';
import style from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";


function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>


                <form className={style.form}>
                    <h2 className={style.title}>Contact</h2>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="text" name="e-mail" placeholder="E-mail"/>
                    <textarea name="message" placeholder="Your message"></textarea>
                    <input type="submit" value="Send message"/>

                </form>

            </div>

        </div>
    );
}

export default Contact;