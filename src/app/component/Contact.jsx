import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="bg-gray-400/20 backdrop-blur-md rounded-2xl border-4 border-gray-500/10 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center  items-center justify-center"
      >
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 hover:bg-green-500/40 transition-[4]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className="items-center justify-center space-x-[10px] flex transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <FaFacebook className="text-5xl" />
              <p className={`m-0 max-w-[30ch] text-3xl `}>alinabradu</p>
            </span>
          </h2>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 hover:bg-green-500/40 transition-[4]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className="flex items-center justify-center space-x-[10px] transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <IoLogoWhatsapp className="text-5xl" />
              <p className={`m-0 max-w-[30ch] text-3xl`}>0724904894</p>
            </span>
          </h2>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 hover:bg-green-500/40 transition-[4]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className="flex items-center justify-center space-x-[10px] transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <FaInstagramSquare className="text-5xl" />

              <p className={`m-0 max-w-[30ch] text-3xl`}>alinabradu</p>
            </span>
          </h2>
        </a>
      </div>
      <div>
        <p>© 2024 Alina Bradu. All rights reserved.</p>
      </div>
    </>
  );
};

export default Contact;
