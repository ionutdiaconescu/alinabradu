import Image from "next/image";
import React, { useState } from "react";

export const CeIntentionezCardBotom = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <div className="grid md:grid-cols-3 gap-3 mb-[20px] mt-[2rem]  rounded-3xl">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/mental-health-img.png"
            width={500}
            height={500}
            alt="family"
            className="rounded-3xl h-[150px] w-[150px] md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] shadow-2xl"
          />
        </div>
        <div className="flex flex-col text-center lg:w-[500px]  w-[350px] items-center justify-center shadow-2xl rounded-3xl bg-gray-300/30 border-2 border-white/20 backdrop-blur-md">
          <p className=" lg:w-[500px] w-[350px] p-3 text-sm lg:text-xl rounded-3xl font-semibold">
            În calitate de psihoterapeut, combin cele mai noi strategii din
            domeniu cu un stil cald și empatic, astfel încât să te ajut să-ți
            descoperi punctele forte și să-ți atingi potențialul maxim. Dacă
            ești curios să lucrăm împreună sau dorești să primești îndrumare
            pentru a-ți descoperi resursele, ÎNDRĂZNEȘTE.
            <span className={`long-text ${collapse ? "expanded" : ""}`}>
              Eu nu sunt specialistă în viața ta, tu ești singurul expert! Eu nu
              fac decât să găsesc, prin experiența și cunoștințele acumulate,
              abordarea cea mai potrivită pentru situația ta. Și îți mai spun
              ceva... Nu amâna! Nu timpul le rezolvă pe toate... el doar le
              amplifică... Gândește-te că ai putea fi liber/ă și ai reuși să fii
              tu însuți fără eforturi majore... doar vorbind... fiind conștient
              că doar prin conștiinciozitate, seriozitate și implicare poți
              deschide drumul vieții tale
            </span>
            <button
              onClick={() => setCollapse((prev) => !prev)}
              className="text-green-500 italic cursor-pointer hover:text-green-700"
            >
              read more
            </button>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/mental-health-img.png"
            width={500}
            height={500}
            alt="family"
            className="rounded-3xl h-[150px] w-[150px] md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};
