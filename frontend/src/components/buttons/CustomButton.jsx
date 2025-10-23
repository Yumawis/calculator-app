import { Button, styled } from "@mui/material";

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
