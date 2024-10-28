import "./App.css";
import "./min.css";

import { useState } from "react";

function App() {
  const [person, setPerson] = useState("Ahmed");
  const [count, setcount] = useState(0);
  const [theme, settheme] = useState("");
  const [age, setage] = useState(28);
  const changeName = () => {
    setage(30);
  };

  return (
    <div className={`card ${theme}`}>
      <button
        onClick={() => {
          settheme(theme == "" ? "Dark" : "");
        }}
        style={{ marginBottom: "44px" }}
      >
        Toggle Theme
      </button>
      <div
        onChange={() => {
          settheme(theme == "" ? "Dark" : "");
        }}
        style={{ marginBottom: "44px" }}
        className="btn-container"
      >
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div>
        <button
          onClick={() => {
            settheme("");
          }}
          style={{ marginRight: "26px" }}
        >
          Light
        </button>
        <button
          onClick={() => {
            settheme("Dark");
          }}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            settheme("grey");
          }}
          style={{ marginRight: "26px" }}
        >
          grey
        </button>
        <button
          onClick={() => {
            settheme("pink");
          }}
        >
          pink
        </button>
      </div>
      <h2 style={{ marginTop: "66px" }}>My name is {person}</h2>
      <button
        onClick={() => {
          setPerson("alghdyry");
        }}
      >
        change name
      </button>
      <br />
      <br />
      <h2>My age is {age} </h2>
      <button onClick={changeName}>change age</button>

      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        chang is {count}
      </button>
    </div>
  );
}

export default App;
