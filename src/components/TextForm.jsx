import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Enter text here");
  const upperCase = (e) => {
    let upperText = text.toUpperCase();
    setText(upperText);
    e.preventDefault();
  };
  const lowerCase = (e) => {
    let upperText = text.toLowerCase();
    setText(upperText);
    e.preventDefault();
  };
  const clear = (e) => {
    setText("");
    e.preventDefault();
  };
  const handleCopy = (e) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    e.preventDefault();
  };

  return (
    <>
      <div className="container my-3">
        <h1 className={`text-${props.mode == "light" ? "dark" : "light"}`}>
          {props.heading}
        </h1>
        <form>
          <div className="form-group">
            <textarea
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
              }}
              className={`form-control text-${
                props.mode === "light" ? "dark" : "white"
              }`}
              id="myBox"
              rows="8"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-success mt-3" onClick={upperCase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-success mt-3 ms-3" onClick={lowerCase}>
            Convert to Lowercase
          </button>
          <button className="btn btn-success mt-3 ms-3" onClick={clear}>
            Clear
          </button>
          <button className="btn btn-success mt-3 ms-3" onClick={handleCopy}>
            Copy text
          </button>
        </form>
      </div>
    </>
  );
};

export default TextForm;
