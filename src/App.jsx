// App.jsx
import React, { useState } from "react";

const Matrix = () => {
  const [clickedOrder, setClickedOrder] = useState([]);
  const [finalized, setFinalized] = useState(false);

  const handleClick = (index) => {
    if (finalized) return;
    if (index === 8) {
      setFinalized(true);
    } else {
      if (!clickedOrder.includes(index)) {
        setClickedOrder([...clickedOrder, index]);
      }
    }
  };

  const resetGame = () => {
    setClickedOrder([]);
    setFinalized(false);
  };

  const getBoxColor = (index) => {
    if (finalized && clickedOrder.includes(index)) {
      const delay = clickedOrder.indexOf(index) * 200;
      return {
        backgroundColor: "orange",
        transition: "background-color 0.3s ease",
        transitionDelay: `${delay}ms`,
      };
    }

    if (clickedOrder.includes(index)) {
      return { backgroundColor: "green" };
    }

    return { backgroundColor: "lightgray" };
  };

  return (
    <div className="flex flex-col items-center mt-12 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Matrix Click Game</h1>

      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className="w-20 h-20 flex items-center justify-center cursor-pointer rounded-md shadow-md text-lg font-semibold text-white hover:scale-105 transition-transform duration-150"
            style={getBoxColor(i)}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
      >
        Reset
      </button>
    </div>
  );
};

export default Matrix;
