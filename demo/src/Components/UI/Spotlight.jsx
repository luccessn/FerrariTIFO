"use client";
import React from "react";
import { motion } from "framer-motion"; // Corrected import from "framer-motion"

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 100%, 85%, .06) 0, hsla(0, 100%, 55%, .024) 50%, hsla(210, 100%, 45%, 0) 80%)", // Increased opacity
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(0, 100%, 85%, 0.14) 0, hsla(0, 100%, 55%, 0.1) 80%, transparent 100%)", // Increased opacity
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(0, 100%, 85%, 0.2) 0, hsla(0, 100%, 45%, 0.14) 80%, transparent 100%)", // Increased opacity
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 4,
  xOffset = 100,
} = {}) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <motion.div
          animate={{
            x: [0, xOffset, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
        >
          <div
            style={{
              transform: `translateY(${translateY}px) rotate(-45deg)`,
              background: gradientFirst,
              width: `${width}px`,
              height: `${height}px`,
            }}
            className={`absolute top-0 left-0`}
          />

          <div
            style={{
              transform: "rotate(-45deg) translate(5%, -50%)",
              background: gradientSecond,
              width: `${smallWidth}px`,
              height: `${height}px`,
            }}
            className={`absolute top-0 left-0 origin-top-left`}
          />

          <div
            style={{
              transform: "rotate(-45deg) translate(-180%, -70%)",
              background: gradientThird,
              width: `${smallWidth}px`,
              height: `${height}px`,
            }}
            className={`absolute top-0 left-0 origin-top-left`}
          />
        </motion.div>
        <motion.div
          animate={{
            x: [0, -xOffset, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
        >
          <div
            style={{
              transform: `translateY(${translateY}px) rotate(45deg)`,
              background: gradientFirst,
              width: `${width}px`,
              height: `${height}px`,
            }}
            className={`absolute top-0 right-0`}
          />

          <div
            style={{
              transform: "rotate(45deg) translate(-5%, -50%)",
              background: gradientSecond,
              width: `${smallWidth}px`,
              height: `${height}px`,
            }}
            className={`absolute top-0 right-0 origin-top-right`}
          />

          <div
            style={{
              transform: "rotate(45deg) translate(180%, -70%)",
              background: gradientThird,
              width: `${smallWidth}px`,
              height: `${height}px`,
            }}
            className={`absolute top-0 right-0 origin-top-right`}
          />
        </motion.div>
      </motion.div>
    </>
  );
};
// gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 100%, 85%, 0.3) 0, hsla(0, 100%, 55%, 0.2) 50%, hsla(0, 100%, 45%, 0) 80%)", // Increased opacity
// gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(0, 100%, 85%, 0.2) 0, hsla(0, 100%, 55%, 0.15) 80%, transparent 100%)", // Increased opacity
// gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(0, 100%, 85%, 0.15) 0, hsla(0, 100%, 45%, 0.1) 80%, transparent 100%)",
