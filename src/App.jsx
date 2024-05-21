/** @format */

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { bgImage } from "./utils";

const App = () => {
  return (
    <main className="flex flex-col justify-center flex-1 items-center m-0 ">
      <section
        className="bg-black w-[100vw] h-[100vh]   p-6 md:py-6 md:px-8   xl:px-44 bg-left-top "
        style={{
          backgroundImage: `url(${bgImage})`,
          // backgroundAttachment: "fixed",

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100% ",
          // width: "100%",
        }}
      >
        <Navbar />
        <Hero />
      </section>
    </main>
  );
};
export default App;
