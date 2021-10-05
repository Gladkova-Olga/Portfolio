import React from 'react';
import style from './FooterItems.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function FooterItem(props) {
    return (
        <div className={style.footerItem}>
            <div className={style.footerItemIcon}><FontAwesomeIcon icon={props.icon}/> </div>
            <div className={style.footerItemText}>
                <div className={style.footerItemTitle}>{props.title}</div>
                <div className={style.footerItemDescription}>{props.content}</div>
            </div>

        </div>
    );
}

export default FooterItem;