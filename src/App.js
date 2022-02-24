import "./App.css";
import { useState, React } from "react";

import Canvas from "./components/Canvas";
import Selector from "./components/Selector";

function App() {
  const [score, setScore] = useState(0);
  const [movingCoordinate, setMovingCoordinate] = useState({ x: 0, y: 0, moving: false });
  return (
    <div className="App">
      <header className="App-header">
        <div>{score}</div>
        <Canvas setScore={setScore} movingCoordinate={movingCoordinate} />
        <Selector setMovingCoordinate={setMovingCoordinate} />
      </header>
    </div>
  );
}

export default App;
