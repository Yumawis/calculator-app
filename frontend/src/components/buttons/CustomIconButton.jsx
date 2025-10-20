import { IconButton, styled } from "@mui/material";

import colors from "../../theme/colors";

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "active", // 👈 evita pasar 'active' al DOM
})(({ active }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: active ? colors.activeBackgroundIcon : colors.accent,
  padding: "1.4em",
  borderRadius: "8px",
  border: active
    ? `2px solid ${colors.borderIconActive}`
    : `1.5px solid ${colors.borderBox}`,
  cursor: "pointer",
  transition: "all 0.3s ease",
  transform: active ? "scale(0.97)" : "scale(1)",

  "&:hover": {
    backgroundColor: colors.hoverIcon,
  },

  "&:svg": {
    transition: "transform 0.3s ease, fill 0.3s ease",
    fill: active ? colors.textSecondary : colors.textTertiary,
  },
}));

const CustomIconButton = ({ icon, active = false, ...props }) => {
  return (
    <StyledIconButton active={active} {...props}>
      {icon}
    </StyledIconButton>
  );
};

export default CustomIconButton;

// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <button
//       style={{
//         display: "flex",
//         padding: "9px 15px",
//         alignItems: "center",
//         backgroundColor: isSelected
//           ? hoveredBackgroundColor
//           : isHovered
//           ? hoveredBackgroundColor
//           : customBackgroundColor,
//         color: customColor,
//         border: `1.5px solid ${isSelected ? "#388E3C" : customBorderColor}`,
//         borderRadius: "6px",
//         cursor: "pointer",
//         fontSize: "16px",
//         transition: "all 0.3s ease",
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       {customIcon}
//     </button>
//   );
// };
