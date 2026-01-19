import React from 'react';
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"


const Facility = () => {
    const facilities = [
        { img: p7, label: "Rooftop Garden" },
        { img: p2, label: "Indoor Pool" },
        { img: p3, label: "Pet Friendly" },
        { img: p4, label: "Playground" },
        { img: p5, label: "Car Parking" },
        { img: p6, label: "Fitness Center" },
        { img: p4, label: "Playground" },
        { img: p5, label: "Car Parking" },
        { img: p6, label: "Fitness Center" },
        { img: p7, label: "Rooftop Garden" },
        { img: p2, label: "Indoor Pool" },
        { img: p3, label: "Pet Friendly" },
        { img: p4, label: "Playground" },
    ];

      useEffect(() => {
            Aos.init();
        }, []);

    return (
        <div className="bg-[#F0EFE7] pb-10 px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-duration="1000">
            <div className="max-w-7xl mx-auto text-center over">
                <div className="text-container text-center top-[60px]">
                    <h1 className="outlined-text  text-[6rem] font-bold text-black text-center max-sm:font-2xl">Facilities</h1>
                    <h2 className="bold-text text-3xl max-sm:font-xl">Realar Amenities</h2>
                </div>

                <p className="text-xl text-[#1C2D37] py-10  font-bold max-sm:text-xs">
                    We are a real estate firm with over 20 years of expertise, and our
                    main <br /> goal is to provide amazing locations to our partners and clients.
                </p>


                <div className="flex overflow-x-auto space-x-6 custom-scrollbar px-2 pb-10 " >
                    {facilities.map((item, idx) => (
                        <div key={idx} className="min-w-[160px] flex-shrink-0 bg-[#1C2D37] rounded-xl py-10 px-6 flex flex-col items-center">
                            <img src={item.img} alt={item.label} className="h-14 w-14 mb-4 object-contain" />
                            <div className='h-10 border text-gray-200'></div>
                            <span className="text-sm font-medium text-gray-300 mt-8 text-center">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facility;
