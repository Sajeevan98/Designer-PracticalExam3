import React, { useEffect } from 'react'
import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollToTopBtn = () => {

    const [isVisible, setIsVisble] = useState(false);

    useEffect(() => {
        const btnVisibility = () => {
            const scrolled = window.scrollY;
            // const halfPage = document.documentElement.scrollHeight / 2;
            setIsVisble(scrolled > 250);
        }

        window.addEventListener('scroll', btnVisibility);
        return () => window.removeEventListener('scroll', btnVisibility)
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true
        });
    }

    return (
        <>
            {isVisible && (
                <button
                    className='bg-yellow-400/75 fixed p-3 z-40 cursor-pointer right-2.5 bottom-2.5 hover:bg-yellow-400/100'
                    onClick={scrollToTop}
                >
                    <FaLongArrowAltUp className='text-white text-lg' />
                </button>
            )}
        </>
    )
}

export default ScrollToTopBtn