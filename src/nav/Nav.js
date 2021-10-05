import React from 'react';
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="/src/main/Main.js#main">Main</a>
            <a href="/src/skills/Skills.js#skills">Skills</a>
            <a href="../project/Projects.js#projects">Projects</a>
            <a href="../contacts/Contact.js#contacts">Contacts</a>

        </div>
    );
}

export default Nav;