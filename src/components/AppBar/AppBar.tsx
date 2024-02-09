import React from "react";
import styled from "@emotion/styled";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import MuiAppBar from "@mui/material/AppBar";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import useDebounce from "../useDebounce";

const ElevationScroll = (props: any) => {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
  });
};

const Gap = styled("span")(() => ({
  flexGrow: 1,
}));

const AppBar = (props: any) => {
  const { onMenuClick, title, TitleProps = {} } = props;

  const theme = useTheme();
  const debouncedTitle = useDebounce(title, TitleProps.timeout || 0);

  return (
    <ElevationScroll>
      <MuiAppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.common.black,
        }}
      >
        <Toolbar>
          <Fade in={title === debouncedTitle}>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontWeight: theme.typography.fontWeightBold,
              }}
            >
              {debouncedTitle}
            </Typography>
          </Fade>
          <Gap />
          <IconButton
            aria-label="menu"
            edge="end"
            onClick={onMenuClick}
            size="medium"
          >
            <ReplayRoundedIcon fontSize="inherit" />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
