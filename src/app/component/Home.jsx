import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center ">
      <div className="absolute flex flex-col items-center justify-center ">
        <Image
          src="/background3.png"
          width={500}
          height={500}
          alt="home-background"
          className="object-cover h-screen w-screen"
        />
        <div className="w-full h-[15rem]  bg-gradient-to-t from-white absolute bottom-0"></div>
        <div
          id="home"
          className="flex flex-col md:flex-row items-center justify-center absolute top-[5rem] md:top-[10rem] gap-6"
        >
          <div className=" rounded-2xl w-[20rem] md:w-[40rem] border-4 border-white/20 drop-shadow-2xl backdrop-blur-md bg-gray-300/30 p-2 mt-[5rem] md:mt-0 md:p-10 max-w-[450px] md:max-w-[500px] md:space-y-[20px] text-center">
            <h1 className="text-3xl text-center md:text-7xl md:text-start font-extrabold">
              Alina Bradu
            </h1>
            <p className="text-sm p-6 md:text-lg md:p-0 text-center font-semibold md:text-start">
              Înainte de toate sunt OM și mamă. Cred în pașii mici, insist pe
              prezent, privesc rareori in urma iar viitorul crede că va fi ceea
              ce creez acum. Nu sunt cu nimic mai specială decât tine. Nu poseda
              nici rețete secrete, nici puteri magice . Cred în puterea
              oamenilor de a se autodepășiri, atât din experiența proprie cât și
              din experiența profesională, iar prin vocația de psihoterapeut
              mi-am propus sa ofer oamenilor ocazia, metodele și perspectiva
              pentru a descoperi ce împlinire aduce înțelegerea de sine și
              depasirea intru-un mod sănătos a situatiililor personale de viață
              .
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center gap-2">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
