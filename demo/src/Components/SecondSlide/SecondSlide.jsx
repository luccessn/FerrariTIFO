import React from "react";
import { Header } from "./Header/Header";
import { Intro } from "./Middle/Intro";
import { Drivers } from "./Middle/Drivers";
import { BolidTeam } from "./Middle/BolidTeam";
export const SecondSlide = () => {
  return (
    <div className=" flex flex-col gap-52  ">
      <div>
        <Header />
      </div>
      <div className="flex flex-col gap-96 smm:gap-0">
        <div>
          <Intro />
        </div>
        <div className="relative top-40 smm:top-96">
          <div className="relative top-96">
            <Drivers />
          </div>
          <div className="relative -top-20 smm:top-40 mmd:top-96">
            <BolidTeam />
          </div>
        </div>
      </div>
    </div>
  );
};
