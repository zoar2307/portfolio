import { Assets, InfoList, SkillsAndTools } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const About = ({ isDarkMode }) => {
    return (
        <motion.div
            className='w-full px-[12%] py-10 scroll-mt-20 ' id='about'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'
            >Introduction</motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='text-center  text-5xl font-Ovo'>About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={Assets.user_img} alt='user' className='w-full h-full  rounded-3xl' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='flex-1 justify-between'>

                    <p className='mb-10  font-Ovo'>
                        A graduate of the Coding Academy with distinction—an intensive 640-hour bootcamp—demonstrating a track
                        record of success in fast-paced, deadline-driven environments.
                    </p>

                    <motion.ul
                        whileHover={{ scale: 1.05 }}
                        className='grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                        {InfoList.map(({ icon, iconDark, title, description }, idx) => {
                            return (
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    key={idx}
                                    className='border-[0.5px] border-gray-400 rounded-xl p-6 
                                     hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white 
                                     dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='mt-3 w-7' />
                                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                                </motion.li>
                            )
                        })}
                    </motion.ul>

                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Main skills</motion.h4>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className='flex items-center gap-3 flex-wrap sm:flex-nowrap justify-evenly'>
                        {SkillsAndTools.map(({ title, icon }, idx) => {
                            return (
                                <motion.li
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.9 + (idx / 10) }}
                                    key={idx}
                                    className='flex items-center justify-center w-12 sm:w-12 aspect-square border border-gray-400 rounded-lg
                                       hover:-translate-y-1 duration-500 hover:shadow-lg dark:bg-white'>
                                    <Image src={icon} title={title} alt={title} className='w-5 sm:w-7' />
                                </motion.li>
                            )
                        })}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div >
    )
}

export default About