import { Input, styled } from "@mui/material";

import colors from "../../theme/colors";

const StyledInput = styled(Input)(() => ({
  width: "100%",
  border: "none",
  borderRadius: "1rem",
  backgroundColor: colors.secondary,
  transition: "all 0.3s ease",

  "&:before, &:after": {
    display: "none",
  },

  "& .MuiInput-input": {
    borderRadius: "1rem",
    padding: "1rem",
    transition: "all 0.3s ease",
    border: `2px solid ${colors.border}`,
    textAlign: "center",
    fontFamily: "'Fjalla One', system-ui",
    fontWeight: 400,
    fontStyle: "normal",
    color: colors.textPrimary,
  },

  "& .MuiInput-input:focus": {
    border: `2px solid ${colors.borderInputActive}`,
    backgroundColor: colors.secondary,
  },
}));

const CustomNumberInput = (props) => {
  return <StyledInput type="number" {...props} />;
};

export default CustomNumberInput;
