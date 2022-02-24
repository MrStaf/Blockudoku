import { useState, React } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// CSS
import "./App.css";
// Components
import Canvas from "./components/Canvas";
import Selector from "./components/Selector";

function App() {
  const [score, setScore] = useState(0);
  let gameInit = [];
  for (let i = 0; i < 9; i++) gameInit.push(new Array(9).fill(0));
  return (
    <div className="App">
      <header className="App-header">
        <div>{score}</div>
        <DndProvider backend={HTML5Backend}>
          <Canvas setScore={setScore} gameInit={gameInit} />
          <Selector />
        </DndProvider>
      </header>
    </div>
  );
}

export default App;
