import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'

export default function Use() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center' id="Use"
        style={{
            background:'#eeeeee'
        }}>
            
            <h1 className="font-dosis font-bold text-5xl">What i use</h1>
            <div className="flex flex-wrap justify-center mt-8">
                {content.stack.tech.map((tech, index) => {
                    return <span className={`${index % 2 === 0 ? "animate-float" : "animate-refloat"} w-40 h-40 bg-white shadow-2xl m-3 rounded-full  flex items-center p-6`}>
                        <LazyLoadImage src={tech.img} alt={tech.alt}/>
                    </span>
                })}
            </div>
            <p className="text-center w-11/12 text-xl mt-8 md:w-3/5">{content.stack.desc}</p>
        </div>
    )
}
