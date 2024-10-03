import React from "react";
import Image from "next/image";
import { FaCheckSquare } from "react-icons/fa";
const Tarife = () => {
  return (
    <>
      <div
        className="flex flex-col space-y-[100px] items-center justify-around w-full h-full"
        id="tarife"
      >
        <h1 className="text-center font-extrabold text-4xl shadow-2xl rounded-2xl p-2 border-4 border-gray-500/20">
          Tarife servicii consiliere psihologică
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center md:justify-around gap-[60px] shadow-2xl md:p-4 rounded-3xl">
          <div className="flex flex-col items-center justify-center text-lg bg-yellow-300 rounded-3xl w-[400px] h-auto gap-4 p-2 shadow-2xl border-4 border-white/50">
            {/* titlu */}

            <h1 className="text-3xl font-extrabold text-center">
              Consiliere adulți
            </h1>
            {/* servicii */}
            <div className="flex flex-col space-y-[10px]">
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-2 border-gray-500/10 rounded-2xl" />
                <p className="text-center w-[250px]">
                  Sprijin maturitatea emoțională, depășind împreună anxietatea,
                  depresia, dependențele, schimbările dificile și momentele
                  dureroase.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-2 border-gray-500/10 rounded-2xl" />
                <p className="text-center w-[250px]">
                  Găsirea echilibrului și bucuria interioară
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-2 border-gray-500/10 rounded-2xl" />
                <p className="text-center w-[250px]">
                  Dezvoltarea abilităților de gestionare a stresului
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-2 border-gray-500/10 rounded-2xl" />
                <p className="text-center w-[250px]">
                  Cresterea stimei de sine
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-2 border-gray-500/10 rounded-2xl" />
                <p className="text-center w-[250px]">
                  Îmbunătățirea Relațiilor
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-2 border-gray-500/10 rounded-2xl" />
                <p className="text-center w-[250px]">
                  Explorarea Sinei Interioare
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-2 border-gray-500/10 rounded-2xl" />
                <p className="text-center w-[250px]">
                  Găsirea Sensului și Direcției
                </p>
              </div>
              <div className="flex items-center justify-center space-x-[10px]">
                <Image
                  src="/payment.png"
                  width={500}
                  height={500}
                  alt="family"
                  className="rounded-3xl h-[50px] w-[50px]  "
                />
                <h1 className="text-3xl font-extrabold">100 RON</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-lg bg-blue-700 rounded-3xl w-[400px] h-auto gap-4 p-2 shadow-2xl border-4 border-white/50">
            {/* titlu */}
            <h1 className="text-3xl font-extrabold text-center">
              Consiliere copii
            </h1>
            {/* servicii */}
            <div className="flex flex-col space-y-[10px]">
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Creșterea stimei de sine prin înțelegerea nevoilor lui reale
                  de către părinți;
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Creșterea performanțelor școlare prin scăderea problemelor
                  comportamentale.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Reducerea stresului și anxietății;
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Evitarea depresiilor provocate din lipsa de afectiune
                  parentala
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Îmbunătățirea comunicării și a exprimarii sentimentelor
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Să gestioneze mai bine frustrarea, furia și alte emoții
                  negative;
                </p>
              </div>
              <div className="flex items-center justify-center space-x-[10px]">
                <Image
                  src="/payment.png"
                  width={500}
                  height={500}
                  alt="family"
                  className="rounded-3xl h-[50px] w-[50px]  "
                />
                <h1 className="text-3xl font-extrabold">150 RON</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-lg  bg-purple-600 rounded-3xl w-[400px] h-auto gap-4 p-2 shadow-2xl border-4 border-white/50">
            {/* titlu */}
            <h1 className="text-3xl font-extrabold text-center">
              Consiliere cupluri
            </h1>
            {/* servicii */}
            <div className="flex flex-col space-y-[10px]">
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Lipsa de comunicare sau comunicarea defectuoasă
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Conflicte generate de diferențele de temperament
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Probleme legate de intimitate și viața sexuală
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Gelozia și lipsa de încredere
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Rutina și plictiseala din relație
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">Probleme financiare</p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Diferențe în ceea ce privește așteptările de la relație
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Probleme cu socrii sau familiile extinse
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">Crize existențiale</p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">Infidelitate și divorț</p>
              </div>
              <div className="flex items-center justify-center space-x-[10px]">
                <Image
                  src="/payment.png"
                  width={500}
                  height={500}
                  alt="family"
                  className="rounded-3xl h-[50px] w-[50px]  "
                />
                <h1 className="text-3xl font-extrabold">250 RON</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-lg bg-green-500 rounded-3xl w-[400px] h-auto gap-4 p-2 shadow-2xl border-4 border-white/50">
            {/* titlu */}
            <h1 className="text-3xl font-extrabold text-center p-2">
              Consiliere parentală (dezvoltare relatie parinte-copil)
            </h1>
            {/* servicii */}
            <div className="flex flex-col space-y-[10px]">
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Ghidez părinții în dezvoltarea relației cu copiii: înțelegerea
                  etapelor de creștere, depășirea crizelor familiale, promovarea
                  unui stil părintesc echilibrat și comunicarea îmbunătățită.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Îmbunătățirea comunicării și rezolvarea conflictelor;
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Creșterea coeziunii și înțelegerii dintre membrii familiei;
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Formarea unei vieți de familie armonioase.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Reducerea riscului de abuzuri emoționale sau fizice;
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  O mai bună cunoaștere a copilului și înțelegere a nevoilor
                  lui;
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Sentimentul că sunt înțeleși și susținuți în provocările
                  parentalității; 
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FaCheckSquare className="text-3xl text-white mr-4 border-gray-500/10 rounded-2xl border-2" />
                <p className="text-center w-[250px]">
                  Să învețe tehnici eficiente de disciplinare a copilului fără
                  pedepse fizice;
                </p>
              </div>
              <div className="flex items-center justify-center space-x-[10px]">
                <Image
                  src="/payment.png"
                  width={500}
                  height={500}
                  alt="family"
                  className="rounded-3xl h-[50px] w-[50px]  "
                />
                <h1 className="text-3xl font-extrabold">250 RON</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Tarife;
