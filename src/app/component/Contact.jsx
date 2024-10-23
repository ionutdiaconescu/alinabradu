import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="bg-green-600/30 rounded-2xl border-4 border-gray-500/20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center  items-center justify-center"
      >
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
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
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
