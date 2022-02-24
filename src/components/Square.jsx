import { v4 } from "uuid";
import React, { useRef } from "react";

export default function Square({ i, j, active, setLimit }) {
  const dark = ((i < 3 || i > 5) && j % 6 < 3) || (i > 2 && i < 6 && j % 6 >= 3);
  const el = useRef(() => {
    if (!el) return;
    console.log(i, j);
    if (i === 0 && j === 0) {
      console.log(v4());
      const coord = el.getBoundingClientRect();
      setLimit((prev) => ({ x: coord.x, y: coord.y, xmax: prev.xmax, ymax: prev.ymax }));
    } else if (i === 8 && j === 8) {
      console.log(v4());
      const coord = el.getBoundingClientRect();
      setLimit((prev) => ({ x: prev.x, y: prev.y, xmax: coord, ymax: coord.ymax }));
    }
  });
  return (
    <div key={v4()} ref={el} className={`${active && "bg-blue-300"} ${dark ? "bg-gray-800" : "bg-gray-500"} border-black border w-16 h-16`}>
      {i * 9 + j}
    </div>
  );
}
