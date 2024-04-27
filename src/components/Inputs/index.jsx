import React from "react";

export const Input = ({ label, placeholder, min }) => {
  return (
    <div>
      <label className="label-inpt">{label}</label>
      <div className="inpts">
        <input
          className="inpt"
          type="text"
          placeholder={placeholder}
          min={min}
          required
        />
      </div>
    </div>
  );
};
