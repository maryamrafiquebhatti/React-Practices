import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex justify-center bottom-12 inset-x-0">
        <div className="flex justify-center gap-3 shadow-lg bg-white rounded-3xl p-1">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-2 rounded-3xl" style={{ backgroundColor: "red" }}>
            RED
          </button>
          <button 
          onClick={() => setColor("orange")}

          className="outline-none px-4 py-2 rounded-3xl" style={{ backgroundColor: "orange" }}>
            ORANGE
          </button>
          <button 
          onClick={() => setColor("green")}

          className="outline-none px-4 py-2 rounded-3xl" style={{ backgroundColor: "green" }}>
            GREEN
          </button>
          <button 
          onClick={() => setColor("blue")}

          className="outline-none px-4 py-2 rounded-3xl" style={{ backgroundColor: "blue" }}>
            BLUE
          </button>
          <button 
          onClick={() => setColor("white")}

          className="outline-none px-4 py-2 rounded-3xl" style={{ backgroundColor: "white" }}>
            WHITE
          </button>
          <button 
          onClick={() => setColor("black")}

          className="outline-none px-4 py-2 rounded-3xl" style={{ backgroundColor: "black" }}>
            BLACK
          </button>
          <button 
          onClick={() => setColor("purple")}

          className="outline-none px-4 py-2 rounded-3xl" style={{ backgroundColor: "purple" }}>
            PURPLE
          </button>
          <button 
          onClick={() => setColor("grey")}

          className="outline-none px-4 py-2 rounded-3xl" style={{ backgroundColor: "grey" }}>
            GREY
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
