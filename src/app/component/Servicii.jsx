"use client";
import React from "react";

import { CarduriServicii } from "./CarduriServicii";
import { CeIntentionezCardTop } from "./CeIntentionezCardTop";
import { CeIntentionezCardBotom } from "./CeIntentionezCardBottom";
import { ProgrameazaConsultatie } from "./ProgrameazaConsultatie";
const Servicii = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center" id="servicii">
        <CeIntentionezCardTop />

        {/* cards */}
        <div className="flex flex-wrap md:flex items-center justify-center md:w-full md:h-full w-full h-full gap-3 bg-green-500/20">
          <CarduriServicii />
        </div>

        <CeIntentionezCardBotom />

        {/* Cum începeți? */}
        <div className="h-full w-screen bg-green-500/20">
          <ProgrameazaConsultatie />
        </div>
      </div>
      ;
    </>
  );
};

export default Servicii;
