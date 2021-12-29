import React from 'react'
import Fade from 'react-reveal/Fade';

function Header() {
    return (
        <div className='flex py-3 px-5'>
            
            {/* <img className="md:h-20 h-14"
                src="Logo.jpg"/> */}
            <img className="h-16 shadow-black drop-shadow-sm" src="transparentLogo as Smart Object-1 - Copy.png"/>
            <h1 className="md:ml-5 text-4xl font-semibold my-auto ml-3">DevFlex</h1>
            
            
            <div className="ml-auto my-auto px-5 h-10 flex justify-center items-center border-2 border-gray-400 rounded-full shadow-md hover:scale-105 hover:shadow-lg duration-200 cursor-pointer">
                <h1 className="">Make a Flex Page</h1>
            </div>
            
        </div>
    )
}

export default Header
