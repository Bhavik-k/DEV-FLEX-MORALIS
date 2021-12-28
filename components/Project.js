import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

function Project({img, name, discription, link}) {
    return (
        <div className="md:flex md:h-max bg-gray-100 w-3/4 mx-auto rounded-lg shadow-md my-7">
            <img className="md:rounded-l-lg rounded-t-lg object-cover h-80 md:w-1/2" src={img}/>
            <div className="p-5 w-1/2">
                <h1 className="text-3xl font-semibold pb-3 truncate">{name}</h1>
                <p className="truncate">{discription}</p>
                {/* Visit button */}
                <a href={link} target={"_blank"}>
                    <div className="px-5 h-10 mt-3 w-max flex justify-center items-center border-2 border-gray-400 rounded-full shadow-md hover:scale-105 hover:shadow-lg duration-200 cursor-pointer">
                        <h1 className="">Open</h1>
                        <i className="fa fa-external-link ml-2"></i>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Project
