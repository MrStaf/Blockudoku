import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { tiles } from "./Constants";

// Components
import Square from "./Square";

export default function Canvas({ movingCoordinate, gameInit }) {
  const [game, setGame] = useState(gameInit);

  const moveTile = (x, y, type) => {
    // We assume that x, y are the top left corner of the piece
    const tile = tiles[type];
    let oldGame = game;
    setGame(
      oldGame.map((row, i) => {
        return row.map((element, j) => {
          if (i >= x && i < x + tile.length && j >= y && j < y + tile[0].length) {
            return tile[x - i + 1][y - j + 1];
          } else {
            return element;
          }
        });
      }),
    );
    console.log(oldGame);
  };

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
    <div onClick={() => moveTile(8, 8, 2)}>
      {game.map((row, i) => {
        return (
          <div key={"row" + i} className="flex">
            {row.map((element, j) => (
              <Square key={v4()} i={i} j={j} active={element === 1} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
