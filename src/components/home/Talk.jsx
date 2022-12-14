import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai';


const Talk = () => {
    return (
        <div>

            <h2 className='text-white text-4xl  font-bold mx-4'>Let's Talk</h2>

            <div className=' flex flex-col lg:flex-row justify-center mt-4'>
                <div>
                    <form className='w-[100%] space-y-8'>
                        <div className='flex flex-col sm:flex-row  space-y-8 sm:space-y-0'>
                            <input type="text" placeholder='First Name' className='text-white bg-transparent outline-none border-b-2 mx-4 text-xl w-1/2' />
                            <input type="text" placeholder='Last Name' className='text-white bg-transparent outline-none border-b-2 mx-4 text-xl w-1/2' />
                        </div>
                        <div>
                            <input type="email" placeholder='Email' className='text-white bg-transparent outline-none border-b-2 mx-4 text-xl w-[90%] ' />

                        </div>
                        <div>
                            <input type="text" placeholder='Subject' className='text-white bg-transparent outline-none border-b-2 mx-4 text-xl w-[90%] ' />

                        </div>
                        <div>
                            <textarea className='w-[90%]  bg-transparent text-white outline-none border-b-2 mx-4 text-xl' name="message" id="" cols="30" rows="5" placeholder='Message'></textarea>
                        </div>
                        <div className='flex justify-center'>
                            <button class="w-[50%]  bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-4 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                            >
                                Send
                            </button>
                        </div>

                    </form>
                </div>
                <div className='space-y-4 flex flex-col justify-center items-center m-4 lg:w-[600px]'>
                    <div className='border rounded-md text-white p-4 w-full sm:w-1/2'>
                        <h3 className='text-2xl'>tejasgiri910@gmail.com</h3>
                        <div className='flex  items-center'>
                            <HiOutlineMail className='text-8xl' />
                            <p>Email Address</p>

                        </div>
                    </div>
                    <div className='border rounded-md text-white p-4 w-full sm:w-1/2'>
                        <h3 className='text-2xl'>+917620529876</h3>
                        <div className='flex  items-center'>
                            <AiOutlineWhatsApp className='text-8xl' />
                            <p>Whatsapp</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Talk
