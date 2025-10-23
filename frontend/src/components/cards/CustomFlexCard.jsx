import { Box } from "@mui/material";

import colors from "../../theme/colors";

const CustomFlexCard = ({ children, sx }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "550px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
        gap: "15px",
        border: `2px solid ${colors.border}`,
        borderRadius: "1rem",
        background: colors.secondary,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CustomFlexCard;
