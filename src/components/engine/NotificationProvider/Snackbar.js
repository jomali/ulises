import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import MuiSnackbar from "@mui/material/Snackbar";

const SlideTransition = (props) => <Slide direction="bottom" {...props} />;

const Snackbar = React.forwardRef((props, ref) => {
  const {
    autoHideDuration = 6000,
    children,
    onClose,
    severity,
    ...otherProps
  } = props;

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={onClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <MuiSnackbar
      action={action}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      ref={ref}
      TransitionComponent={SlideTransition}
      message={children}
      {...otherProps}
    />
  );
});

export default Snackbar;
