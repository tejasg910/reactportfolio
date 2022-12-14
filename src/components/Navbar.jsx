import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-indigo-800 shadow-md text-white'>
            <header className=" body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

                        <span className="ml-3 text-xl">PORTFOLIO</span>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <NavLink to={'/'} activeclassName="active-link" className="mr-5 hover:text-gray-900 ">HOME</NavLink>
                        <NavLink to={'/contact'} activeclassName="active-link" className='mr-5  hover:text-gray-900'>CONTACT</NavLink>
                        <NavLink to={'/skills'} activeclassName="active-link" className="mr-5 hover:text-gray-900">SKILLS</NavLink>
                        <NavLink to={"/projects"} activeclassName="active-link" className="mr-5 hover:text-gray-900">PROJECTS</NavLink>
                    </nav>
                    <button className="inline-flex items-center bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" ><a href="MERNSTACKresume.pdf" target={"_blank"}> RESUME</a>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>

        </div>
    )
}

export default Navbar
