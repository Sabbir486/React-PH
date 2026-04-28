import React, { useState } from 'react';
import { Menu, X} from 'lucide-react';

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Contact", path: "/contact" }
];


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const links = navigationData.map(route => <li               className='ml-7 px-4 hover:bg-amber-500'>
                        <a href={route.path}>{route.name}</a></li>)

    return (
        <nav className='flex justify-between mx-10 mt-5'>

            {/* <ul className='flex gap-x-20'>
                <li className='ml-7'><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
            </ul> */}

            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ? 
                        <X className='md:hidden'></X> : 
                        <Menu className='md:hidden'></Menu>
                }
                
                <ul className={`md:hidden absolute duration-1000 text-black
                    ${open ? 'top-10' : '-top-40'}
                    bg-amber-200`}>
                    {links}
                </ul>
                <h3 className='ml-4'>Navbar</h3>
            </span>

            <ul className='md:flex hidden gap-x-20'>
                {
                    links
                }
            </ul>

            <button>Sign In</button>
            
        </nav>
        
    );
};

export default Navbar;