import React, { useState, useEffect } from "react";
import "./assets/styles/index.css";
import "./assets/styles/normalize.css";
import Header from "./pages/header";
import Main from "./pages/main";
import About from "./pages/about";
import Application from "./pages/application";
import Cover from "./pages/cover";
import Info from "./pages/info";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import './assets/icons/style.css'
function App() {
  const [whiteMode, setWhiteMode] = useState(false);
  const changeTheme = () => {
    setWhiteMode(!whiteMode);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (whiteMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [whiteMode]);

  return (
    <div className={`bg-custom-purple ${whiteMode && "dark"} dark:bg-zinc-200`}>
      <Header changeTheme={changeTheme} whiteMode={whiteMode} />
      <Main />
      <About />
      <Application />
      <Cover />
      <Info />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
