import React from 'react'
import team1 from "../assets/team1.png"
import team2 from "../assets/team2.png"
import team3 from "../assets/team3.png"
import phone from "../assets/phone.png"
import "../Style/Scrollbar.css";
import consulting from "../assets/consulting.png"
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

const Team = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='bg-[#1C2D37] p-10 max-sm:p-5' id="team">

      <div className="text-container mb-6">
        <h1 className="outlined-text font-bold text-white max-sm:text-4xl text-8xl">TEAM</h1>
        <h2 className="bold-text max-sm:text-xl text-3xl text-white relative top-[-39px]">Our Team Member</h2>
      </div>


      <div className='flex justify-between items-center flex-wrap'>
        <h1 className='text-white text-xl max-sm:text-base'>
          We are a real estate firm with over 20 years of expertise,<br />
          providing amazing locations to our partners and clients.
        </h1>
        <button className="mt-4 px-6 py-3 bg-yellow-400 cursor-pointer text-black rounded-full font-semibold hover:bg-yellow-300 transition">
           <a href="#">View All Member ➜</a>
        </button>
      </div>


      <div className='overflow-x-auto styled-scroll mt-10  overflow-hidden' data-aos="zoom-out" data-aos-duration="1000">
        <div className='flex gap-6 w-max py-10 px-4'>
          {[team1, team2, team3, team1, team2, team1].map((img, index) => (
            <div
              key={index}
              className="bg-cover flex justify-center items-end bg-center sm:w-105 sm:h-105 h-80 w-80 rounded-3xl shrink-0"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className='bg-black/60 flex justify-between rounded-2xl mb-5 p-3 h-[25%] w-[85%]'>
                <div>
                  <h1 className='text-white text-xl font-bold'>
                    {index % 3 === 1 ? 'Janny Mari' : index % 3 === 2 ? 'Sara Prova' : 'Mitchel Smith'}
                  </h1>
                  <h5 className='text-white text-xs mt-2'>Property Experts</h5>
                </div>
                <div className='rounded-full flex justify-center items-center h-12 w-12 bg-amber-200 border-black border-2'>
                  <img src={phone} alt="" className='h-6 w-6' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between max-sm:justify-center p-10 max-sm:p-0 flex-wrap gap-10'>
        <div>
          <img src={consulting} className='h-[350px] max-sm:h-[200px] overflow-hidden ' data-aos="zoom-out" data-aos-duration="1000"/>
        </div>
        <div>
          <div className="text-container mb-6">
            <h1 className="outlined-text font-bold text-white max-sm:text-2xl text-[100px]">CONSULTING</h1>
            <h2 className="bold-text max-sm:text-2xl text-3xl text-white max-sm:top-[-30px] relative top-[-60px]">Buying & Selling We<br />
              Make It Simple</h2>
            <h1 className='text-xl max-sm:text-sm max-sm:mt-[-10px] text-white mt-[-30px]'>Rapidiously myocardinate cross-platform intellectual capital<br />
              model. Appropriately create interactive infrastructures</h1>
            <button className="mt-10 px-6 py-3 bg-yellow-400 cursor-pointer text-black rounded-full font-semibold hover:bg-yellow-300 transition ">
              Get Started ➜
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;
