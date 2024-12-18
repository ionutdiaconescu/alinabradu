import React from "react";
import { FaCheckSquare } from "react-icons/fa";

export const CardTarife = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center hover:bg-gray-400/10 transition-[4]  text-lg    rounded-3xl w-[400px] h-auto gap-4 p-2 shadow-2xl border-4 border-gray-300/30 backdrop-blur-md bg-gray-400/20">
        {/* titlu */}

        <h1 className="text-3xl font-extrabold text-center">
          Consiliere adulți
        </h1>
        {/* servicii */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-start justify-center p-1 border-t-4 border-green-500/50">
            <FaCheckSquare className="text-3xl text-green-500 drop-shadow-2xl mr-4 border-2 border-gray-500/10 rounded-md" />
            <p className="text-center w-[250px]">
              Sprijin maturitatea emoțională, depășind împreună anxietatea,
              depresia, dependențele, schimbările dificile și momentele
              dureroase.
            </p>
          </div>
          <div className="flex items-start justify-center p-1 border-t-4 border-green-500/50">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-2 border-gray-500/10 rounded-md" />
            <p className="text-center w-[250px]">
              Găsirea echilibrului și bucuria interioară
            </p>
          </div>
          <div className="flex items-start justify-center p-1 border-t-4 border-green-500/50">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-2 border-gray-500/10 rounded-md" />
            <p className="text-center w-[250px]">
              Dezvoltarea abilităților de gestionare a stresului
            </p>
          </div>
          <div className="flex items-start justify-center p-1 border-t-4 border-green-500/50">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-2 border-gray-500/10 rounded-md" />
            <p className="text-center w-[250px]">Cresterea stimei de sine</p>
          </div>
          <div className="flex items-start justify-center  p-1 border-t-4 border-green-500/50">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-2 border-gray-500/10 rounded-md" />
            <p className="text-center w-[250px]">Îmbunătățirea Relațiilor</p>
          </div>
          <div className="flex items-start justify-center p-1 border-t-4 border-green-500/50">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-2 border-gray-500/10 rounded-md" />
            <p className="text-center w-[250px]">Explorarea Sinei Interioare</p>
          </div>
          <div className="flex items-start justify-center p-1 border-t-4 border-green-500/50">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-2 border-gray-500/10 rounded-md" />
            <p className="text-center w-[250px]">
              Găsirea Sensului și Direcției
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-lg  hover:bg-gray-400/10 transition-[4]  rounded-3xl w-[400px] h-auto gap-4 p-2 shadow-2xl border-4 border-gray-400/20 backdrop-blur-md bg-gray-400/20">
        {/* titlu */}
        <h1 className="text-3xl font-extrabold text-center">
          Consiliere copii
        </h1>
        {/* servicii */}
        <div className="flex flex-col space-y-[10px]">
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Creșterea stimei de sine prin înțelegerea nevoilor lui reale de
              către părinți;
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Creșterea performanțelor școlare prin scăderea problemelor
              comportamentale.
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Reducerea stresului și anxietății;
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Evitarea depresiilor provocate din lipsa de afectiune parentala
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Îmbunătățirea comunicării și a exprimarii sentimentelor
            </p>
          </div>
          <div className="flex items-center justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Să gestioneze mai bine frustrarea, furia și alte emoții negative;
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-lg hover:bg-gray-400/10 transition-[4]   rounded-3xl w-[400px] h-auto gap-4 p-2 shadow-2xl border-4 border-gray-300/30 backdrop-blur-md bg-gray-400/20">
        {/* titlu */}
        <h1 className="text-3xl font-extrabold text-center">
          Consiliere cupluri
        </h1>
        {/* servicii */}
        <div className="flex flex-col space-y-[10px]">
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Lipsa de comunicare sau comunicarea defectuoasă
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Conflicte generate de diferențele de temperament
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Probleme legate de intimitate și viața sexuală
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Gelozia și lipsa de încredere
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Rutina și plictiseala din relație
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">Probleme financiare</p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Diferențe în ceea ce privește așteptările de la relație
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Probleme cu socrii sau familiile extinse
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">Crize existențiale</p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">Infidelitate și divorț</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-lg  hover:bg-gray-400/10 transition-[4]  rounded-3xl w-[400px] h-auto gap-4 p-2 shadow-2xl border-4 border-gray-300/30 backdrop-blur-md bg-gray-400/20">
        {/* titlu */}
        <h1 className="text-3xl font-extrabold text-center p-2">
          Consiliere parentală (dezvoltare relatie parinte-copil)
        </h1>
        {/* servicii */}
        <div className="flex flex-col space-y-[10px]">
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Ghidez părinții în dezvoltarea relației cu copiii: înțelegerea
              etapelor de creștere, depășirea crizelor familiale, promovarea
              unui stil părintesc echilibrat și comunicarea îmbunătățită.
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Îmbunătățirea comunicării și rezolvarea conflictelor;
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Creșterea coeziunii și înțelegerii dintre membrii familiei;
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Formarea unei vieți de familie armonioase.
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Reducerea riscului de abuzuri emoționale sau fizice;
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              O mai bună cunoaștere a copilului și înțelegere a nevoilor lui;
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Sentimentul că sunt înțeleși și susținuți în provocările
              parentalității; 
            </p>
          </div>
          <div className="flex items-start justify-center border-t-4 border-green-500/50 p-1">
            <FaCheckSquare className="text-3xl text-green-500 mr-4 border-gray-500/10 rounded-md border-2" />
            <p className="text-center w-[250px]">
              Să învețe tehnici eficiente de disciplinare a copilului fără
              pedepse fizice;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
