import { useState } from "react";

const CustomTextButton = ({
  customBackgroundColor,
  hoveredBackgroundColor,
  customColor,
  customText,
  handleOnClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        display: "flex",
        width: "100%",
        padding: "14.5px 15px",
        justifyContent: "center",
        backgroundColor: isHovered
          ? hoveredBackgroundColor
          : customBackgroundColor,
        color: customColor,
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "all 0.3s ease",
        fontFamily: "Fjalla One",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleOnClick}
    >
      {customText}
    </button>
  );
};

export default CustomTextButton;
