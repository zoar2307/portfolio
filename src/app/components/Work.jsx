import { Assets, WorkData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Work = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-full px-[12%] py-10 scroll-mt-20' id='work'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
            <h2 className='text-center  text-5xl font-Ovo'>My latest work</h2>

            <div className='flex flex-col my-10 gap-5 flex-wrap  xl:grid xl:grid-cols-auto  '>
                {WorkData.map(({ title, description, fullDes, bgImage, link, githubLink, bgc }, idx) => {
                    return (
                        <div key={idx}>
                            <div
                                style={{ backgroundColor: isDarkMode ? bgc : '' }}
                                className=' bg-no-repeat bg-cover bg-center rounded-xl relative group border
                             border-gray-400 overflow-hidden w-full h-96 '
                            >

                                <div className='w-full h-full md:group-hover:blur-md md:group-hover:opacity-70 absolute'>
                                    <Image src={bgImage} width={1000} height={1000} className='w-full h-full object-contain' alt='project logo' />
                                </div>
                                <div className='hidden md:block w-full h-full md:group-hover:bg-black/70   duration-500 absolute left-0 top-0'></div>
                                <p className='absolute hidden md:block  -top-60 group-hover:top-5 duration-500 text-white px-14 lg:px-20 '>{fullDes}</p>


                                <div className='bg-white w-10/12 border border-gray-400 rounded-md absolute bottom-5  left-1/2 -translate-x-1/2 flex 
                            items-center justify-between py-3 px-5 duration-500 md:-bottom-20 group-hover:bottom-7'>
                                    <div>
                                        <h2 className='font-semibold dark:text-black'>{title}</h2>
                                        <p className='text-sm to-gray-700 dark:text-black/80'>{description}</p>
                                    </div>
                                    <div className='flex justify-between items-center gap-3'>
                                        <a href={link} target='_blank' className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-lg group-hover:bg-lime-50 transition cursor-pointer'>
                                            <Image src={Assets.send_icon} alt='send-icon' className='w-6' />
                                        </a>
                                        <a href={githubLink} target='_blank' className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-lg group-hover:bg-lime-50 transition cursor-pointer'>
                                            <Image src={Assets.github_icon} alt='github-icon' className='w-6' />
                                        </a >
                                    </div>
                                </div>

                            </div>
                            <p className='md:hidden my-5 '>{fullDes}</p>

                        </div>


                    )
                })}
            </div>
        </motion.div >
    )
}

export default Work