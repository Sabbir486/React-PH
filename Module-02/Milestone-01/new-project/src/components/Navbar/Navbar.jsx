import React from 'react';

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Contact", path: "/contact" }
];


const Navbar = () => {
    return (
        <nav>
            {/* <ul className='flex gap-x-20'>
                <li className='ml-7'><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
            </ul> */}

            <ul className='flex gap-x-20'>
                {
                    navigationData.map(route => <li className='ml-7'>
                        <a href={route.path}>{route.name}</a></li>)
                }
            </ul>
            
        </nav>
        
    );
};

export default Navbar;