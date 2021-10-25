
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'
import Typical from 'react-typical'
import React, { useEffect, useState } from "react"
import {Link as ScrollLink} from 'react-scroll';


export default function Header() {
    const[animated,setAnimated] = useState(false);

    useEffect(() => {
        setAnimated(true);
    },[])

    return (
        <div className="min-h-screen flex items-center justify-center text-white" id="Home"
        style={{
            background:'#000'
        }}>
            <div className="w-10/12 mx-auto flex flex-col items-center justify-between md:flex-row-reverse"> 
            <div className="md:w-3/6 w-full">
                <LazyLoadImage
                src={content.header.img}
                effect="blur"/>
            </div>
            <div className="font-dosis text-center md:text-left">
                <h2 className={`${animated ? "" : "translate-y-10 opacity-0" }  transform transition ease-in-out duration-2000 text-white text-6xl font-bold text-white md:text-5xl`}>
                    {content.header.text[0]}
                    <br />
                    {content.header.text[1]}
                </h2>
                <h1 className={`${animated ? "" : "translate-y-10 opacity-0" } transform transition ease-in-out duration-2000 font-bold text-4xl text-gray-500`} >{content.header.text[2]}
                <Typical
                    steps={content.header.typical}
                    loop={Infinity}
                    className="inline-block "/>
                </h1>
                <ScrollLink to={"Aboutme"} smooth={true}>
                <button className={`${animated ? "" : "translate-y-10 opacity-0" } transform transition ease-in-out duration-2000 animate-float bg-indigo-500 px-10 py-3 text-xl font-semibold uppercase mt-10 rounded-lg`}>
                    {content.header.btnText}
                </button>
                </ScrollLink>
            </div>
            </div>
        </div>
    )
}
