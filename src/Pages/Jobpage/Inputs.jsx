import React from "react";

const Inputs = ({ label, placeholder, name }) => {
  return (
    <div className="mb-lg-2 w-100">
      <label className="label">{label}</label>
      <input
        type="text"
        name={name}
        className="form-control input-width"
        placeholder={placeholder}
        id=""
        required
      />
    </div>
  );
};

export default Inputs;
