import React, { useState } from "react";

const CustomNumberInput = ({ customPlaceholder, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <input
      type="number"
      placeholder={customPlaceholder}
      value={value}
      onChange={onChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        backgroundColor: "#FAFAFA",
        width: "100%",
        padding: "14.5px 0",
        border: isFocused ? "2px solid #A5D6A7" : "2px solid #CCCCCC",
        borderRadius: "8px",
        textAlign: "center",
        outline: "none",
        boxShadow: isFocused ? "0 0 4px rgba(74, 144, 226, 0.5)" : "none",
        transition: "all 0.2s ease-in-out",
      }}
    />
  );
};

export default CustomNumberInput;
