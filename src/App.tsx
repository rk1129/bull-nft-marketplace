import React, { useEffect } from "react";
import Landing from "./components/landing/Landing";
import Header from "./components/layouts/Header";

import "./App.css";

function App() {
  useEffect(() => {
    return () => {
      const inViewport = (entries: any, observer: any) => {
        entries.forEach((entry: any) => {
          if (!entry.target.classList.contains("temp"))
            entry.target.classList.add("temp");
          else entry.target.classList.add("is-inViewport");
        });
      };

      const Obs = new IntersectionObserver(inViewport);

      const ELsinViewport1 = document.querySelectorAll(
        "[data-inviewport-left-to-right]"
      );
      ELsinViewport1.forEach((EL) => {
        Obs.observe(EL);
      });

      const ELsinViewport2 = document.querySelectorAll(
        "[data-inviewport-right-to-left]"
      );
      ELsinViewport2.forEach((EL) => {
        Obs.observe(EL);
      });
    };
  }, []);
  return (
    <div className="w-full">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
