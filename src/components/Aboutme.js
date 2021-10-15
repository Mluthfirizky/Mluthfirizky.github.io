import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'
import React, { useEffect, useState } from "react"
import {Link as ScrollLink} from 'react-scroll';

export default function aboutme() {
    return (
        <div className="min-h-screen justify-center items-center flex flex-col">
            <h1 className="font-dosis font-bold text-5xl mb-3">About Me</h1>
            <div className="md:flex w-10/12 mx-auto font-dosis items-center flex-row-reverse">
                        <div className="w-8/12 md:w-6/12 mx-auto p-6 shadow-2xl rounded-full mt-3 mb-6">
                            <LazyLoadImage src={content.AboutMe.img}/>
                        </div>
                <div className=" md:text-left flex-col items-center text-center justify-center">
                         <h1 className="text-3xl font-bold">
                            {content.AboutMe.name}
                        </h1>
                        <p className="text-2xl mt-5 font-semibold md:w-10/12">
                            {content.AboutMe.text}
                        </p>
                        <ScrollLink to={"Body1"} smooth={true}>
                            <button className=" transform transition ease-in-out duration-2000 animate-float font-semibold text-white bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-xl">
                                Contact Me
                            </button>
                        </ScrollLink>
                </div>
            </div>
        </div>
    )
}
