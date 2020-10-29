import React from 'react';
import { CgMenuGridR } from 'react-icons/cg';

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul className="nav__list">
                        <li className="nav__list__item"><a href="https://www.google.com/">Gmail</a></li>
                        <li className="nav__list__item"><a href="https://www.google.com/">Images</a></li>
                    </ul>
                    <div className="nav__btn">
                        <CgMenuGridR />
                    </div>
                    <div className="user-img">
                        <a href="https://www.google.com/"><img src="https://media.metrolatam.com/2020/05/23/template10-0de684c9177c87fb3d1f83e92dc3eef4-400x400.jpg" alt="profile" title="profile" /></a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
