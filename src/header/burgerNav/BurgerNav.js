import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {Link} from "react-scroll"

function BurgerNav() {
    const navNames = ["Main", "Skills", "Projects", "Contacts"];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMenuOpenChange = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className={style.burgerNav}>
            <div className={isMenuOpen ? `${style.burgerNavItems} ${style.show}` : `${style.burgerNavItems}`}>
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
            <div className={style.menuButton} onClick={isMenuOpenChange}>
                Menu
            </div>
        </div>
    );
}

export default BurgerNav;