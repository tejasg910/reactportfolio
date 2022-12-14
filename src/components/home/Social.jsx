import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
const Social = () => {
  return (
    <div>
          <div>

<BsInstagram className='hover:opacity-30 transition-all duration-300 text-pink-400 text-5xl'/>
    </div>
    <div>
    <AiFillGithub className='hover:opacity-30 transition-all duration-400  text-5xl'/>

    </div>
    <div>
    <AiFillLinkedin className='hover:opacity-30 transition-all text-blue-500 duration-400  text-5xl'/>

    </div>
      
    </div>
  )
}

export default Social
