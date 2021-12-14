import React from 'react';
import style from './Footer.module.scss';
import FooterItem from "./FooterItem/FooterItem";
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faAt} from '@fortawesome/free-solid-svg-icons'
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <div className={style.footer}>
            <div className={` ${style.footerContainer}`}>
                <div className={style.footerItems}>
                    <FooterItem icon = {faAt} title = "E-mail" content = "olga_gladkova@tut.by"/>
                    <FooterItem icon = {faPhone} title = "Phone" content = "+37061942746"/>
                    <FooterItem icon = {faLocationArrow} title = "City" content = "Vilnius"/>
                </div>
                <div className={style.footerText}>&#169; And made with love All rights reserved</div>
            </div>
        </div>
    );
}

export default Footer;