import Contact from "./component/Contact";
import Hero from "./component/Home";
import Navbar from "./component/Navbar";
import Servicii from "./component/Servicii";
import Tarife from "./component/Tarife";
// import GalerieFoto from "./component/GalerieFoto";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between space-y-[50px] md:space-y-[100px]">
      <Navbar />
      <Hero />
      <Servicii />
      <Tarife />
      {/* <GalerieFoto /> */}
      <Contact />
    </main>
  );
}
