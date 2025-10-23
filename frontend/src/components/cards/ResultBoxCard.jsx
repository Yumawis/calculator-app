import { Box } from "@mui/material";

import colors from "../../theme/colors";

const ResultBox = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "1em",
        gap: "0.5em",
        border: `1.5px solid ${colors.borderBox}`,
        borderRadius: "1rem",
        backgroundColor: colors.accent,
      }}
    >
      {children}
    </Box>
  );
};

export default ResultBox;
