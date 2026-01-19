import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <header className="bg-[#F0EFE7] px-6 py-4 flex justify-between items-center sticky top-0 z-100 shadow-sm">


                <div className="flex items-center space-x-2">
                    <img src={logo} alt="" className="w-25 h-7"/> 
                </div>


                <nav className="hidden md:flex space-x-10 font-medium text-gray-800">
                    <a href="#home" className="hover:text-blue-600">Home</a>
                    <a href="#about" className="hover:text-blue-600">About us</a>
                    <a href="#project" className="hover:text-blue-600">Projects</a>
                    <a href="#team" className="hover:text-blue-600">Team</a>
                </nav>


                <div className="hidden md:flex">
                    <button className="flex items-center space-x-2 bg-[#1C2D37] text-white px-4 py-2 rounded-full text-sm hover:bg-[#162229] transition">
                        <span>Request A Visit</span>
                        <span>➜</span>
                    </button>
                </div>


                <button
                    className="md:hidden text-gray-800 z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </header>


            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#F0EFE7] shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-40 md:hidden`}
            >
                <div className="p-6 space-y-4 font-medium text-gray-800 mt-20">
                    <a href="#home" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>About us</a>
                    <a href="#project" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#team" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Team</a>
                    <button className="w-full bg-[#1C2D37] text-white px-4 py-2 rounded-full text-sm hover:bg-[#162229] transition">
                        Request A Visit ➜
                    </button>
                </div>
            </div>


            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}



export default Navbar