import React from "react";
import { useAppContext } from "../../../Context/AppContextProvider";
import frheader from "../../../Videos/frheader.mp4";
export const Header = () => {
  const { state } = useAppContext();
  const scrollDrivers = () => {
    window.scrollBy({
      top: 2000,
      behavior: "smooth",
    });
  };
  const scrollBolid = () => {
    window.scrollBy({
      top: 5000,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`w-full h-[800px] text-white transition-all duration-1000 ease-out ${
        state.visibleOut
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10"
      }`}
    >
      <video autoPlay muted loop className="w-full object-cover h-screen">
        <source src={frheader} type="video/mp4" />
      </video>
      <div className="top-shadow absolute left-0 top-0 w-full h-[180px] bg-gradient-to-b from-black to-transparent"></div>
      <div className="text-white flex flex-row gap-10 smm:gap-32 mmd:gap-48  lg:gap-64 xl:gap-80 absolute top-5 left-1/2 transform -translate-x-1/2 justify-center font-bold ">
        <h1
          onClick={scrollDrivers}
          className="text-sm mmd:text-xl md:text-2xl cursor-pointer"
        >
          𝑫𝒓𝒊𝒗𝒆𝒓𝒔
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5x relative -top-[5px] tracking-[20px] ">
          𝔽𝔼ℝℝ𝔸ℝ𝕀
        </h1>
        <h1
          onClick={scrollBolid}
          className="text-sm mmd:text-xl md:text-2xl cursor-pointer"
        >
          𝑩𝒐𝒍𝒊𝒅
        </h1>
      </div>
      <div className="bottom-shadow relative -top-[11em] left-0 -bottom-1 w-full h-[180px] bg-gradient-to-t from-black to-transparent "></div>
    </div>
  );
};

//top and bottom shadows
