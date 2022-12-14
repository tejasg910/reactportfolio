import React from 'react'

const Projects = () => {
    return (
        <div className='bg-indigo-800'>
            <h2 className='text-4xl font-bold text-white mx-4 '>Projects</h2>
            <div className='flex flex-col lg:flex-row  items-center'>

                <div className='w-ful lg:w-1/2 m-4'>
                    <div>
                        <img className='h-80' src="bookabook.PNG" alt="" />
                    </div>
                    <div class="flex justify-center m-2">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >Details</button>
                    </div>
                </div>
                <div className='w-ful lg:w-1/2 m-4'>
                    <div>
                        <img className='h-80' src="university.PNG" alt="" />
                    </div>
                    <div class="flex justify-center m-2">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >Details</button>
                    </div>
                </div>

            </div>
            <div className='flex flex-col lg:flex-row  items-center'>

                <div className='w-ful object-fill lg:w-1/2 '>
                    <div>
                        <img className='h-80 w-[90%] m-auto' src="weather.PNG" alt="" />
                    </div>
                    <div class="flex justify-center m-2">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >Details</button>
                    </div>
                </div>
                <div className='w-ful lg:w-1/2 m-4'>
                    <div>
                        <img className='h-80' src="shoping.PNG" alt="" />
                    </div>
                    <div class="flex justify-center m-2">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >Details</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
