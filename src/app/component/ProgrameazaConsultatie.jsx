import Image from "next/image";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
export const ProgrameazaConsultatie = () => {
  return (
    <>
      <div className="flex flex-col text-center items-center justify-center p-2 mt-10 shadow-3xl rounded-2xl space-y-[30px]">
        <div className="flex flex-col items-center justify-center space-y-[20px] shadow-xl border-4 p-4 border-white/20 bg-white rounded-2xl">
          <h1 className="text-2xl md:text-3xl font-extrabold">Cum începeți?</h1>
          <p className="md:max-w-[600px] w-[350px] text-md">
            Pentru a începe acest proces de transformare și descoperire
            personală, tot ce trebuie să faceți este să mă contactați prin
            telefon sau pe adresa de gmail. Vă voi programa o primă ședință în
            care vom discuta despre nevoile și așteptările dumneavoastră.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-10">
          <Image
            src="/talk-img.png"
            width={500}
            height={500}
            alt="family"
            className="rounded-3xl h-[330px] w-[500px]"
          />
          <Image
            src="/online-consult.jpeg"
            width={500}
            height={500}
            alt="family"
            className="rounded-3xl h-[300px] w-[500px]"
          />
        </div>

        {/* programare */}
        <div className="flex items-center justify-around gap-[50px]">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4">
            <Image
              src="/programare.png"
              width={500}
              height={500}
              alt="family"
              className="h-[300px] w-[300px]"
            />

            <div className="gap-2 flex flex-col justify-center items-center shadow-2xl rounded-2xl p-2 border-4 border-white/20 bg-white">
              <h1 className="lg:text-3xl text-xl font-extrabold">
                Programeaza o consultatie
              </h1>
              <p className="md:text-lg text-md  w-[200px] md:w-[500px] text-center">
                La cabinet <span className="text-3xl font-semibold">sau</span> ,
                planifica rapid o sesiune de consiliere online, din confortul
                casei tale.Beneficiaza de sprijin pentru problemele tale, de
                oriunde te-ai afla, castiga timp.Consultatiile sunt
                confidentiale si la preturi accesibile.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center space-y-[10px]">
              <div className="flex gap-3 items-center justify-center shadow-2xl rounded-2xl border-2 bg-green-700/20 backdrop-blur-md border-gray-700/10 p-2 cursor-pointer hover:scale-105 transition-[3]">
                <FaPhoneVolume className="text-4xl shadow-2xl" />
                <h1 className="text-2xl font-extrabold shadow-2xl">
                  0724904894
                </h1>
              </div>
              <div className="flex gap-3 items-center justify-center shadow-2xl rounded-2xl hover:scale-105 transition-[3] p-2 bg-green-700/20 backdrop-blur-md border-gray-700/10 border-2">
                <Image
                  src="/gmail.png"
                  width={500}
                  height={500}
                  alt="family"
                  className="h-[50px] w-[50px] object-contain"
                />
                <h1 className="text-2xl font-extrabold">
                  bradualina@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
