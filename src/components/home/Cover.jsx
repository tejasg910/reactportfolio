import React from 'react'


const Cover = () => {
    return (
        <div className='bg-indigo-800'>

            <div className='cover lg:h-[70vh]  '>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div className='flex flex-col sm:m-12 m-4  items-center text-white '>
                        <h2 className='text-5xl'>Hi, I am <span className='text-pink-500 font-bold'>Tejas</span></h2>
                        <h3 className='text-4xl mt-4'>I am a developer.....</h3>
                        <h4 className='text-2xl'>Working on websites</h4>

                    </div>
                    <div>
                        <a href="https://wa.me/message/RTSAM6DXXBBEL1" target={'_blank'}><button type="button" class="text-white bg-gradient-to-br px-12 from-purple-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-green-600 font-medium rounded-lg text-sm px-12 py-3 text-center mr-2 mb-2">Hire Me</button>
                        </a>

                    </div>

                    <div className='h-[70vh]  right-24 flex justify-center'>
                        <img src="developer.jpg" alt="" className='h-[100%]' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cover
