import React, {useContext} from 'react';
import ColorContext from './ColorContext';

function Header() {
    const {color} = useContext(ColorContext);

    return (
        <h1 className="header" style={{color: color }}>
            Welcome to the color App!
        </h1>
    )
}

export default Header;