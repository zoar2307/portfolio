'use client'

import { useState } from "react";

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "6b1f173a-766d-487b-b929-7814967f6a3f");

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
        <div
            style={{ backgroundImage: `url('footer-bg-color.png')` }}
            className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto]'
            id='contact'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
            <h2 className='text-center  text-5xl font-Ovo'>Get in touch</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb12 font-Ovo'>
                Have questions or feedback? I’d love to hear from you! Feel free to send me an email, and I’ll get back to you as soon as possible. Let’s connect!
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto' >
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                        type="text" placeholder='Enter your name' required name='name' />

                    <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                        type="email" placeholder='Enter your email' required name='email' />
                </div>
                <textarea className='w-full p-4 outline-none  border-[0.5px] border-gray-400 rounded-md bg-white mb-6 resize-none'
                    rows={'6'} placeholder='Enter your message' required name='message'>

                </textarea>

                <button
                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
                    type='submit'>Send</button>
                <p className='mt-4 text-center'>{result}</p>
            </form>
        </div>
    )
}

export default Contact