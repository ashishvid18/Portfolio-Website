import { lazy, Suspense, useEffect } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
const CharacterModel = lazy(() => import("./Character"));
const MainContainer = () => {
  useEffect(() => {
    setSplitText();
    const resizeHandler = () => {
      setSplitText();
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>
              <Suspense fallback={null}>
                <CharacterModel />
              </Suspense>
            </Landing>
            <About />
            <WhatIDo />
            <Work />
            <Career />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContainer;
