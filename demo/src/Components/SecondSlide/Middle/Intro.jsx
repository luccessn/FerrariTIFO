import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppContext } from "../../../Context/AppContextProvider";
import { motion } from "framer-motion";
import { useFetchData } from "../../../HOC/useFetchData";
import videoenz1 from "../../../Videos/videonz1.mp4";
import videoenz2 from "../../../Videos/videonz2.mp4";
// import { useFetchData } from "../../../HOC/useFetchData";
import { Spotlight } from "../../UI/Spotlight";
gsap.registerPlugin(ScrollTrigger);
export const Intro = () => {
  const { state } = useAppContext();
  //fetch
  const [info, error, isLoading] = useFetchData(
    "https://ferraritifo-9a1db4a8e2e6.herokuapp.com/getImages"
  );

  //gsap
  const sectionRef = useRef(null);
  const firstvdRef = useRef(null);
  const secondvdRef = useRef(null);

  useEffect(() => {
    if (state.visibleOut) {
      const setInitialValues = () => {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        gsap.set(firstvdRef.current, {
          y: isMobile ? 30 : 50,
          opacity: 1,
        });
        gsap.set(secondvdRef.current, {
          x: isMobile ? -600 : isTablet ? -300 : -400,
          y: isMobile ? 150 : isTablet ? 200 : 300,
          opacity: 0,
        });
      };
      setInitialValues();
      const createTimeline = () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        const isLeptop = window.innerWidth >= 1024 && window.innerWidth < 1280;
        const srubValue = isMobile ? 5 : isTablet ? 6 : 10;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isMobile
              ? "top 150%"
              : isTablet
              ? "top 120%"
              : isLeptop
              ? "top 60%"
              : "top 10%",
            end: isMobile
              ? "bottom 160%"
              : isTablet
              ? "bottom 130%"
              : isLeptop
              ? "bottom 90%"
              : "bottom 40%",
            scrub: srubValue,
            markers: false,
          },
        });
        tl.to(firstvdRef.current, {
          y: isMobile ? 150 : isTablet ? 180 : 240,
          opacity: 1,
          ease: "power1.inOut",
        }).to(
          secondvdRef.current,
          {
            x: 100,
            opacity: 1,
            ease: "power1.inOut",
          },
          "<"
        );
        return tl;
      };
      let timeline = createTimeline();
      const handleResize = () => {
        if (timeline) {
          timeline.kill();
        }
        setInitialValues();
        timeline = createTimeline();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        if (timeline) {
          timeline.kill();
        }
      };
    }
  }, [state.visibleOut]);
  // if (error) {
  //   return <h1>ER: {error}</h1>;
  // }
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
      <div className="h-[40rem] w-full rounded-md       ">
        <Spotlight />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
        >
          <div className="p-4 max-w-7xl mx-auto relative w-full pt-20 md:pt-0">
            <h1 className=" text-3xl sm:text-4xl mmd:text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              𝕊𝕔𝕦𝕕𝕖𝕣𝕚𝕒 𝔽𝕖𝕣𝕣𝕒𝕣𝕚
            </h1>
            <p className=" text-[20px] ssm:text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              𝑻𝒉𝒆 𝒕𝒓𝒂𝒄𝒌𝒔 𝒂𝒓𝒆 𝒄𝒂𝒍𝒍𝒊𝒏𝒈, 𝑻𝒆𝒔𝒕 𝒚𝒐𝒖𝒓 𝒔𝒑𝒆𝒆𝒅, 𝒔𝒌𝒊𝒍𝒍, 𝒂𝒏𝒅 𝒕𝒉𝒆 𝒑𝒖𝒓𝒔𝒖𝒊𝒕 𝒐𝒇
              𝒈𝒍𝒐𝒓𝒚 𝒘𝒊𝒕𝒉 𝑺𝒄𝒖𝒅𝒆𝒓𝒊𝒂 𝑭𝒆𝒓𝒓𝒂𝒓𝒊 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒓𝒂𝒄𝒊𝒏𝒈 𝒔𝒆𝒂𝒔𝒐𝒏. 𝑹𝒆𝒎𝒆𝒎𝒃𝒆𝒓, 𝒕𝒉𝒆
              𝒎𝒐𝒔𝒕 𝒊𝒎𝒑𝒐𝒓𝒕𝒂𝒏𝒕 𝒗𝒊𝒄𝒕𝒐𝒓𝒚 𝒊𝒔 𝒕𝒉𝒆 𝒐𝒏𝒆 𝒕𝒉𝒂𝒕 𝒊𝒔 𝒚𝒆𝒕 𝒕𝒐 𝒄𝒐𝒎𝒆 .
            </p>
          </div>
        </motion.div>
      </div>
      <div>
        <div className="flex flex-row justify-between gap-28 xl:gap-48 xxl:gap-60 xxxl:gap-96 ">
          <div>
            <video
              ref={firstvdRef}
              autoPlay
              muted
              loop
              className="rounded-lg w-[250px] sm:w-[350px] mmd:w-[450px] lg:w-[550px] xl:w-[700px]"
            >
              <source src={videoenz1} type="video/mp4" />
            </video>
            <video
              ref={secondvdRef}
              autoPlay
              muted
              loop
              className="rounded-lg w-[250px] sm:w-[350px] mmd:w-[450px] lg:w-[550px] xl:w-[700px]"
            >
              <source src={videoenz2} type="video/mp4" />
            </video>
          </div>
          <div className=" w-[300px]  sm:w-[400px] mmd:w-[450px] lg:w-[600px] xl:w-[700px]">
            <img
              className=" rounded-md h-[500px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1000px] w-full object-cover"
              alt=""
              src={info[0]?.ferrari?.frenzo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
