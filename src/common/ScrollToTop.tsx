import { ArrowUp } from 'lucide-react'
import { useState } from 'react';

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        scrolled > 1000 ? setVisible(true) : ""
        scrolled < 1000 ? setVisible(false) : ""

    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (

        <div onClick={scrollToTop} className={`${visible ? "fixed" : "hidden"} fixed z-30 flex items-center justify-center w-16 h-16 rounded-full bottom-10 bg-secondary right-5 animate-bounce hover:cursor-pointer  `}>
            <ArrowUp size={40} color="#ffffff" />
        </div>
    )
}

export default ScrollToTop
