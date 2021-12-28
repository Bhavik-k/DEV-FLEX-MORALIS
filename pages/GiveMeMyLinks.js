import QRCode from 'qrcode.react';
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import {ByMoralis, useMoralis, useMoralisQue, useMoralisQuery} from "react-moralis"
import Header from '../components/Header'
import { useRouter } from "next/dist/client/router";

function GiveMeMyLinks() {
    const router = useRouter()
    const {user, isAuthenticated} = useMoralis();
    const downloadQR = () => {
        const canvas = document.getElementById("123456");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "123456.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    const Visit = () =>{
        router.push(`http://localhost:3000/Pages?id=${id}`)
    }
    const { id } = router.query;
    const { data, loading, error} = useMoralisQuery(
        'User',
        (query) => 
            query
            .equalTo('ethAddress', id)
            ,
    );
    data.forEach(datum => {
        console.log(datum.get('userdata'));
    });
    return (
        <div>
            <Header/>
            <main className="px-8 mt-24 mb-24 ">
                <h1 className="w-max text-3xl mx-auto">Here is your Flex Page link</h1>
                <div className='flex max-w-xl mx-auto mt-3 px-3 py-4 rounded-md bg-gray-100'>
                    <h1 className="flex-1"
                    >{`http://localhost:3000/Pages?id=${id}`}</h1>
                    
                    <CopyToClipboard 
                    text={`http://localhost:3000/Pages?id=${id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </CopyToClipboard>
                </div>
                <div className='md:flex mt-3 px-3 py-4 justify-around '>
                    <div className='md:my-0 rounded-lg bg-gray-100 p-2 w-max mx-auto'>
                        <QRCode
                            className="rounded-lg "
                            id="123456"
                            value={`http://localhost:3000/Pages?id=${id}`}
                            size={290}
                            level={"M"}
                            includeMargin={false}
                        />
                    </div>
                    <div className='md:mt-0 mt-10 md:static absolute left-1/2 -translate-x-1/2 my-auto justify-around block'>

                        <a onClick={downloadQR}
                        className='cursor-pointer bg bg-gray-300 px-5 py-3 rounded-lg border-2 border-blue-500 text-blue-400 text-2xl font-semibold duration-200 shadow-lg hover:shadow-xl hover:scale-105'
                        > Download QR </a>
                        <button 
                        onClick={Visit}
                        className='ml-2 mt-6 md:ml-5 cursor-pointer bg bg-gray-300 px-5 py-3 rounded-lg border-2 border-blue-500 text-blue-400 text-2xl font-semibold duration-200 shadow-lg hover:shadow-xl hover:scale-105'>
                            Visit now
                        </button>
                    </div>
                </div>
                    
                </main>
        </div>
    )
}

export default GiveMeMyLinks

