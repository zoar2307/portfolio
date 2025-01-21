import { Assets, InfoList, SkillsAndTools } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20' id='about'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
            <h2 className='text-center  text-5xl font-Ovo'>About me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={Assets.user_img} alt='user' className='w-full rounded-3xl' />
                </div>

                <div className='flex-1 justify-between'>
                    <p className='mb-10  font-Ovo'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque earum mollitia
                        reprehenderit animi facere aperiam vel quis blanditiis porro nam, magni ut, ullam
                        voluptatum veritatis reiciendis. Animi recusandae optio consequatur sunt! Autem,
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                        {InfoList.map(({ icon, iconDark, title, description }, idx) => {

                            return (
                                <li key={idx}
                                    className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                                    <Image src={icon} alt={title} className='mt-3 w-7' />
                                    <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                    <p className='text-gray-600 text-sm'>{description}</p>
                                </li>
                            )
                        })}
                    </ul>

                    <h4 className='my-6 text-gray-700 font-Ovo'>Skills</h4>

                    <ul className='flex items-center gap-3 sm:justify-evenly'>
                        {SkillsAndTools.map(({ title, icon }, idx) => {
                            return (
                                <li key={idx}
                                    className='flex items-center justify-center w-12 sm:w-12 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                                    <Image src={icon} title={title} alt={title} className='w-5 sm:w-7' />
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default About