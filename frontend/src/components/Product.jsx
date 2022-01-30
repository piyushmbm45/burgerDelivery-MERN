import React from "react";

export const Product = () => {
  return (
    <div>
      <img src="/images/pizza1.jpg" alt="peproni" />
      <div className="text-center">
        <h2 className="text-lg font-bold py-2">Main Pizza</h2>
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
          Small
        </span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span>500/-</span>
        <button className="py-1 px-4 bg-yellow-500 px-4 rounded-full font-bold">
          Add
        </button>
      </div>
    </div>
  );
};
