import { useDrag } from "react-dnd";
import { v4 } from "uuid";
// Constants
import { tiles } from "./Constants";

const Square = ({ active, moving }) => {
  return <div className={`${active ? "bg-blue-300" : "opacity-0"} border-black ${active ? "border" : "border-0"} w-12 h-12`}></div>;
};

export default function Tile({ type }) {
  const tile = tiles[type];
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "" + type,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div ref={drag} style={{ display: "flex", flexDirection: "column", opacity: isDragging ? "0" : "1" }}>
      {tile.map((row) => {
        return (
          <div key={v4()} className="flex">
            {row.map((elem) => {
              return <Square key={v4()} active={elem === 1} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
