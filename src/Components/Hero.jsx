import React, { useEffect } from 'react'
import hero from "../assets/hero.png"
import { motion } from "framer-motion";
import Aos from 'aos';
import "aos/dist/aos.css"

const stats = [
    { number: "850+", label: "ELEGANT APARTMENTS" },
    { number: "950+", label: "LUXURY HOUSES" },
    { number: "18K+", label: "SATISFIED GUESTS" },
    { number: "2K+", label: "HAPPY OWNER" },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.6,
        },
    }),
};
const Hero = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <div className="bg-[#1C2D37] h-140" id="home">
                <div data-aos="fade-up" data-aos-duration="1500"
                    className="h-140 w-[85%] relative top-20 left-[7.5%] bg-cover bg-center rounded-2xl overflow-hidden"
                    style={{ backgroundImage: `url(${hero})` }}
                >

                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-0 rounded-2xl"></div>


                    <div className="relative z-10 text-white px-[10%] py-[10%] ">
                        <h1 className="text-5xl font-bold leading-tight max-sm:text-4xl ">Top notch<br />living space</h1>
                        <p className="mt-8 text-lg max-sm:text-sm">
                            Bringing together a team with passion, dedication, and <br />resources to help our clients reach their buying and selling<br /> goals.we are with you every step of the way
                        </p>
                        <button className="mt-8 px-6 py-3 bg-yellow-400 cursor-pointer text-black rounded-full font-semibold hover:bg-yellow-300 transition">
                           <a href='#'> Explore properties ➜</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#F0EFE7] flex flex-wrap  justify-center items-center px-5 pt-20  ">
                {stats.map((item, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-green text-center w-60 py-10 rounded-lg"
                    >
                        <h1 className="text-5xl font">{item.number}</h1>
                        <p className="mt-8 text-sm">{item.label}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default Hero