import React from 'react';
import style from './Contact.module.scss';
import Title from "../common/components/title/Title";
import Flip from 'react-reveal/Flip';
import FooterItem from "../footer/FooterItem/FooterItem";
import {faAt, faLocationArrow, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${style.contactContainer}`}>
                <Flip top>
                    <Title text={"Contact"}/>
                </Flip>
                <div className={style.contactsItems}>
                    <FooterItem icon={faAt} title="E-mail" content="volha.gladkova@gmail.com"/>
                    <FooterItem icon={faPhone} title="Phone" content="+37061942746"/>
                    <FooterItem icon={faLocationArrow} title="City" content="Vilnius"/>
                    <a href="https://www.linkedin.com/in/olga-gladkova-202294242/">
                        <FooterItem icon={faLinkedin} title="LinkedIn" content=""/>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Contact;