import React from 'react'

const Aboutme = () => {
    return (
        <div className='flex mt-4 justify-around items-center'>
            <div>
                <img className='w-1/2 hidden md:block' src="aboutme.png" alt="" />
            </div>
            <div>
                <h2 className='text-4xl mb-4'>I create powerful websites...</h2>
                <p>I love to create dynamic website which are more complex at backend level..</p>
                <p>And still working on it.</p>

            </div>
        </div>
    )
}

export default Aboutme
