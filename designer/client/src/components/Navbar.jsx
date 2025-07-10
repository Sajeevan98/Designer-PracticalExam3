import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-scroll';
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { Logo } from './Logo';

const navLinks = [
    { name: "HOME", hasDropdown: true, items: [{ label: "MAIN", path: "home" }, { label: "WELCOME", path: "welcome" }] },
    { name: "PAGES", hasDropdown: true, items: [{ label: "TESTIMONIAL", path: "testimonial" }, { label: "PAGE 2", path: "page2" }, { label: "FOOTER", path: "footer" }] },
    { name: "TRACKING", hasDropdown: false, path: "news" },
    { name: "SERVICES", hasDropdown: true, items: [{ label: "SHIP SERVICE", path: "service" }, { label: "TRAIN SERVICE", path: "service" }, { label: "DRONE SERVICE", path: "service" }, { label: "TRUCK SERVICE", path: "service" }] },
    { name: "BLOG", hasDropdown: true, items: [{ label: "SINGLE BLOG", path: "single" }, { label: "BLOG LIST", path: "list" }] },
];

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <header className="bg-white shadow-md md:shadow-none">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <Logo />
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks && navLinks.map((link, index) =>
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
                                                to={item.path}
                                                className="block px-4 py-2 hover:bg-yellow-100 hover:cursor-pointer"
                                                smooth={true}
                                                duration={500}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={index}
                                    to={link.path}
                                    className="font-medium hover:text-yellow-400 hover:cursor-pointer"
                                    smooth={true}
                                    duration={500}
                                >
                                    {link.name}
                                </Link>
                            )
                        )}

                        {/* right buttons */}
                        <div className="flex space-x-2 gap-x-4 ">
                            <Link
                                to="quote"
                                className="px-4 py-3 bg-yellow-400 text-white rounded-sm hover:bg-yellow-500 font-medium text-base hover:cursor-pointer"
                            >
                                GET A QUOTE
                            </Link>
                            <Link
                                to="signin"
                                className="px-4 py-3 bg-black text-white rounded-sm opacity-100 hover:opacity-85 font-medium text-base hover:cursor-pointer"
                            >
                                SIGN IN
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile togglebar */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className='text-2xl'>{menuOpen ? <FaRegWindowClose /> : <FaBars />}</button>
                    </div>
                </div>


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
                                                to={item.path}
                                                className="block px-4 py-2 hover:bg-yellow-100 text-sm"
                                                smooth={true}
                                                duration={500}
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <Link
                                    key={idx}
                                    to={link.path}
                                    className="block px-4 py-2 bg-white rounded font-medium border"
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )
                        )}

                        <div className="space-y-2 pt-2">
                            <Link
                                to="quote"
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