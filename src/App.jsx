/** @format */

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { bgImage } from "./utils";

const App = () => {
  return (
    <main
      className="bg-black w-[100vw] h-[100vh] bg-no-repeat p-6 md:py-32 md:px-44 bg-fixed bg-cover bg-left-top overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        // height: "100% ",
        // width: "100%",
      }}
    >
      <Navbar />
      <Hero />
    </main>
  );
};
export default App;
