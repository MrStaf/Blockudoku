import React from "react";

export default function Square({ i, j, active, setLimit }) {
  const dark = ((i < 3 || i > 5) && j % 6 < 3) || (i > 2 && i < 6 && j % 6 >= 3);

  return (
    <div className={`${active && "bg-blue-300"} ${!active && (dark ? "bg-gray-800" : "bg-gray-500")} border-black border w-16 h-16`}>
      {i} {j}
    </div>
  );
}
