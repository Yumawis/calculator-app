import { Box } from "@mui/material";

import colors from "../theme/colors";

const CalculatorContainer = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secondary,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CalculatorContainer;
