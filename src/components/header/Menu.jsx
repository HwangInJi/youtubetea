import React from 'react';
import { headerMenus, searchKeyword } from '../../data/menu';
import ScrollToTopLink from '../section/ScrollToTopLink'; // ScrollToTopLink 컴포넌트를 가져옵니다.

const Menu = () => {
    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {headerMenus.map((menu, key) => (
                    <li key={key}>
                        <ScrollToTopLink to={menu.src}>
                            {menu.icon}<span>{menu.title}</span>
                        </ScrollToTopLink>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                {searchKeyword.map((keyword, key) => (
                    <li key={key}>
                        <ScrollToTopLink to={keyword.src}>
                            {keyword.icon}<span>{keyword.title}</span>
                        </ScrollToTopLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
