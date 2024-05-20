import { useGSAP } from "@gsap/react";
import { boy, facebook, food, instagram, twitter } from "../utils";
import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";

const Hero = () => {
  const paragraphRef = useRef(null);
  const spanRef = useRef(null);
  useGSAP(() => {
    gsap.to("#welcome", {
      x: 0,
      duration: 1,
      opacity: 1,
      delay: 0.5,
      ease: "power2.in",
    });
    gsap.to("#sub-heading", {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power2.in",
      delay: 1,
    });
    gsap.to("#thanks", {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power2.in",
      delay: 1.5,
    });
    gsap.to("#read-btn", {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power2.in",
      delay: 1.5,
      backgroundColor: "#dfa141",
    });

    gsap.fromTo(
      "#instagram",
      { rotation: 50, x: 500, duration: 2, ease: "circ.in" },
      { rotation: 0, x: 0, duration: 1, ease: "circ.in" }
    );
    gsap.fromTo(
      "#facebook",
      { rotation: 50, y: -900, duration: 2, ease: "circ.in" },
      { rotation: 360, y: 0, duration: 1, ease: "circ.in", delay: 1 }
    );
    gsap.fromTo(
      "#twitter",
      { rotation: 0, x: 1400, duration: 2, ease: "circ.in" },
      { rotation: 360, x: 0, duration: 2, ease: "circ.in", delay: 1.5 }
    );
    gsap.fromTo(
      "#food",
      { rotation: 0, x: 600, duration: 1, ease: "circ.in" },
      { rotation: 360, x: 0, duration: 3, ease: "circ.in", delay: 1.5 }
    );
  }, []);

  useEffect(() => {
    // Animation logic
    const tl = gsap.timeline();
    const paragraph = paragraphRef.current;

    if (paragraph) {
      tl.from(paragraph, {
        duration: 1,
        opacity: 0,
        x: -150,
        ease: "power4.in",
        delay: 2,
      })
        .to(paragraph, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.in",
          color: "#dfa141",
        })
        .to(paragraph, {
          duration: 1,
          color: "#f5e5c1",
        });
    }

    // Cleanup
    return () => {
      tl.kill(); // Kill the timeline to prevent memory leaks
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <section className="py-6">
      <div className="grid grid-cols-2 gap-6 ">
        <div>
          <h2
            id="welcome"
            className="font-bold text-orange text-7xl mt-4 opacity-0"
          >
            Welcome
          </h2>
          <p
            id="sub-heading"
            className="font-bold text-white text-7xl  opacity-0"
          >
            Thanksgiving
          </p>
          <p
            id="thanks"
            className="font-bold text-white text-4xl my-7 opacity-0"
          >
            Gather here with grateful hearts.
          </p>
          <p ref={paragraphRef} className="font-medium text-blue text-xl my-5 ">
            Lorem{" "}
            <span ref={spanRef} className="text-yellow">
              ipsum dolor
            </span>{" "}
            sit amet, consectetur{" "}
            <span className="text-orange">adipiscing elit,</span> sed do eiusmod{" "}
            <span className="text-yellow">tempor lacus</span> vel facilisis. .
          </p>
          <div className="my-6">
            <button
              id="read-btn"
              className="bg-orange px-6 py-3 rounded-sm font-medium text-lg hover:bg-orange"
            >
              Read more
            </button>
          </div>
          <div className="flex flex-1 gap-2">
            <img
              id="instagram"
              src={instagram}
              height={40}
              width={40}
              alt="instagram"
            />
            <img
              id="facebook"
              src={facebook}
              height={40}
              width={40}
              alt="facebook"
            />
            <img
              id="twitter"
              src={twitter}
              height={40}
              width={40}
              alt="twitter"
            />
          </div>
        </div>
        <div className="flex flex-col items-center relative">
          <img src={boy} width={300} height={40} className="absolute top-0" />
          <img
            id="food"
            src={food}
            width={160}
            height={40}
            className="absolute bottom-1 right-36"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
