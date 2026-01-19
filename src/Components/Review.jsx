import React from 'react'
import text from "../assets/review_image.png"
import star from "../assets/star.png"
import dp from "../assets/dp.png"
import qoute from "../assets/qoute.png"
import r1 from "../assets/r1.png"
import r2 from "../assets/r2.png"
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Review = () => {
     useEffect(() => {
            Aos.init();
        }, []);
    return (
        <>
            <div className='bg-[#F0EFE7] p-10 max-sm:p-5 overflow-hidden' data-aos="fade-up" data-aos-duration="1000">
                <div>
                    <img src={text} alt="" />
                    <h1 className='bold-text text-5xl top-[-40px] max-sm:top-[-10px]'>What Our Clients Say</h1>

                </div>
                <div className='flex flex-wrap justify-center gap-20'>
                    <div>
                        <img src={star} alt="" className='py-10' />
                        <p className='text-2xl max-sm:text-sm'>Home is where love resides, memories are created, and dreams<br/><br/>

                            are nurtured. I've found my sanctuary in this beautiful property.<br/><br/>

                            Finding the perfect that  resonates with your own coupled with<br/><br/>

                            modern.</p>
                        <div className='flex justify-between flex-wrap'>
                            <div className='flex mt-20 overflow-hidden' data-aos="zoom-out" data-aos-duration="1500">
                                <img src={dp} alt="" />
                                <div className='pt-4 px-3'>
                                    <h1 className='font-bold text-xl mt-3'>Janny Muna</h1>
                                    <p >Ceo Of  Company</p>
                                </div>
                            </div>
                            <div className='max-sm:hidden'>
                                <img src={qoute} alt=""/>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                       <div className='max-sm:mr-8 overflow-hidden' data-aos="zoom-out" data-aos-duration="1500">
                           <img src={r1} alt="" className='h-90 max-sm:h-60'/>
                           <img src={r2} alt="" className='h-60  max-sm:h-30  relative bottom-35 left-35'/>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review