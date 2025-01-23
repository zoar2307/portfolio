import { Assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
            <div>
                <Image src={Assets.profile_img} alt='profile img' className='rounded-full w-32' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I'm Zohar Yevelkin <Image src={Assets.hand_icon} alt='hand icon' className='w-6' />
            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo' >Full stack / Front end developer.</h1>
            {/* <p className='max-w-2xl mx-auto font-Ovo'></p> */}
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact"
                    className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
                >contact me <Image src={Assets.right_arrow_white} alt='arrow icon' className='w-4' /></a>

                <a href="/ZOHAR-YEVELKIN-CV.pdf" download
                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 
                    bg-white dark:text-black'
                >my resume <Image src={Assets.download_icon} alt='download icon' className='w-4' /></a>
            </div>
        </div>
    )
}

export default Header