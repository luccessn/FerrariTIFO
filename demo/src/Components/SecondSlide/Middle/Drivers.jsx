import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppContext } from "../../../Context/AppContextProvider";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useFetchData } from "../../../HOC/useFetchData";
///
import hamav from "../../../Image/ham.svg";
import leclav from "../../../Image/lecl.svg";
export const Drivers = () => {
  const [info, error, isLoading] = useFetchData(
    "https://ferraritifo.onrender.com/getImages",
  );

  const { state } = useAppContext();
  const sectionRef = useRef(null);
  const frlogoRef = useRef(null);
  const hamiltonRef = useRef(null);
  const leclercRef = useRef(null);
  const hamlimg = useRef(null);
  const leclrimg = useRef(null);
  const hamlecl = useRef(null);

  useEffect(() => {
    if (state.visibleOut) {
      const setInitialValues = () => {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        // Set initial values
        gsap.set(hamiltonRef.current, {
          x: isMobile ? -100 : -200,
          opacity: 0,
        });
        gsap.set(leclercRef.current, { x: isMobile ? 100 : 200, opacity: 0 });
        gsap.set(frlogoRef.current, { y: isMobile ? 50 : 100, opacity: 0 });
        gsap.set(hamlimg.current, {
          y: isMobile ? -400 : isTablet ? -600 : -800,
          opacity: 0,
        });
        gsap.set(leclrimg.current, {
          y: isMobile ? -350 : isTablet ? -550 : -750,
          opacity: 0,
        });
        gsap.set(hamlecl.current, {
          y: isMobile ? -150 : isTablet ? -200 : -300,
          x: isMobile ? -100 : -200,
          opacity: 0,
        });
      };
      setInitialValues();
      const createTimeline = () => {
        // Removed the ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); line
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        const isLaptop = window.innerWidth >= 1024 && window.innerWidth < 1280;
        // Define responsive values
        const scrubValue = isMobile ? 5 : isTablet ? 7 : isLaptop ? 9 : 10;
        const animDuration = isMobile ? 0.8 : isTablet ? 1.5 : 2;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isMobile
              ? "top 150%"
              : isTablet
                ? "top 140%"
                : isLaptop
                  ? "top 130%"
                  : "top 80%",
            end: isMobile
              ? "bottom 170%"
              : isTablet
                ? "bottom 180%"
                : isLaptop
                  ? "bottom 185%"
                  : "bottom 100%",
            scrub: scrubValue,
            markers: false,
            once: true,
          },
        });
        // Create animation sequence
        tl.to(hamiltonRef.current, {
          x: 0,
          opacity: 1,
          duration: animDuration,
        })
          .to(
            leclercRef.current,
            {
              x: 0,
              opacity: 1,
              duration: animDuration,
            },
            "<",
          )
          .to(frlogoRef.current, {
            y: isMobile ? 25 : 50,
            opacity: 1,
          })
          .to(
            hamlimg.current,
            {
              y: isMobile ? -450 : isTablet ? -700 : -900,
              opacity: 1,
            },
            "<",
          )
          .to(
            leclrimg.current,
            {
              y: isMobile ? -400 : isTablet ? -650 : -800,
              opacity: 1,
            },
            "<",
          )
          .to(hamlecl.current, {
            y: isMobile ? -200 : isTablet ? -300 : -400,
            x: isMobile ? -100 : -200,
            opacity: 1,
          });
        return tl;
      };
      // Create the timeline
      let timeline = createTimeline();
      // Handle resize events
      const handleResize = () => {
        if (timeline) {
          timeline.kill();
        }
        setInitialValues();
        timeline = createTimeline();
      };
      window.addEventListener("resize", handleResize);
      // Clean up on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        if (timeline) {
          timeline.kill();
        }
      };
    }
  }, [state.visibleOut]);
  if (error) {
    return <h1>ER: {error}</h1>;
  }
  return (
    <div
      ref={sectionRef}
      className={`w-full h-[800px] text-white transition-all duration-1000 ease-out flex flex-col gap-20  ${
        state.visibleOut
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="flex flex-row justify-between w-full">
        <div ref={hamiltonRef} className="flex flex-col">
          {isLoading ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <div>
              <img
                // src={info[0]?.hamilton?.propf}
                src={hamav}
                alt=""
                className="w-[160px] sm:w-[210px] md:w-[260px] lg:w-[310px] xl:w-[410px] "
              />
              <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
                𝑳𝒆𝒘𝒊𝒔 𝑯𝒂𝒎𝒊𝒍𝒕𝒐𝒏
              </p>
            </div>
          )}
        </div>

        <div ref={leclercRef} className="flex flex-col">
          <img
            // src={info[0]?.leclerc?.propf}
            src={leclav}
            alt="Charles Leclerc"
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px]  rounded-md"
          />
          <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
            𝑪𝒉𝒂𝒓𝒍𝒆𝒔 𝑳𝒆𝒄𝒍𝒆𝒓𝒄
          </p>
        </div>
      </div>
      <div
        className="w-full -z-10 
       scale-100
       sm:scale-110
       md:scale-125
       lg:scale-150
       transform
       origin-center
      "
        ref={frlogoRef}
      >
        {" "}
        <Spline
          scene="https://prod.spline.design/1RQiG4LCXeqJoJsd/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-row z-10 justify-between  relative top-20  ">
        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 1 }}
          className="relative top-0 md:top-40  lg:top-72 xl:top-48 xxl:top-0"
        >
          {/* <div ref={hamlimg}> */}
          <div ref={hamlimg} className=" relative left-14">
            {isLoading && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
            <img
              // src={info[0]?.hamilton?.ham1}
              src="https://i.postimg.cc/x11rGcHm/ham.png"
              alt=""
              className="w-[1100px] lg:w-[600px] rounded-sm  "
            />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 1 }}
          className=" relative right-10 smm:right-0  top-0 md:top-40 md:left-0 lg:top-40 xl:top-0 xxl:top-0"
        >
          {/* <div ref={hamlecl}> */}
          <div ref={hamlecl} className="relative left-48 top-10">
            {isLoading && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
            <img
              // src={info[0]?.team?.hamlecl}
              src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/fom-website/2025/Miscellaneous/hamilton-leclerc-ferrari-suits-2025.webp"
              alt=""
              className="w-[1100px] lg:w-[900px] rounded-sm"
            />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 1 }}
          className=" relative  top-0 md:top-40 lg:top-72 xxl:top-0"
        >
          {/* <div ref={leclrimg}> */}
          <div ref={leclrimg} className="relative right-5">
            {isLoading && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
            <img
              className="w-[1100px] lg:w-[700px] h-[700px]  rounded-md"
              // src={info[0]?.leclerc?.lecl1}
              src="https://i.postimg.cc/VsWH7zzF/lecl.png"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
