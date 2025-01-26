'use client'

import { useState } from "react";
import { motion } from 'motion/react'

const Contact = ({ isDarkMode }) => {

    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const textareaRegex = /^\S.*$/;

    const [result, setResult] = useState("");
    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [textareaValid, setTextareaValid] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const name = document.querySelector('.name')
        const email = document.querySelector('.email')
        const textarea = document.querySelector('.textarea')

        if (!nameRegex.test(name.value)) {
            setNameValid(true)
            setResult('Invalid form')
            return
        } else {
            setNameValid(false)
        }

        if (!emailRegex.test(email.value)) {
            setEmailValid(true)
            setResult('Invalid form')
            return
        } else {
            setEmailValid(false)
        }

        if (!textareaRegex.test(textarea.value)) {
            setTextareaValid(true)
            setResult('Invalid form')
            return
        } else {
            setTextareaValid(false)
        }

        const formData = new FormData(event.target);

        formData.append("access_key", process.env.FORM_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ backgroundImage: isDarkMode ? 'none' : `url('footer-bg-color.png')` }}
            className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] '
            id='contact'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
            <h2 className='text-center  text-5xl font-Ovo'>Get in touch</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb12 font-Ovo'>
                Have questions or feedback? I’d love to hear from you! Feel free to send me an email, and I’ll get back to you as soon as possible. Let’s connect!
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto' >
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <div className="flex flex-col ">
                        <input
                            className='name flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
                            type="text" placeholder='Enter your name' name='name' />
                        <p className={` text-red-500 font-Ovo text-sm  ${nameValid ? 'opacity-100' : 'opacity-0'}`}>Please enter valid name</p>

                    </div>

                    <div className="flex flex-col ">
                        <input
                            className='email flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90'
                            type="email" placeholder='Enter your email' name='email' />
                        <p className={` text-red-500 font-Ovo text-sm ${emailValid ? 'opacity-100' : 'opacity-0'}`}>Please enter valid email</p>

                    </div>

                </div>
                <div className="flex flex-col mb-6">
                    <textarea
                        className='textarea w-full p-4 outline-none  border-[0.5px] border-gray-400 rounded-md bg-white  resize-none  dark:bg-darkHover/30 dark:border-white/90'
                        rows={'6'} placeholder='Enter your message' name='message'>
                    </textarea>
                    <p className={` text-red-500 font-Ovo text-sm ${textareaValid ? 'opacity-100' : 'opacity-0'}`}>Please enter valid text</p>

                </div>


                <button
                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 
                    dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
                    type='submit'>Submit now</button>
                <p className='mt-4 text-center'>{result}</p>
            </form>
        </motion.div>
    )
}

export default Contact