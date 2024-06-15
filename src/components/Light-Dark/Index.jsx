import React, { useState } from "react";
import UseLocalStroage from "./UseLocalStroage";
import "./lightdark.css";

function Index() {
  // Using UseLocalStroage to store and retrieve the theme preference
  const [theme, setTheme] = UseLocalStroage("theme", "dark");
  const [enable, setEnable] = useState(false);
  // Function to toggle between light and dark themes
  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    setEnable((prevEnable) => !prevEnable);
  }

//   const toggleEnable = () => {
//     setEnable((prevEnable) => !prevEnable); // Toggle enable state
//     // Reset selection when toggling enable
//     // setMultiple([]); // Reset multiple selection when toggling enable
//   };
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>
          {" "}
          {enable ? " Dark" : "Lighr"} mode On{" "}
        </button>
      </div>
    </div>
  );
}

export default Index;
