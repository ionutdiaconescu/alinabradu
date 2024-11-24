"use client";

import React, { useState } from "react";
import { MdFamilyRestroom } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import {
  GiHeartBottle,
  GiPalmTree,
  GiStrong,
  GiLoveMystery,
} from "react-icons/gi";
import { FaAngry } from "react-icons/fa";
import { PiMaskSadFill } from "react-icons/pi";
import { IoLogoGameControllerB } from "react-icons/io";
export const CarduriServicii = ({}) => {
  const [cards] = useState([
    {
      icon: <MdFamilyRestroom className="h-[5rem] w-[5rem]" />,

      title: "Relatia de cuplu sau de familie",
      text: "O terapie care te va ajuta sa creezi o relatie mai profunda cu familia sau persoana de langa tine",
    },
    {
      icon: <RiMentalHealthFill className="h-[5rem] w-[5rem]" />,
      title: "O gandire sanatoasa si pozitiva",
      text: " “Ceea ce plantezi azi, vei culege in viitorul apropiat” Te voi ajuta sa iti imbunata-testi gandirea pentru a devenii cea mai buna versiune a ta.",
    },
    {
      icon: <GiHeartBottle className="h-[5rem] w-[5rem]" />,
      title: "Sentimentele",
      text: " Vei atinge un alt nivel de a-ti intelege sentimentele, si de a le controla.",
    },
    {
      icon: <FaAngry className="h-[5rem] w-[5rem]" />,
      title: "Conflictele",
      text: " Gestioneaza conflictele prin cea mai buna maniera",
    },
    {
      icon: <PiMaskSadFill className="h-[5rem] w-[5rem]" />,
      title: "Depresie",
      text: " Daca depresia te tine in loc, simti ca nu poti sa iesi la suprafata..nu ezita sa ceri ajutor.",
    },
    {
      icon: <GiPalmTree className="h-[5rem] w-[5rem]" />,
      title: "Relaxare",
      text: " Focuseaza-ti atentia pe calm si creste-ti nivelul de constientizare.",
    },
    {
      icon: <GiStrong className="h-[5rem] w-[5rem]" />,
      title: "Incredere de sine",
      text: " O terapie care te va ajuta sa creezi o relatie mai profunda cu familia sau persoama de langa tine",
    },
    {
      icon: <IoLogoGameControllerB className="h-[5rem] w-[5rem]" />,
      title: "Rezista la presiune si manipulare",
      text: " O terapie care te va ajuta sa creezi o relatie mai profunda cu familia sau persoama de langa tine",
    },
    {
      icon: <GiLoveMystery className="h-[5rem] w-[5rem]" />,
      title: "Disciplina emotionala",
      text: "O terapie care te va ajuta sa creezi o relatie mai profunda cu familia sau persoama de langa tine",
    },
  ]);

  return (
    <>
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center space-y-1 rounded-3xl shadow-2xl border-4 border-gray-500/20 bg-white backdrop-blur-md w-[22rem] h-[16rem] m-2 p-2"
        >
          <div className="flex items-center justify-center text-blue-500">
            {card.icon}
          </div>

          <h1 className="font-extrabold">{card.title}</h1>
          <p className="w-[300px] text-center">{card.text}</p>
        </div>
      ))}
    </>
  );
};
