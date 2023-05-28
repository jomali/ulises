import React from "react";
import MuiContainer from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  width: "100%",
}));

const Container = React.forwardRef((props, ref) => {
  const { children, openMenu, ...otherProps } = props;

  return (
    <MuiContainer
      {...otherProps}
      ref={ref}
      sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
    >
      <Offset />
      {children}
    </MuiContainer>
  );
});

export default Container;
