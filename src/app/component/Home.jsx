import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col md:flex-row h-full md:h-screen w-screen items-center justify-end gap-5 top-[5rem] md:top-[2rem] "
    >
      <div className="flex absolute items-center justify-center top-[-15rem] left-[-8rem] md:top-[-30rem] md:left-[-15rem]    bg-gradient-to-b from-green-500 to-green-200/50 h-[30rem] w-[30rem] md:h-[70rem] md:w-[70rem] rounded-br-full">
        <div className=" ">
          <Image
            src="/hero-img.png"
            width={500}
            height={500}
            alt="home-background"
            className="object-cover md:h-[20rem] md:w-[30rem] h-[8rem] w-[12rem] translate-y-[7rem] md:translate-y-[12rem]"
          />
        </div>
      </div>
      <div className="flex flex-wrap md:flex items-center justify-center gap-3 m-10 mt-[12rem] md:mt-0">
        {/* --------------------TEXT-------------------------------- */}
        <div className="rounded-2xl w-[20rem] md:w-[40rem] border-4 border-bray-500/40 drop-shadow-2xl backdrop-blur-sm bg-gray-300/30   md:p-10 max-w-[550px] md:max-w-[600px] md:space-y-[20px] text-center">
          <h1 className="text-3xl text-center md:text-7xl md:text-start font-extrabold">
            Alina Bradu
          </h1>
          <p className="text-sm p-2 md:text-lg md:p-0 text-center font-semibold md:text-start">
            Înainte de toate sunt OM și mamă. Cred în pașii mici, insist pe
            prezent, privesc rareori in urma iar viitorul crede că va fi ceea ce
            creez acum. Nu sunt cu nimic mai specială decât tine. Nu poseda nici
            rețete secrete, nici puteri magice . Cred în puterea oamenilor de a
            se autodepășiri, atât din experiența proprie cât și din experiența
            profesională, iar prin vocația de psihoterapeut mi-am propus sa ofer
            oamenilor ocazia, metodele și perspectiva pentru a descoperi ce
            împlinire aduce înțelegerea de sine și depasirea intru-un mod
            sănătos a situatiililor personale de viață .
          </p>
        </div>
        {/* -----------------------Contact------------- */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center drop-shadow-2xl">
            <div className=" cursor-pointer flex items-center justify-center hover:scale-110 ">
              <Image
                src="/fb.png"
                width={50}
                height={50}
                alt="fb"
                className="shadow-2xl object-cover w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full "
              />
            </div>

            <div className=" cursor-pointer flex items-center justify-center  hover:scale-110">
              <Image
                src="/insta.png"
                width={110}
                height={110}
                alt="insta"
                className="object-cover w-[40px] h-[40px] md:w-[75px] md:h-[75px]"
              />
            </div>
          </div>
          <Link href="#contact" className="scroll-smooth">
            <button className="bg-green-700/20 backdrop-blur-md border-gray-700/10 border-2 drop-shadow-2xl shadow-2xl rounded-xl p-2 font-extrabold w-[150px] h-[50px] md:w-[200px] md:h-[60px] cursor-pointer hover:scale-110 hover:bg-green-700/10">
              CONTACT
            </button>
          </Link>
        </div>
        {/* ---------------------------------------- */}
      </div>
    </div>
  );
};

export default Home;
