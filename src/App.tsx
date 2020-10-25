import React, { useEffect } from "react";
import { GlobalStyles } from "./styles";
import { LifeGenerator } from "./components/LifeGenerator/LifeGenerator";
import { handleFirstTab } from "./utils/focusVisible";

function App() {
  useEffect(() => window.addEventListener("keydown", handleFirstTab), []);

  return (
    <>
      <GlobalStyles />
      <LifeGenerator />
    </>
  );
}

export default App;
