import { Box } from "@mui/material";

import colors from "../../theme/colors";

const CustomFlexCard = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
        gap: "25px",
        borderRadius: "1rem",
        background: colors.secondary,
        boxShadow: `25px 25px 50px ${colors.shadowDark}, -25px -25px 50px ${colors.shadowLight}`,
        ...sx,
      }}
    >
      {Children}
    </Box>
  );
};

export default CustomFlexCard;
