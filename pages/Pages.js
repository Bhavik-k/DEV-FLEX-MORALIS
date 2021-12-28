import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Project from '../components/Project';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { useRouter } from "next/dist/client/router";
import {ByMoralis, useMoralis, useMoralisQue, useMoralisQuery} from "react-moralis"

export default function Pages() {
    const router = useRouter()
    

    const { id } = router.query;
    const { data, loading, error} = useMoralisQuery(
        'User',
        (query) => 
            query
            .equalTo('ethAddress', id)
            ,
    );
    const results = [];
    
    const Socalmedia = [];
    var Projects = [];
    data.forEach(datum => {
        results = JSON.parse(datum.get('userdata'))
        Socalmedia = results.Socalmedia;
        Projects = results.Projects
    });
    console.log(Projects);
    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <div className="grid place-content-center">
                <div className="flex mt-3 justify-center items-center w-screen">
                    <div className="flex-1 border-2 border-gray-200 h-0"></div>

                    <Flip>
                        <img className="h-40 border-2 border-gray-200 rounded-full" src={results.PP}/>
                    </Flip>

                    <div className="flex-1 border-2 border-gray-200 h-0"></div>
                </div>
                <h1 className="mx-auto mt-3 text-4xl font-semibold font">{results.name}</h1>
                {/* Contact Icons */}
                <div className="flex mx-auto my-3">
                    <Zoom>
                    {Socalmedia.facebook && <a href={Socalmedia.facebook}><img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\facebook-brands.svg"/></a>}
                    </Zoom>
                    <Zoom>
                    {Socalmedia.github && <a href={Socalmedia.github}><img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\github-brands.svg"/></a>}
                    </Zoom>
                    <Zoom>
                    {Socalmedia.instagram && <a href={Socalmedia.instagram}><img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\instagram-brands.svg"/></a>}
                    </Zoom>
                    <Zoom>
                    {Socalmedia.linkedin && <a href={Socalmedia.linkedin}><img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\linkedin-brands.svg"/></a>}
                    </Zoom>
                    <Zoom>
                    {Socalmedia.twitter && <a href={Socalmedia.twitter}><img className="w-10 mx-2 cursor-pointer hover:scale-105 duration-200" src="\imges\svgs\twitter-brands.svg"/></a>}
                    </Zoom>
                </div>
                <div>
                    {Projects.map((item)=>(
                        <Fade left>
                            <Project
                            img={item.img}
                            name={item.name}
                            discription={item.discription}
                            link={item.link}/>
                        </Fade>
                    ))}
                    
                    
                    
                </div>
            </div>
        </div>
        
    )
}






