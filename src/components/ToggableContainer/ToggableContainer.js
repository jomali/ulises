import React from "react";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import { styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  width: "100%",
}));

const ToggableContainer = React.forwardRef((props, ref) => {
  const { children, delayed, maxWidth = "sm", visible, ...otherProps } = props;

  const theme = useTheme();

  return (
    <Fade
      in={visible}
      mountOnEnter
      ref={ref}
      style={{
        transitionDelay: delayed ? theme.transitions.duration.standard : "0ms",
      }}
      unmountOnExit
    >
      <Container maxWidth={maxWidth} {...otherProps}>
        <Offset />
        {children}
      </Container>
    </Fade>
  );
});

ToggableContainer.propTypes = {
  children: PropTypes.node.isRequired,
  delayed: PropTypes.bool,
  maxWidth: PropTypes.oneOf(["lg", "md", "sm", "xl", false]),
  visible: PropTypes.bool,
};

export default ToggableContainer;
