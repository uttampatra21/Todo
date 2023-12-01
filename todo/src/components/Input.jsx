import React from "react";

const Input = () => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn btn-warning">Add</button>
    </div>
  );
};

export default Input;
