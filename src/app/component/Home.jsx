import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div
      id="home"
      className="mt-[150px] overflow-hidden relative flex-col-1 md:flex items-center"
    >
      <div className="max-w-[450px] md:max-w-[600px] space-y-[20px] md:space-y-[30px] mt-[100px]">
        <h1 className="text-4xl lg:text-5xl text-center md:text-start">
          Gaseste-ti echilibrul si {""}
          <span className="text-green-400 font-extrabold">
            bucuria interioara !
          </span>
        </h1>
        <h1 className="text-5xl text-center md:text-7xl md:text-start font-extrabold">
          Alina Bradu
        </h1>
        <p className="text-lg p-10 md:p-0 text-center font-semibold md:text-start">
          Psiholog și psihoterapeut dedicat să vă sprijine în călătoria voastră
          spre bunăstarea mentală și emoțională. Sunt Alina Bradu, psiholog si
          psihoterapeut cu o pasiune profundă pentru înțelegerea minții umane,
          am ales să îmi deduc cariera în domeniul psihoterapiei pentru a ajuta
          oamenii să își depășească dificultățile și să își atingă potențialul
          maxim.
        </p>
        <div>
          <div className="flex items-center justify-around w-[150px] md:w-[200px] h-[50px] md:h-[60px]  mb-4 shadow-2xl rounded-3xl">
            <div className=" w-[50px] h-[50px] cursor-pointer flex items-center justify-center">
              <Image
                src="/fb.png"
                width={500}
                height={500}
                alt="fb"
                className="shadow-2xl object-contain"
              />
            </div>

            <div className=" w-[100px] h-[100px] cursor-pointer flex items-center justify-center">
              <Image
                src="/insta.png"
                width={500}
                height={500}
                alt="insta"
                className="object-contain"
              />
            </div>
          </div>
          <Link href="#contact" className="scroll-smooth">
            <button className="bg-green-400 shadow-2xl rounded-xl p-2 font-extrabold w-[200px] h-[50px] cursor-pointer hover:scale-110 animate-bounce">
              CONTACT
            </button>
          </Link>
        </div>
      </div>
      <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Profile-img"
        className="rounded-r-full w-[400px] h-[400px] md:h-[600px] md:w-[600px] transform translate-x-[60px] translate-y-[-200px]  md:translate-x-[0px]  md:translate-y-[0px] "
      />
    </div>
  );
};

export default Home;
