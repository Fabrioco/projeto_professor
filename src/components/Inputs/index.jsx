import React from "react";

export const Input = ({
  label,
  placeholder,
  min,
  pattern,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="label-inpt">{label}</label>
      <div className="inpts">
        <input
          className="inpt"
          type="text"
          placeholder={placeholder}
          min={min}
          pattern={pattern}
          required
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
