'use client'

import { Assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            }
            else {
                setIsScroll(false)
            }
        })

    }, [])

    return (
        <>
            <div>
                <Image
                    src={Assets.header_background_gradient}
                    alt='header background pattern'
                    className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden' />
            </div>
            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
                ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
                <a href="#top">
                    <Image src={isDarkMode ? Assets.logo_light : Assets.logo} className='w-28 cursor-pointer mr-14' alt='zohar yevelkin logo' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
                 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My Work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>

                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? Assets.sun_icon : Assets.moon_light} alt='moon' className='w-6' />
                    </button>

                    <a href="#contact"
                        className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                        Contact
                        <Image src={isDarkMode ? Assets.arrow_icon_light : Assets.arrow_icon} className='w-3' alt='arrow' />
                    </a>

                    <button className='block md:hidden'>
                        <Image src={isDarkMode ? Assets.menu_white : Assets.menu_black} alt='menu' className='w-6 ' onClick={openMenu} />
                    </button>
                </div>

                {/* Mobile navbar */}

                <ul ref={sideMenuRef}
                    className='flex md:hidden flex-col gap-4 py-20 px-10 
                fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

                    <div className='absolute right-6 top-6'>
                        <Image src={isDarkMode ? Assets.close_white : Assets.close_black} alt='close' className='cursor-pointer w-5' onClick={closeMenu} />
                    </div>

                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar