import React from 'react';
import style from './Footer.module.scss';


function Footer() {
    return (
        <div className={style.footer}>
            <div className={` ${style.footerContainer}`}>
                <div className={style.footerText}>&#169; And made with love All rights reserved</div>
            </div>
        </div>
    );
}

export default Footer;