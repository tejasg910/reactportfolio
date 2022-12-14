import React from 'react'

const Skills = () => {
    return (
        <div className='flex flex-col justify-center items-center w-[100vw]'>

            <div className='w-[70vw] md:w-[50vw] '>


                <div class="w-full bg-gray-200 h-1 m-4">
                    <div class="bg-red-500 h-1" style={{ width: "90%" }}></div>
                    <p className='text-center'>EXPRESS JS</p>
                </div>
            </div>
            <div className='w-[70vw] md:w-[50vw] '>


                <div class="w-full bg-gray-200 h-1 m-4">
                    <div class="bg-green-500 h-1" style={{ width: "85%" }}></div>
                    <p className='text-center'>REACT JS </p>
                </div>
            </div>
            <div className='w-[70vw] md:w-[50vw] '>


                <div class="w-full bg-gray-200 h-1 m-4">
                    <div class="bg-indigo-500 h-1" style={{ width: "80%" }}></div>
                    <p className='text-center'>NODE JS </p>
                </div>
            </div>
            <div className='w-[70vw] md:w-[50vw] '>


                <div class="w-full bg-gray-200 h-1 m-4">
                    <div class="bg-pink-500 h-1" style={{ width: "75%" }}></div>
                    <p className='text-center'>MONGODB</p>
                </div>
            </div>



        </div >
    )
}

export default Skills
