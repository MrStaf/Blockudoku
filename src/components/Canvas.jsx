import { useState, useEffect } from "react";
import Square from "./Square";

export default function Canvas({ movingCoordinate }) {
  let gameInit = [];
  for (let i = 0; i < 9; i++) gameInit.push(new Array(9).fill(0));
  const [game, setGame] = useState(gameInit);
  const [limit, setLimit] = useState({ x: 0, y: 0, xmax: 0, ymax: 0 });

  useEffect(() => {
    setGame((prevGame) => {
      let old = prevGame;
      old[0][0] = 1;
      old[0][1] = 1;
      old[0][2] = 1;
      old[1][1] = 1;
      return [...old];
    });
  }, []);

  return (
    <div>
      {game.map((row, i) => {
        return (
          <div className="flex">
            {row.map((element, j) => (
              <Square i={i} j={j} active={element === 1} setLimit={setLimit} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
