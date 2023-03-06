import React from "react";
import Landing from "./components/landing/Landing";
import Header from "./components/layouts/Header";

import "./App.css";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
