import { useState } from "react";

const CustomIconButton = ({
  customBackgroundColor,
  hoveredBackgroundColor,
  customColor,
  customIcon,
  customBorderColor,
  onClick,
  isSelected,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        display: "flex",
        padding: "9px 15px",
        alignItems: "center",
        backgroundColor: isSelected
          ? hoveredBackgroundColor
          : isHovered
          ? hoveredBackgroundColor
          : customBackgroundColor,
        color: customColor,
        border: `1.5px solid ${isSelected ? "#388E3C" : customBorderColor}`,
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {customIcon}
    </button>
  );
};

export default CustomIconButton;
