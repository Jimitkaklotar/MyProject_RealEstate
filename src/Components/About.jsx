import React from 'react'
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"
import dp from "../assets/about_dp.png"
import a1 from "../assets/a1.png"
import a2 from "../assets/a2.png"  
import a3 from "../assets/a3.png"
import { ScanHeart } from 'lucide-react'
import { backInOut } from 'framer-motion'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const About = () => {
     useEffect(() => {
            Aos.init();
        }, []);
    return (
        <>
            <div className='bg-[#1C2D37] p-15 py-30 max-sm:p-5 overflow-hidden' id="about" data-aos="fade-up" data-aos-duration="1000">
                <h1 className='font-bold text-white  ml-20 text-5xl'>About Us</h1>
                <div className='flex justify-center sm:gap-100 gap-10 my-10 flex-wrap '>
                    <p className='text-white'>We are a real estate firm with over 20 years of expertise, and our main<br />
                        goal is to provide amazing locations to our partners.</p>
                    <button className=" px-6 py-3 bg-yellow-400 cursor-pointer text-black rounded-full font-semibold hover:bg-yellow-300 transition">
                        <a href="#">Explore properties➜</a>
                    </button>
                </div>
                <div className='flex justify-center gap-5 flex-wrap'>
                    <div className='w-138 overflow-hidden' data-aos="fade-right" data-aos-duration="1000">
                        <img src={about1} />
                    </div>
                    <div className='w-138 overflow-hidden' data-aos="fade-left" data-aos-duration="1000">
                        <img src={about2} />
                    </div>

                </div>
                <div className='flex justify-center pt-10 gap-50 flex-wrap'>
                    <div>
                        <p className='text-white text-3xl py-20 text-center'>All-inclusive real estate services to facilitate<br />
                            the easy and confident purchase, sale, and<br />
                            management of your properties.</p>
                    </div>
                    <div className='rounded-full '>
                        <img src={dp} alt="" />
                        <h1 className='text-center text-white mt-3'>REALER LIVING SOLUTION</h1>
                    </div>
                </div>
                <div className='flex justify-center mt-10 flex-wrap gap-30'>
                    <div className='w-80'>
                        <div className='flex justify-center flex-wrap '>
                            <img src={a1} alt="" />
                        </div>
                        <h1 className=' text-white text-2xl py-8 text-center'>Property Valuation</h1>
                        <p className='text-white text-sm text-center'>All-inclusive real estate services to facilitate the easy
                            and confident purchase, sale, and management of
                            your properties.</p>
                    </div>
                    <div className='w-80'>
                        <div className='flex justify-center'>
                            <img src={a2} alt="" />
                        </div>
                        <h1 className=' text-white text-2xl py-8 text-center'>Property Management</h1>
                        <p className='text-white text-sm text-center'>Business consulting involves providing expert advice
                            and services to real estate improve performance
                            services and achieve.</p>
                    </div>
                    <div className='w-80'>
                        <div className='flex justify-center'>
                            <img src={a3} alt="" />
                        </div>
                        <h1 className=' text-white text-2xl py-8 text-center '>Invest Opportunities</h1>
                        <p className='text-white text-sm text-center'>Real estate services facilitate the easy and confident
                            purchase, sale, and management of your properties
                            experiencing growth.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About 