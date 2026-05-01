// import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/mobiles'>Mobiles</Link>
                <Link to='/laptops'>Laptops</Link>
                <Link to='/'>Home</Link>
            </nav>
        </div>
    );
};

export default Header;