import { Typography } from "@mui/material";

import colors from "../../theme/colors";

const CustomTypography = ({
  variant,
  component,
  children,
  sx = {},
  ...props
}) => {
  return (
    <Typography
      variant={variant}
      component={component}
      sx={{
        fontFamily: `"Fjalla One", system-ui, sans-serif`,
        fontWeight: 400,
        fontStyle: "normal",
        textAlign: "center",
        color: colors.textPrimary,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export const H3 = (props) => (
  <CustomTypography variant="h3" component="h3" {...props} />
);
export const H4 = (props) => (
  <CustomTypography variant="h4" component="h4" {...props} />
);
export const H6 = (props) => (
  <CustomTypography variant="h6" component="h6" {...props} />
);
export const FormErrorMessage = (props) => (
  <CustomTypography
    variant="overline"
    sx={{
      color: colors.error,
      lineHeight: "15px",
    }}
    {...props}
  />
);
export default CustomTypography;
