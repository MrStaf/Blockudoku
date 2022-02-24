import React from "react";
import Tile from "./Tile";

export default function Selector({ setMovingCoordinate }) {
  return (
    <div className="flex gap-5 mt-5">
      <Tile type={0} setMovingCoordinate={setMovingCoordinate} />
      <Tile type={1} setMovingCoordinate={setMovingCoordinate} />
      <Tile type={4} setMovingCoordinate={setMovingCoordinate} />
    </div>
  );
}
