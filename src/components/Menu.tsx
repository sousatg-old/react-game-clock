import React, { SFC } from 'react';
import styled from 'styled-components';

const MenyStyle = styled.div<{open:boolean}>`
    position: absolute;
    top: 0px;
    left: -100%;
    /* width: 100vw; */
    height: 100vh;
    transition: left 0.3s;
    background-color: orange;

    ${({ open }) => open && `
        left: 0%;    
    `}
`

interface MenuProps {
    on: boolean;
}

const Menu: SFC<MenuProps> = ({on}:{on:boolean}) => {
    return (
        <MenyStyle open={on} >
            <ul>
                <li>Fischer Blitz 5|0</li>
                <li>Delay Bullet 1|2</li>
                <li>Fischer 5|5</li>
                <li>Fischer rapid 10|5</li>
            </ul>

            <button>Start</button>
        </MenyStyle>
    );
}

export default Menu;
