import { Box } from "@mui/material";

const FormFlexBox = ({ children, sx }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        textAlign: "center",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default FormFlexBox;
