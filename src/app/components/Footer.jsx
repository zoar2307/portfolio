import { Assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={isDarkMode ? Assets.logo_light : Assets.logo} alt='zohar logo' className='w-28 mx-auto mb-2' />
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© Zohar Yevelkin. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/zoar2307">Github</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/zohar-yevelkin/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer