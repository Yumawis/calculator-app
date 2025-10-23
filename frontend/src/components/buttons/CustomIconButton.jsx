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
  padding: "0.8em",
  borderRadius: "8px",
  border: active
    ? `1.5px solid ${colors.borderIconActive}`
    : `1.5px solid ${colors.borderBox}`,
  cursor: "pointer",
  transition: "all 0.3s ease",
  transform: active ? "scale(0.97)" : "scale(1)",

  "&:hover": {
    backgroundColor: colors.hoverIcon,
  },

  "& svg": {
    transition: "transform 0.3s ease, fill 0.3s ease",
    fill: active ? colors.textPrimary : colors.textTertiary,
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
