import React from 'react'
import content from '../content'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {Link as ScrollLink} from 'react-scroll'

export default function Footer() {
    return (
        <div className="jusifty-center p-3 border-t-8 border-red-100"  id="Footer" style={{
            background: '#11334A'
            
        }}>
          
                <div className="w-11/12 font-dosis justify-center mx-auto md:items-start flex text-white justify-between ">
                    <div>
                        <h1 className="text-xl md:text-3xl text-white align-center ">
                            {content.footer.title[1]}
                         </h1>
                        <div className="h-1 w-full bg-white"/>

                      
                        <div className="md:text-base text-xs flex flex-col text-left pt-1">
                        {content.footer.explore.map((explore)=> {
                            return <ScrollLink smooth={true} to={explore.to}>
                                <button>
                                <span className="hover:text-gray-600">
                                    {explore.text}
                                </span>
                                </button>
                            </ScrollLink>
                        })}
                        </div>
                    </div>
                    <div className="justify-between">
                        
                    <h1 className="text-xl md:text-3xl text-white text-center ">
                            {content.footer.title[0]}
                         </h1>
                         <div className="h-1 w-full bg-white"/>
                        <div className="flex flex-wrap mt-1 md:max-w-xl max-w-sm justify-center">
                            {content.footer.logo.map((logo) => {
                             return <a target="_blank" href={logo.to}><button><span className="md:w-12 md:h-12 h-8 w-8 bg-white shadow-2xl m-2 rounded-full flex items-center md:p-3 p-2 hover:bg-gray-500">
                              <LazyLoadImage src={logo.img} alt={logo.alt}/>
                    </span>
                    </button>
                    </a>
                })}
                
            </div>
                    <div className="text-center ">
                   <p  className="items-end text-gray-600 md:mt-4 text-xs md:text-base"> © 2018 M luthfi </p>
                    </div>
                    </div>
                    <div>
                    <h1 className="text-xl md:text-3xl text-white text-right ">
                            {content.footer.title[2]}
                         </h1>
                         <div className="h-1 bg-white"/>
                        <div className="md:text-base text-xs md:max-w-sm max-w-xs text-right">
                        <p className="pt-1 md:max-w-sm hover:text-gray-600"><a target="_blank" href="https://www.google.com/maps/dir/-6.5773968,106.784509/idn+smk/@-6.4919539,106.7742068,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e69bc6e5be3d9bd:0x6b9881dabd801476!2m2!1d107.0381407!2d-6.5252706">{content.footer.loc}</a></p>
                        
                        </div>
                    </div>
                </div>
            
        </div>
    )
}
