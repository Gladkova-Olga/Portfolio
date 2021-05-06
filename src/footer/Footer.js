import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";
import FooterItem from "./FooterItem/FooterItem";

function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.footerText}>Gladkova Olga</h2>
                <div className={style.footerItems}>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                </div>
                <div className={style.footerText}>&#169; All rights reserved</div>
            </div>
        </div>
    );
}

export default Footer;