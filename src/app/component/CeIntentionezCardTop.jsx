import Image from "next/image";
import React, { useState } from "react";

export const CeIntentionezCardTop = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <div className="grid md:grid-cols-3 gap-3 mb-[20px]  rounded-3xl">
        <div className="flex items-center justify-center mt-[4rem] md:mt-0">
          <Image
            src="/mental-health-img.png"
            width={500}
            height={500}
            alt="family"
            className="rounded-3xl h-[150px] w-[150px] md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] shadow-2xl"
          />
        </div>
        <div className=" flex lg:w-[500px] w-[350px] bg-gray-300/30 flex-col text-center items-center justify-center border-2 border-white/20 backdrop-blur-md shadow-2xl rounded-2xl">
          <h1 className="font-extrabold text-md md:text-2xl p-2">
            Ce intentionez...
          </h1>
          <p className=" lg:w-[500px] w-[350px] font-semibold md:font-semibold p-3 text-sm lg:text-lg">
            Prin dialog te ajut să realizezi un mod de a trăi mai bun și de a
            schimba ceea ce singur/ă nu poți. E ca și cum ai pătrunde într-o
            grădină exotică fără puncte sigure de reper, fără criterii solide de
            apreciere, de sens și scop, și riști să te rătăcești.
            <span className={`long-text ${collapse ? "expanded" : ""}`}>
              Astfel, ajungi să fii incapabil/ă să afli un răspuns la problema
              ta. Consider că noi toți avem potențialul de a simți bucuria și
              împlinirea în viață. Dacă ajungi la concluzia că ești blocat în
              tipare de viață, convingeri restrictive sau că poți obține mai
              mult de la tine, atunci este posibil ca acest proces terapeutic să
              fie ceea ce ai nevoie.
            </span>
            <button
              onClick={() => setCollapse((prev) => !prev)}
              className="text-green-500 italic cursor-pointer hover:text-green-700"
            >
              read more
            </button>
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <Image
            src="/mental-health-img.png"
            width={500}
            height={500}
            alt="family"
            className="rounded-3xl h-[150px] w-[150px] md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px]  shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};
