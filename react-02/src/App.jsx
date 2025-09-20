// This Project are basically for changing the background color of the screen using reactjs and tailwindcss.
// Here we are using useState hook for changing the color of the screen.

import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className=" w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("Green")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "Green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("Blue")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "Blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("Black")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "Black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("Yellow")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
