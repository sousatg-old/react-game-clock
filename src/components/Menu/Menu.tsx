import React, { SFC } from 'react';
import './Menu.css';

interface MenuProps {
    on: boolean;
}

const Menu: SFC<MenuProps> = ({on}) => {
    const classString = `menu ${on ? 'menu--open' : ''}`;
    return (
        <div className={classString}>
            <ul>
                <li>Fischer Blitz 5|0</li>
                <li>Delay Bullet 1|2</li>
                <li>Fischer 5|5</li>
                <li>Fischer rapid 10|5</li>
            </ul>

            <button>Start</button>
        </div>
    );
}

export default Menu;
