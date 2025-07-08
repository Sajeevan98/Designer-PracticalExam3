import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaBars, FaRegWindowClose  } from "react-icons/fa";
import { Logo } from './Logo';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { name: "HOME", hasDropdown: true, items: ["HOME 1", "HOME 2"] },
        { name: "PAGES", hasDropdown: true, items: ["PAGE 1", "PAGE 2"] },
        { name: "TRACKING", hasDropdown: false },
        { name: "SERVICES", hasDropdown: true, items: ["SERVICE 1", "SERVICE 2"] },
        { name: "BLOG", hasDropdown: true, items: ["BLOG LIST", "SINGLE BLOG"] },
    ];

    return (
        <>
            <header className="bg-white shadow-md md:shadow-none">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    {/* logo */}
                    <Logo />

                    {/* desktop nav */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link, index) =>
                            link.hasDropdown ? (
                                <div key={index} className="relative group">
                                    <button className="font-medium hover:text-yellow-400 hover:cursor-pointer px-4 py-3 tracking-wider text-base">
                                        <span className='flex flex-row items-center gap-1.5'>
                                            {link.name}
                                            <IoMdArrowDropdown className='text-lg' />
                                        </span>
                                    </button>
                                    <div className="absolute hidden group-hover:block bg-white shadow-md rounded w-40 z-50 mt-0.5 text-sm">
                                        {link.items.map((item, i) => (
                                            <Link
                                                key={i}
                                                to={`/${item.toLowerCase().replace(" ", "-")}`}
                                                className="block px-4 py-2 hover:bg-yellow-100"
                                            >
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={index}
                                    to={`/${link.name.toLowerCase()}`}
                                    className="font-medium hover:text-yellow-400"
                                >
                                    {link.name}
                                </Link>
                            )
                        )}

                        {/* Right Buttons */}
                        <div className="flex space-x-2 ml-6">
                            <Link
                                to="/quote"
                                className="px-4 py-3 bg-yellow-400 text-white rounded-sm hover:bg-yellow-500 font-medium text-base"
                            >
                                GET A QUOTE
                            </Link>
                            <Link
                                to="signin"
                                className="px-4 py-3 bg-black text-white rounded-sm opacity-100 hover:opacity-85 font-medium text-base"
                            >
                                SIGN IN
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className='text-2xl'>{menuOpen?<FaRegWindowClose /> : <FaBars />}</button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {menuOpen && (
                    <div className="md:hidden px-4 pb-4 space-y-2">
                        {navLinks.map((link, idx) =>
                            link.hasDropdown ? (
                                <details key={idx} className="bg-white border rounded">
                                    <summary className="px-4 py-2 font-medium">
                                        {link.name}
                                    </summary>
                                    <div className="ml-4 pb-2">
                                        {link.items.map((item, i) => (
                                            <Link
                                                key={i}
                                                to={`/${item.toLowerCase().replace(" ", "-")}`}
                                                className="block px-4 py-2 hover:bg-yellow-100 text-sm"
                                            >
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <Link
                                    key={idx}
                                    to={`/${link.name.toLowerCase()}`}
                                    className="block px-4 py-2 bg-white rounded font-medium border"
                                >
                                    {link.name}
                                </Link>
                            )
                        )}

                        <div className="space-y-2 pt-2">
                            <Link
                                 to="/quote"
                                className="block w-full text-center py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 font-medium text-base"
                            >
                                GET A QUOTE
                            </Link>
                            <Link
                                 to="signin"
                                className="block w-full text-center py-2 bg-black text-white rounded-sm opacity-100 hover:opacity-85 font-medium text-base"
                            >
                                SIGN IN
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default Navbar