import React from 'react';
import style from './Nav.module.scss';
import {Link} from "react-scroll"

function Nav() {
    const navNames = ["Main", "Skills", "Projects", "Contacts"];
    return (
        <div className={style.nav}>
            {
                navNames.map((n) => {
                    return <Link activeClass={style.active}
                                 spy={true}
                                 smooth={true}
                                 offset={1}
                                 duration={300}
                                 to={n.toLowerCase()}>{n}
                    </Link>
                })
            }
        </div>
    );
}

export default Nav;