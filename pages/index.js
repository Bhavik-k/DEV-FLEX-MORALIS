import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import { useMoralis } from 'react-moralis';

export default function Home() {
  // give the parrent div 
  // css of
  // ```
  // margin-right: auto;
  // margin-left: auto;
  // ```
  // i guess that should work
  const router = useRouter()
  const { user, setUserData, authenticate, logout, isAuthenticated } = useMoralis();

  const [namanake, setnamanake] = useState('');
  const [PP, setPP] = useState('');
  const [email, setemail] = useState('');
  
  const [facebook, setfacebook] = useState('');
  const [instagram, setinstagram] = useState('');
  const [linkedin, setlinkedin] = useState('');
  const [github, setgithub] = useState('');
  const [twitter, settwitter] = useState('');
  const [ProjectsList, setProjectsList] = useState([{ name: "", discription: "", img:"" , link:""}]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...ProjectsList];
    list[index][name] = value;
    setProjectsList(list);
  };
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...ProjectsList];
    list.splice(index, 1);
    setProjectsList(list);
  };
  // handle click event of the Add button
  const handleAddClick = () => {
    setProjectsList([...ProjectsList, { name: "", discription: "", link:"" }]);
  };

  const userdata123 ={
    name: namanake,
    PP: PP,
    Socalmedia: {
      facebook: facebook,
      instagram: instagram,
      linkedin: linkedin,
      github: github,
      twitter: twitter
    },
    Projects: ProjectsList
  }  

  const setData = () =>{
    const userdata = JSON.stringify(userdata123)
    
    setUserData({
      userdata,
    })
    router.push('/GiveMeMyLinks?id='+user.get('ethAddress'))
    
  } 

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className=" ">
        <img className="w-3/4 max-w-3xl mx-auto mt-7" src="./imges/HomeStock.png"/>
        <h1 className="w-3/4 text-3xl mx-auto">Make your own Flex Page</h1>
        <p className="w-3/4 mt-3 text-lg mx-auto">make a quick accacable website with a qrcode whick showcases all your projects. Inn just couple of minutes</p>
      </main>
      
      <main className="px-8 mt-10 mb-48 mx-auto">

        {isAuthenticated ? <div>
          <div onClick={logout}
          className='mx-auto px-5 h-7 w-max flex justify-center items-center border-red-500 text-red-500 font-semibold border  rounded-full shadow-md hover:scale-105 hover:shadow-lg duration-200 cursor-pointer'
          >Log out</div>
          <input className="h-10 my-2 w-full border px-3 rounded-md outline-none" placeholder="Name" value={namanake} onChange={e => setnamanake(e.target.value)}></input>
        <input className="h-10 my-2 w-full border px-3 rounded-md outline-none" placeholder="Profile Picture URL" value={PP} onChange={e => setPP(e.target.value)}></input>
        <input className="h-10 my-2 w-full border px-3 rounded-md outline-none" placeholder="Email" value={email} onChange={e => setemail(e.target.value)}></input>
        {/* Heading */}
        <h1 className="text-xl font-semibold mt-5">Socal Media</h1>
        <h1 className="text-md font-semibold ">Leave empty if you dont have one</h1>
        
        <div className="md:flex">
          <input placeholder="Facebook" className="h-10 my-2 w-full border px-3 rounded-md outline-none" value={facebook} onChange={e => setfacebook(e.target.value)}></input>
          <input placeholder="Instagram" className="h-10 md:ml-4 my-2 w-full border px-3 rounded-md outline-none" value={instagram} onChange={e => setinstagram(e.target.value)}></input>
        </div>

        <div className="md:flex">
          <input placeholder="Linkedin" className="h-10 my-2 w-full border px-3 rounded-md outline-none" value={linkedin} onChange={e => setlinkedin(e.target.value)}></input>
          <input placeholder="GitHub" className="h-10 md:ml-4 my-2 w-full border px-3 rounded-md outline-none" value={github} onChange={e => setgithub(e.target.value)}></input>
        </div>

        <input placeholder="Twitter" className="h-10 my-2 w-full border px-3 rounded-md outline-none" value={twitter} onChange={e => settwitter(e.target.value)}></input>
        
        {/* Heading */}
        
        <h1 className="text-xl font-semibold mt-5">Projects</h1>

        {ProjectsList.map((x, i) => {
          return (
            <div>
              <div className="flex">
                <input
                    className="ml10 h-10 my-2 w-full border px-3 rounded-md outline-none mx-2"
                    name="name"
                    placeholder="Enter First Name"
                    value={x.name}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <h1></h1>
                <input
                  className="ml10 h-10 my-2 w-full border px-3 rounded-md outline-none mx-2"
                  name="discription"
                  placeholder="discription"
                  value={x.discription}
                  onChange={e => handleInputChange(e, i)}
                />
                <input
                  className="ml10 h-10 my-2 w-full border px-3 rounded-md outline-none mx-2"
                  name="img"
                  placeholder="Image URL "
                  value={x.img}
                  onChange={e => handleInputChange(e, i)}
                />
                <input
                  className="ml10 h-10 my-2 w-full border px-3 rounded-md outline-none mx-2"
                  name="link"
                  placeholder="URL of project"
                  value={x.link}
                  onChange={e => handleInputChange(e, i)}
                />
              </div>
              <div className="btn-box">
                {ProjectsList.length !== 1 && <button
                  className="mr10"
                  onClick={() => handleRemoveClick(i)} className=" px-5 h-7 flex justify-center items-center border-red-500 text-red-500 font-semibold border  rounded-full shadow-md hover:scale-105 hover:shadow-lg duration-200 cursor-pointer">Remove</button>}
                {ProjectsList.length - 1 === i && <button onClick={handleAddClick} className=" mx-auto my-5 px-10 h-10 flex justify-center items-center border rounded-full shadow-md hover:scale-105 hover:shadow-lg duration-200 cursor-pointer">Add</button>}
              </div>
            </div>
          );
        })}
        
        <div onClick={setData}
          className='mx-auto px-10 py-3 w-max flex text-xl justify-center items-center border-blue-500 text-blue-500 font-semibold border  rounded-full shadow-md hover:scale-105 hover:shadow-lg duration-200 cursor-pointer'
        >Update Data</div>

        </div> : <div onClick={authenticate}
        className='mx-auto px-10 py-3 w-max flex text-xl justify-center items-center border-blue-500 text-blue-500 font-semibold border  rounded-full shadow-md hover:scale-105 hover:shadow-lg duration-200 cursor-pointer'
        >Log in</div>}
        
      </main>
        {/* <div onClick={send}>
          LOL
        </div> */}
      
    </div>
  )
}
