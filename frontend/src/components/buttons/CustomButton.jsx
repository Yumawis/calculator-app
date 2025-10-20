import { Button, styled } from "@emotion/styled";

import colors from "../../theme/colors";

const StyledButton = styled(Button)(() => ({
  width: "100%",
  color: colors.textSecondary,
  padding: "0.9em 0.95em",
  fontSize: "16px",
  borderRadius: "1rem",
  backgroundColor: colors.primary,
  border: "none",
  cursor: "pointer",
  fontFamily: "'Fjalla One', system-ui",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: colors.hoverButton,
  },

  "&:active": {
    color: colors.activeBackground,
  },
}));

const CustomButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default CustomButton;

// import { useState } from "react";

// const CustomTextButton = ({
//   customBackgroundColor,
//   hoveredBackgroundColor,
//   customColor,
//   customText,
//   handleOnClick,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <button
//       style={{
//         display: "flex",
//         width: "100%",
//         padding: "14.5px 15px",
//         justifyContent: "center",
//         backgroundColor: isHovered
//           ? hoveredBackgroundColor
//           : customBackgroundColor,
//         color: customColor,
//         border: "none",
//         borderRadius: "6px",
//         cursor: "pointer",
//         fontSize: "16px",
//         transition: "all 0.3s ease",
//         fontFamily: "Fjalla One",
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={handleOnClick}
//     >
//       {customText}
//     </button>
//   );
// };

// export default CustomTextButton;
