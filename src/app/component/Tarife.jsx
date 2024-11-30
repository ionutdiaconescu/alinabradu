import React from "react";
import { CardTarife } from "./CardTarife";
const Tarife = () => {
  return (
    <>
      <div
        className="flex flex-col space-y-[3rem] items-center justify-around w-full h-full"
        id="tarife"
      >
        <h1 className="text-center font-extrabold text-2xl md:text-4xl bg-green-700/20 shadow-2xl rounded-2xl p-2 border-2 border-gray-500/20">
          Tarife servicii consiliere psihologică
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center md:justify-center gap-[30px]  md:p-4 rounded-3xl">
          <CardTarife />
        </div>
      </div>
      ;
    </>
  );
};

export default Tarife;
