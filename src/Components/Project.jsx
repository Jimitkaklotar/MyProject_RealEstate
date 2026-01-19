
import about1 from '../assets/about1.png'
import p1 from "../assets/p1.png"
import p11 from "../assets/p11.png"
import React, { useState } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
const cards = [
    { id: 1, bg: p1, overlay: p11 },
    { id: 2, bg: p1, overlay: p11 },
    { id: 3, bg: p1, overlay: p11 },
];

const Project = () => {
   
    const [activeIndex, setActiveIndex] = useState(0);
     useEffect(() => {
        Aos.init();
    }, []);
    

    return (
        <>
            <div className="relative py-35 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${about1})` }} id="project" data-aos="fade-up" data-aos-duration="1000">

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0 "></div>

                <div className="relative z-10 flex max-sm:flex-wrap gap-10 items-center justify-between h-full pl-16 max-sm:pl-4 text-white">

                    <div className="max-w-xl space-y-8">
                        <h1 className="text-5xl font-extrabold max-sm:text-3xl">PROJECTS</h1>
                        <h2 className="text-3xl max-sm:text-1xl ">Discover Modern Living At <br /> Realar Residence.</h2>
                        <p className="text-base">
                            Residence takes advantage of abundant sunlight by incorporating solar panels into its architecture.
                        </p>
                        <button className="mt-4 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition">
                           <a href="#"> Explore More ➜ </a>
                        </button>
                    </div>


                    <div className="w-full flex flex-col items-center gap-6">

                        <div className="relative w-72 h-80">
                            <div className="rounded-2xl overflow-hidden shadow-lg relative w-full h-full bg-white/10">
                                <img
                                    src={cards[activeIndex].bg}
                                    alt="background"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-black opacity-70 rounded-2xl m-6"></div>
                                <img
                                    src={cards[activeIndex].overlay}
                                    alt="overlay"
                                    className="absolute inset-0 object-contain p-6"
                                />
                            </div>


                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-400 rounded-full border-2 border-white shadow-md z-10" />
                        </div>


                        <div className="flex gap-3">
                            {cards.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-yellow-400' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>


                </div>
            </div>




        </>
    )
}

export default Project