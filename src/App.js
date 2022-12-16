import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white"

    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = "black"


    }
  }
  return (
    <>
      <Header title="My Navbar" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyze" mode={mode} />
    </>
  );
}

export default App;
