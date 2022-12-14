import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Aboutme from './about/Aboutme';
import Education from './about/Education';
import Skills from './about/Skills';
import Socialme from './about/Socialme';
import Social from './Social';

const About = () => {


  const [border, setBorder] = useState({
    about: true,
    education: false,
    social: false,
    skill: false
  });

  return (
    <div className='text-white'>
      <h2 className='text-4xl font-bold m-8'>About Me</h2>
      <div >
        <ul className='flex list-none space-x-4 justify-around '>
          <li className={`text-xl ${border.about ? "border-b-2" : null} cursor-pointer`} onClick={() => { setBorder({ about: true, education: false, social: false, skill: false }) }} >About</li>
          <li className={`text-xl ${border.education ? "border-b-2" : null} cursor-pointer`} onClick={() => { setBorder({ about: false, education: true, social: false, skill: false }) }} >Education</li>
          <li className={`text-xl ${border.social ? "border-b-2" : null} cursor-pointer`} onClick={() => { setBorder({ about: false, education: false, social: true, skill: false }) }} >Social</li>
          <li className={`text-xl ${border.skill ? "border-b-2" : null} cursor-pointer`} onClick={() => { setBorder({ about: false, education: false, social: false, skill: true }) }} >Skills</li>

        </ul>


      </div>
      <div className='h-72 flex items-center'>
        {border.about && <div  >


          <Aboutme />
        </div>}
        {border.education && <div  >


          <Education />
        </div>}
        {border.social && <div  >


          <Socialme />
        </div>}
        {border.skill && <div  >


          <Skills />
        </div>}
      </div>
    </div >
  )
}

export default About
