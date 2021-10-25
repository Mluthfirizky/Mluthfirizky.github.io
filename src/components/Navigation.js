import content from "../content"
import React, { Component }  from 'react';
import { Link as ScrollLink } from "react-scroll";

export default function navigation() {


    return (
        <div
        style={{
            background: '#091c29'
            
        }}>
            <div className = "flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
                <h1 className="md:text-3xl text-2xl font-bold">{content.nav.logo} <span className="md:w-3 md:h-3 w-2 h-2 bg-blue-700 rounded-full inline-block"></span></h1>
                <div className="invisible md:visible">
                    {content.nav.links.map((links) => {
                        
                     return <ScrollLink smooth={true} to={links.to}><button><span className="text-xl mr4 ml-6 font-semibold hover:text-gray-600 ">
                                 {links.text}
                        </span>
                        </button>
                        </ScrollLink>
                    
                        
                    })}
                </div>
            </div>
        </div>
    )
}
