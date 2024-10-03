import React from "react";
import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
const Servicii = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center" id="servicii">
        <div className="grid md:grid-cols-3 gap-3 mb-[20px]  rounded-3xl">
          <div className="flex items-center justify-center">
            <Image
              src="/mental-health-img.png"
              width={500}
              height={500}
              alt="family"
              className="rounded-3xl h-[150px] w-[150px] md:h-[150px] md:w-[150px] lg:h-[250px] lg:w-[250px] shadow-2xl"
            />
          </div>
          <div className="flex flex-col text-center items-center justify-center border-2 border-gray-800/10 shadow-2xl rounded-2xl">
            <h1 className="font-extrabold text-md md:text-2xl p-2">
              IATA CU CE TE POT AJUTA
            </h1>
            <p className=" lg:w-[500px] w-[350px] font-semibold md:font-semibold p-5 md:p-10 text-sm lg:text-lg">
              Te invat sa explorezi o calatorie personalizata de autocunoastere
              si dezvoltare.Procesul incepe prin identificarea si
              constientizarea obiectivelor tale, oferindu-ti un mediu sigur si
              confidential pentru a explora si discuta deschis problemele tale
              personale.Vei beneficia de suport emotional si ghidare in gasirea
              resurselor si solutiilor proprii, intr-un dialog concentrat pe
              incredere reciproca si respect.Te pot sprijini in gestionarea
              stresului, luarea deciziilor si dezvoltarea abilitatilor de
              rezolvare a problemelor care impiedica evolutia dorita de tine.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/mental-health-img.png"
              width={500}
              height={500}
              alt="family"
              className="rounded-3xl h-[150px] w-[150px] md:h-[150px] md:w-[150px] lg:h-[250px] lg:w-[250px]  shadow-2xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          <div className="flex flex-col items-center justify-center space-y-1 rounded-3xl shadow-2xl border-4 border-gray-500/20">
            <Image
              src="/familie.webp"
              width={500}
              height={500}
              alt="family"
              className="rounded-full h-[100px] w-[150px]"
            />
            <h1 className="font-extrabold">Relatia de cuplu sau de familie</h1>
            <p className="w-[300px] text-center">
              O terapie care te va ajuta sa creezi o relatie mai profunda cu
              familia sau persoama de langa tine
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 rounded-3xl shadow-2xl border-4 border-gray-500/20">
            <Image
              src="/positive-img.png"
              width={500}
              height={500}
              alt="family"
              className="rounded-3xl h-[100px] w-[150px]"
            />
            <h1 className="font-extrabold">O gandire sanatoasa si pozitiva</h1>
            <p className="w-[300px] text-center">
              “Ceea ce plantezi azi, vei culege in viitorul apropiat” Te voi
              ajuta sa iti imbunata-testi gandirea pentru a devenii cea mai buna
              versiune a ta.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 rounded-3xl shadow-2xl border-4 border-gray-500/20">
            <Image
              src="/heart-img.png"
              width={500}
              height={500}
              alt="family"
              className="rounded-full h-[100px] w-[150px]"
            />
            <h1 className="font-extrabold">Sentimentele</h1>
            <p className="w-[300px] text-center">
              Vei atinge un alt nivel de a-ti intelege sentimentele, si de a le
              controla.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 rounded-3xl shadow-2xl border-4 border-gray-500/20">
            <Image
              src="/conflict-img.png"
              width={500}
              height={500}
              alt="family"
              className="rounded-3xl h-[100px] w-[100px]"
            />
            <h1 className="font-extrabold">Conflictele</h1>
            <p className="w-[300px] text-center">
              Gestioneaza conflictele prin cea mai buna maniera
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 rounded-3xl shadow-2xl border-4 border-gray-500/20">
            <Image
              src="/familie.webp"
              width={500}
              height={500}
              alt="family"
              className="rounded-3xl h-[100px] w-[150px]"
            />
            <h1 className="font-extrabold">Depresie</h1>
            <p className="w-[300px] text-center">
              Daca depresia te tine in loc, simti ca nu poti sa iesi la
              suprafata..nu ezita sa ceri ajutor.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 rounded-3xl shadow-2xl border-4 border-gray-500/20">
            <Image
              src="/depresie-img.png"
              width={500}
              height={500}
              alt="family"
              className="rounded-3xl h-[100px] w-[150px]"
            />
            <h1 className="font-extrabold">Relaxare</h1>
            <p className="w-[300px] text-center">
              Focuseaza-ti atentia pe calm si creste-ti nivelul de
              constientizare.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 rounded-3xl shadow-2xl border-4 border-gray-500/20">
            <Image
              src="/relax-img.png"
              width={500}
              height={500}
              alt="family"
              className="rounded-3xl h-[100px] w-[150px]"
            />
            <h1 className="font-extrabold">Incredere de sine</h1>
            <p className="w-[300px] text-center">
              O terapie care te va ajuta sa creezi o relatie mai profunda cu
              familia sau persoama de langa tine
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 rounded-3xl shadow-2xl border-4 border-gray-500/20">
            <Image
              src="/confidence-img.png"
              width={500}
              height={500}
              alt="family"
              className="rounded-3xl h-[100px] w-[150px]"
            />
            <h1 className="font-extrabold">
              Constientizare pentru a nu fi manipulat usor
            </h1>
            <p className="w-[300px] text-center">
              O terapie care te va ajuta sa creezi o relatie mai profunda cu
              familia sau persoama de langa tine
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 rounded-3xl shadow-2xl border-4 border-gray-500/20">
            <Image
              src="/emotion-img.png"
              width={500}
              height={500}
              alt="family"
              className="rounded-3xl h-[100px] w-[150px]"
            />
            <h1 className="font-extrabold">Disciplina emotionala</h1>
            <p className="w-[300px] text-center">
              O terapie care te va ajuta sa creezi o relatie mai profunda cu
              familia sau persoama de langa tine
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3 mb-[20px] mt-[50px]  rounded-3xl">
          <div className="flex flex-col items-center justify-center space-y-1">
            <Image
              src="/mental-health-img.png"
              width={500}
              height={500}
              alt="family"
              className="rounded-3xl h-[150px] w-[150px] md:h-[150px] md:w-[150px] lg:h-[250px] lg:w-[250px] shadow-2xl"
            />
          </div>
          <div className="flex flex-col text-center items-center justify-center shadow-2xl rounded-xl border-2 border-gray-800/10">
            <p className=" lg:w-[500px] w-[350px] font-semibold md:font-semibold p-5 md:p-10 text-sm lg:text-lg">
              Pe masura ce progresam vei descoperii ca sedintele de consiliere
              devin combustibilul de care ai nevoie pentru a te descoperii atat
              pe tine dar mai ales emotiile si gandurile cu care te confrunti zi
              de zi si care intr-un final vor devenii aliatul tau. Prin dialog
              deschis si exercitii, vei dobandii abilitatile necesare pentru a
              face schimbari pozitive in viata ta.Fiecare sedinta va fi adaptata
              nevoilor tale, iar colaborarea noastra continua sa ofere sprijin
              si indrumare pe intraga ta calatorie de autocunoastere si crestere
              personala.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/mental-health-img.png"
              width={500}
              height={500}
              alt="family"
              className="rounded-3xl h-[150px] w-[150px] md:h-[150px] md:w-[150px] lg:h-[250px] lg:w-[250px] shadow-2xl"
            />
          </div>
        </div>

        {/* Cum începeți? */}
        <div className="flex flex-col text-center items-center justify-center p-2 mt-10 shadow-2xl rounded-3xl space-y-[30px]">
          <div className="flex flex-col items-center justify-center space-y-[20px] shadow-xl border-4 p-4 border-gray-500/20 rounded-2xl">
            <h1 className="text-2xl md:text-3xl font-extrabold">
              Cum începeți?
            </h1>
            <p className="md:max-w-[600px] w-[350px] text-md">
              Pentru a începe acest proces de transformare și descoperire
              personală, tot ce trebuie să faceți este să mă contactați prin
              telefon sau pe adresa de gmail. Vă voi programa o primă ședință în
              care vom discuta despre nevoile și așteptările dumneavoastră.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
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

              <div className="gap-2 flex flex-col justify-center items-center shadow-2xl rounded-2xl p-2 border-4 border-gray-500/20">
                <h1 className="lg:text-3xl text-xl font-extrabold">
                  Programeaza o consultatie
                </h1>
                <p className="md:text-lg text-md  w-[200px] md:w-[500px] text-center">
                  La cabinet <span className="text-3xl font-semibold">sau</span>{" "}
                  , planifica rapid o sesiune de consiliere online, din
                  confortul casei tale.Beneficiaza de sprijin pentru problemele
                  tale, de oriunde te-ai afla, castiga timp.Consultatiile sunt
                  confidentiale si la preturi accesibile.
                </p>
              </div>
              <div className="flex flex-col items-start justify-center space-y-[10px]">
                <div className="flex gap-3 items-center justify-center shadow-2xl rounded-2xl border-4 border-gray-800/20 p-2">
                  <FaPhoneVolume className="text-4xl shadow-2xl" />
                  <h1 className="text-2xl font-extrabold shadow-2xl">
                    0724904894
                  </h1>
                </div>
                <div className="flex gap-3 items-center justify-center shadow-2xl rounded-2xl border-4 border-gray-800/20 p-2">
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
      </div>
      ;
    </>
  );
};

export default Servicii;
