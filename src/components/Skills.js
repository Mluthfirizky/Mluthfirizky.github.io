
import "../styles/ProgressBar.css"
import React, { useEffect, useState } from "react"
import ProgressBar from 'react-animated-progress-bar';


export default function Skills ({width, percent}) {

    const[animated,setAnimated] = useState(false);

    useEffect(() => {
        setAnimated(true);
    },[])

    return (
        <div className="min-h-screen flex flex-col  justify-center mx-auto w-10/12 "id="Skills">
            <div className="font-dosis py-8 md:py-0">
                <div className="text-center">
                    <h1 className={`${animated ? "" : "translate-y-10 opacity-0" }  transform transition ease-out-in duration-2000 text-5xl font-dosis font-bold`}>My Skills</h1>
                    <h2 className={`${animated ? "" : "translate-y-10 opacity-0" }  transform transition ease-in-out duration-2000 text-2xl font-semibold`}>What i can do</h2>
                </div>
                
                <div className="md:justify-between flex flex-col md:flex-row items-center md:items-start mt-10">
                    <div className="">
                        <h2 className="text-3xl font-bold md:text-left text-center">Programming</h2>
                        
                        <h2 className="font-semibold mt-2">HTML, CSS</h2>
                        <div className className="-mt-5">
                        <ProgressBar
                            width="350px"
                            height="10px"
                            
                            rect
                            fontColor="gray"
                            percentage="70"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="#000"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#29c5f6',
                                poor: 'red',
                              }}
                        />
                        </div>
                        <h2 className="font-semibold">Swift</h2>
                        <div className className="-mt-5">
                        <ProgressBar
                            width="350px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="40"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="#000"
                            defColor={{
                                fair: '#ffd801',
                                good: 'yellow',
                                excellent: '#29c5f6',
                                poor: '#ffd801',
                              }}
                        />
                        </div>
                        <h2 className="font-semibold">Python</h2>
                        <div className className="-mt-5">
                        <ProgressBar
                            width="350px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="30"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="#000"
                            defColor={{
                                fair: '#ffd801',
                                good: 'yellow',
                                excellent: 'green',
                                poor: '#ffd801',
                              }}
                        />
                        </div>
                        <h2 className="font-semibold">Kotlin</h2>
                        <div className className="-mt-5">
                        <ProgressBar
                            width="350px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="40"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="#000"
                            defColor={{
                                fair: '#ffd801',
                                good: 'yellow',
                                excellent: 'green',
                                poor: '#ffd801',
                              }}
                        />
                        </div>
                       
                    </div>
                    <div className="items-center">
                        <h2 className="text-3xl font-bold  md:text-left text-center">Software</h2>
                        <h3 className="font-semibold mt-2">Photoshop</h3>
                        <div className className="-mt-5">
                        <ProgressBar
                            width="350px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="70"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="#000"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#29c5f6',
                                poor: 'red',
                              }}
                        />
                        </div>
                        <h3 className="font-semibold">Figma / Adobe XD</h3>
                        <div className className="-mt-5">
                        <ProgressBar
                            width="350px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="55"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="#000"
                            defColor={{
                                fair: 'orangered',
                                good: '#ffd801',
                                excellent: 'green',
                                poor: 'red',
                              }}
                        />
                        </div>

                    </div>
                    <div className="">
                        <h2 className="text-3xl font-bold  md:text-left text-center">Language</h2>
                        <h3 className="font-semibold mt-2">Indonesia</h3>
                        <div className className="-mt-5">
                        <ProgressBar
                            width="350px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="95"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="#000"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#29c5f6',
                                poor: 'red',
                              }}
                        />
                        </div>
                        <h3 className="font-semibold">English</h3>
                        <div className className="-mt-5">
                        <ProgressBar
                            width="350px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="70"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="#000"
                            defColor={{
                                fair: 'orangered',
                                good: 'yellow',
                                excellent: '#29c5f6',
                                poor: 'red',
                              }}
                        />
                        </div>
                        <h3 className="font-semibold">Arabic</h3>
                        <div className className="-mt-5">
                        <ProgressBar
                            width="350px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="50"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="#000"
                            defColor={{
                                fair: 'orangered',
                                good: '#ffd801',
                                excellent: '#091c29',
                                poor: '#ffd801',
                              }}
                        />
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
