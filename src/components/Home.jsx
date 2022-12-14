import React from 'react'
import About from './home/About'
import Cover from './home/Cover'
import Project from './home/Project'
import Talk from './home/Talk'
import Testimonials from './home/Testimonials'

const Home = () => {
  return (
    <div className='bg-indigo-800'>
      <Cover />
      <About />
      <Project />
      <Testimonials />
      <Talk />
    </div>
  )
}

export default Home
