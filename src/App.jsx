/** @format */

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { bgImage } from "./utils";

const App = () => {
  return (
    <main className="flex flex-col justify-center items-center m-0 h-[100vh]">
      <section
        className="bg-black w-[100vw] h-[100vh] p-6 md:py-12 md:px-16  bg-left-top "
        style={{
          backgroundImage: `url(${bgImage})`,
          // backgroundAttachment: "fixed",

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100% ",
          // width: "100%",
        }}
      >
        <div className=" h-full">
          <Navbar />
          <Hero />
        </div>
      </section>
    </main>
  );
};
export default App;
