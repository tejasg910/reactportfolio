import React from 'react'

import { Link } from 'react-router-dom';
const Socialme = () => {
    return (
        <div className='flex justify-center'>

            <div className='flex flex-wrap md:justify-center items-center space-x-8 w-[100vw]'>
                <a href="https://www.instagram.com/tejas_giri24/" target={'_blank'}>  <div className='flex  m-2 md:m-4 items-center border border-white rounded-md px-2 cursor-pointer transition-all hover:scale-110 duration-150   '>

                    <img src="instagram.png" alt="" />
                    <h2 className='text-4xl text-white font-bold '>Instagram</h2>
                </div>
                </a>
                <a href="https://github.com/tejasg910" target={'_blank'}> <div className='flex  m-2 md:m-4 items-center border border-white rounded-md px-2 cursor-pointer transition-all hover:scale-110 duration-150'>

                    <img src="github.png" alt="" />


                    <h2 className='text-4xl text-white font-bold '>Github</h2>
                </div>
                </a>

                <a href="https://www.linkedin.com/in/tejas-giri/" target={'_blank'}>
                    <div className='flex  m-2 md:m-4 items-center border border-white rounded-md px-2 cursor-pointer transition-all hover:scale-110 duration-150'>

                        <img src="linkedin.png" alt="" />

                        <h2 className='text-4xl text-white font-bold'>Linkedin</h2>
                    </div>
                </a>
                <a href={"https://twitter.com/alfacoder1"} target="_blank">  <div className='flex  m-2 md:m-4 items-center border border-white rounded-md px-2 cursor-pointer transition-all hover:scale-110 duration-150'>

                    <img src="twitter.png" alt="" />

                    <h2 className='text-4xl text-white font-bold'>Twitter</h2>
                </div>
                </a>

            </div>
        </div >
    )
}

export default Socialme
