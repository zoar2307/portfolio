import { Assets, WorkData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20' id='work'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
            <h2 className='text-center  text-5xl font-Ovo'>My latest work</h2>
            {/* <p className='text-center max-w-2xl mx-auto mt-5 mb12 font-Ovo'></p> */}

            <div className='grid grid-cols-auto my-10 gap-5'>
                {WorkData.map(({ title, description, bgImage, link, githubLink }, idx) => {
                    return (
                        <div
                            key={idx}
                            style={{ backgroundImage: `url(${bgImage})` }}
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative group border border-gray-400 overflow-hidden'
                        >
                            <div className='bg-white w-10/12 border border-gray-400 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-between py-3 px-5 duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{title}</h2>
                                    <p className='text-sm to-gray-700'>{description}</p>
                                </div>
                                <div className='flex justify-between items-center gap-3'>
                                    <a href={link} className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-lg group-hover:bg-lime-50 transition cursor-pointer'>
                                        <Image src={Assets.send_icon} alt='send-icon' className='w-6' />
                                    </a>
                                    <a href={githubLink} className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-lg group-hover:bg-lime-50 transition cursor-pointer'>
                                        <Image src={Assets.github_icon} alt='github-icon' className='w-6' />
                                    </a >
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Work