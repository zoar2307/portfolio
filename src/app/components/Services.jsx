import { ServicesData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20' id='services'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
            <h2 className='text-center  text-5xl font-Ovo'>My services</h2>
            {/* <p className='text-center max-w-2xl mx-auto mt-5 mb12 font-Ovo'></p> */}

            <div className='grid sm:grid-cols-2  lg:grid-cols-4 gap-6 my-10'>
                {ServicesData.map(({ icon, title, description }, idx) => {
                    return (
                        <div key={idx} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-xl hover:-translate-y-1 
                        duration-300 dark:hover:bg-darkHover '>
                            <Image src={icon} alt={title} className='w-10' />
                            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default Services