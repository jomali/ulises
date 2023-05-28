import { useTheme } from "@mui/material/styles";

const Strong = ({ children, ...otherProps }) => {
  const theme = useTheme();

  return (
    <span
      style={{ fontWeight: theme.typography.fontWeightBold }}
      {...otherProps}
    >
      {children}
    </span>
  );
};

export default Strong;
