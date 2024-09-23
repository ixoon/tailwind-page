import React from "react";
import { ReactTyped } from "react-typed"; 

const Hero = () => {
    return(
        <div className="text-white w-max-[800px] w-full h-screen text-center mt-[100px]">
            <p className="text-[#00df9a] text-3xl font-bold">GROWING WITH ANALYTICS</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
            <div className="flex justify-center items-center gap-3">
                <p className="text-3xl font-bold">Fast, flexible financing for</p>
                <ReactTyped
                    className="md:text-5xl sm:text-4xl text-xl  "
                    strings={[
                        "Resources",
                        "Company",
                        "Team",
                    ]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
               
            </div>
            <p className="md:text-3xl sm:text-2xl xs:text-xml mt-5 text-3xl text-gray-400">Monitor your data analytics to increase revenue for Resources, Company and Team!</p>
            <div className="mt-5">
                <button className="bg-[#00df9a] p-[20px] font-bold rounded-[20px] text-3xl md:text-2xl sm:text-1xl hover:bg-[#00b27a]">Get Started</button>
            </div>
        </div>
    )
}

export default Hero;
