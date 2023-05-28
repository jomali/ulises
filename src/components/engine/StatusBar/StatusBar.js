import React from "react";
import styled from "@emotion/styled";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AppBar from "@mui/material/AppBar";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import useDebounce from "components/engine/useDebounce/useDebounce";

const ElevationScroll = (props) => {
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

const StatusBar = (props) => {
  const { onMenuClick, title, TitleProps = {} } = props;

  const theme = useTheme();
  const debouncedTitle = useDebounce(title, TitleProps.timeout || 0);

  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.common.black,
        }}
      >
        <Toolbar>
          <Fade in={title === debouncedTitle}>
            <Typography sx={{ fontWeight: theme.typography.fontWeightBold }}>
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
            <MenuRoundedIcon fontSize="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default StatusBar;
