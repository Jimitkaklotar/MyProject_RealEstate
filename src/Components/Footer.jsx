import React from 'react'
import logo from "../assets/logo.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png"
import insta from "../assets/insta.png"
import location from "../assets/location.png"
import call from "../assets/call.png"
import mail from "../assets/mail.png"
import { ChevronRight } from 'lucide-react';


const menuItems = [
    'All Properties',
    'All Authors',
    'Our Team',
    'Our Pricing',
    'Our Products',
];

const Footer = () => {
    return (
        <>
            <div className='my-10 rounded-4xl bg-[#F0EFE7] p-10 flex gap-45 flex-wrap max-sm:p-5 cursor-pointer'>
                <div>
                    <img src={logo} alt="" className='h-18' />
                    <h1 className='my-10 text-xl'>Rapidiously myocardinate cross-platform<br />
                        intellectual capital model. Appropriately create<br />
                        interactive infrastructures</h1>
                    <div className='flex gap-12 max-sm:gap-5'>
                        <img src={facebook} alt="" className='max-sm:h-8' />
                        <img src={twitter} alt="" className='max-sm:h-8' />
                        <img src={youtube} alt="" className='max-sm:h-8' />
                        <img src={insta} alt="" className='max-sm:h-8' />



                    </div>
                </div>
                <div className='flex gap-25 flex-wrap'>
                    <div>
                        <h1 className='font-extrabold text-2xl text-center'>Get In Touch</h1>
                        <div className='flex gap-5 py-5'>
                            <img src={location} alt="" className='h-10' />
                            <p>789 Inner Lane, Holy park,<br />
                                California, USA</p>
                        </div>
                        <div className='flex gap-5 py-5'>
                            <img src={call} alt="" className='h-8' />
                            <p>+00 123 456 7890,<br />
                                +00 987 654 3210</p>
                        </div>
                        <div className='flex gap-5 py-5'>
                            <img src={mail} alt="" className='h-8' />
                            <p>infomailrealar@gmail.com<br />
                                supportmail01@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-extrabold text-2xl text-center'>Explore</h1>
                        <div className=" p-6 w-64">

                            <ul className="space-y-6">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="flex items-center text-gray-800 cursor-pointer hover:text-black transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                      <a href="#">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer