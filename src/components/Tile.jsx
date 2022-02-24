import { useState, useCallback } from "react";
import { v4 } from "uuid";

const Square = ({ active, moving }) => {
  return <div className={`${active ? "bg-blue-300" : "bg-transparent"} border-black ${active ? "border" : "border-0"} ${moving ? "w-12 h-12" : "w-8 h-8"}`}></div>;
};

const tiles = [
  [
    [1, 0],
    [1, 1],
  ],
  [
    [1, 1],
    [1, 0],
  ],
  [
    [1, 1],
    [0, 1],
  ],
  [
    [0, 1],
    [1, 1],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 1],
    [1, 1],
    [1, 0],
  ],
  [
    [1, 0],
    [1, 1],
    [0, 1],
  ],
];

export default function Tile({ type, setMovingCoordinate }) {
  const tile = tiles[type];
  const [coordinate, setCoordinate] = useState({
    block: {
      x: 0,
      y: 0,
    },
    pointer: { x: 0, y: 0 },
    posInit: { x: 0, y: 0 },
    moving: false,
  });
  const handleMouseMove = useCallback(
    (event) => {
      if (!coordinate.moving) {
        return;
      }
      const coordinates = { x: event.clientX, y: event.clientY };
      setMovingCoordinate({ x: event.clientX, y: event.clientY, moving: true });

      setCoordinate((prev) => {
        const diff = {
          x: coordinates.x - prev.pointer.x,
          y: coordinates.y - prev.pointer.y,
        };
        return {
          moving: true,
          pointer: coordinates,
          posInit: prev.posInit,
          block: { x: prev.block.x + diff.x, y: prev.block.y + diff.y },
        };
      });
    },
    [coordinate.moving],
  );

  const handleMouseUp = useCallback((event) => {
    setMovingCoordinate({ x: event.clientX, y: event.clientY, moving: false });

    setCoordinate((prev) => {
      return {
        ...prev,
        block: { x: 0, y: 0 },
        moving: false,
      };
    });
  }, []);

  const handleMouseDown = useCallback((event) => {
    const startingCoordinates = { x: event.clientX, y: event.clientY };
    setCoordinate((prev) => ({
      ...prev,
      posInit: { x: event.clientX, y: event.clientY },
      pointer: startingCoordinates,
      moving: true,
    }));
    event.stopPropagation();
  }, []);
  return (
    <div
      key={v4()}
      style={{ top: coordinate.block.y, left: coordinate.block.x, position: "relative", display: "flex", flexDirection: "column" }}
      className={`${coordinate.moving && "gap-5"}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}>
      {tile.map((row) => {
        return (
          <div className={`flex ${coordinate.moving && "gap-5"}`}>
            {row.map((elem) => {
              return <Square active={elem === 1} moving={coordinate.moving} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
