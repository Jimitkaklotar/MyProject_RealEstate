import React from 'react'
import blog from "../assets/blog.png"
import blogo from "../assets/blogo.png"
import blogimg from "../assets/blog_img1.png"
import Footer from "../Components/Footer.jsx"
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react'
const Blog = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <div className='p-10 bg-[#1C2D37] max-sm:p-5'>
                <div>
                    <img src={blog} alt="" />
                    <h1 className='text-6xl text-white my-8 font-bold max-sm:text-2xl'>Latest Blog & News</h1>
                </div>
                <div>
                    <div className='flex justify-center gap-20 mt-20 flex-wrap'>
                        <div>
                            <h1 className='text-4xl  text-white max-sm:text-2xl'>Property</h1>
                            <p className='text-2xl text-white py-10 max-sm:text-xl'>Emphasizes the importance of continuous<br />
                                learning and intellectual</p>
                            <p className='text-[15px] text-white max-sm:text-[10px]'>Relar Residence promotes sustainable transportation options, with dedicated<br />
                                spaces. Welcome to Realar Residence, where sustainability meets comfort</p>
                            <div className='flex gap-10 mt-11'>
                                <div className='flex gap-5'>
                                    <img src={blogo} alt="" />
                                    <h1 className='text-yellow-400 text-2xl mt-2 max-sm:text-xl'>By Realar</h1>
                                </div>
                                <h1 className='text-white text-2xl max-sm:text-xl mt-2'>Jun 09, 2024</h1>
                                {/* <button className="mt-10 px-6 py-3 bg-yellow-400 cursor-pointer text-black rounded-full font-semibold hover:bg-yellow-300 transition ">
                                    Read More ➜
                                </button> */}

                            </div>
                        </div>
                        <div>
                            <img src={blogimg} alt="" className='h-90 overflow-hidden'  data-aos="fade-left" data-aos-duration="1500"/>
                        </div>
                    </div>
                    <div className='flex justify-center flex-wrap gap-20 mt-20 '>
                        <div>
                            <img src={blogimg} alt="" className='h-90 overflow-hidden' data-aos="fade-right" data-aos-duration="1500" />
                        </div>
                        <div>
                            <h1 className='text-4xl  text-white max-sm:text-2xl'>Property</h1>
                            <p className='text-2xl text-white py-10 max-sm:text-xl'>Emphasizes the importance of continuous<br />
                                learning and intellectual</p>
                            <p className='text-[15px] text-white max-sm:text-[10px]'>Relar Residence promotes sustainable transportation options, with dedicated<br />
                                spaces. Welcome to Realar Residence, where sustainability meets comfort</p>
                            <div className='flex gap-10 mt-11'>
                                <div className='flex gap-5'>
                                    <img src={blogo} alt="" />
                                    <h1 className='text-yellow-400 text-2xl mt-2 max-sm:text-xl'>By Realar</h1>
                                </div>
                                <h1 className='text-white text-2xl max-sm:text-xl mt-2'>Jun 09, 2024</h1>
                                {/* <button className="mt-10 px-6 py-3 bg-yellow-400 cursor-pointer text-black rounded-full font-semibold hover:bg-yellow-300 transition ">
                                    Read More ➜
                                </button> */}

                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Blog