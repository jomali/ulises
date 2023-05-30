import React from "react";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useStory } from "components/engine/StoryProvider";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip placement="right" {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
  },
}));

const Option = (props) => {
  const {
    children,
    difficulty = 0,
    disabled,
    hidden,
    onClick = () => null,
    storylet,
    variant = "default",
    ...otherProps
  } = props;

  const story = useStory();

  const ConditionalTooltip = ({ children: childrenParam }) =>
    variant !== "default" ? (
      <HtmlTooltip
        title={
          <>
            <Typography color="inherit">
              Tienes: {story.data[variant]}₺
            </Typography>
            <Typography color="inherit">Necesitas: {difficulty}₺</Typography>
          </>
        }
      >
        {childrenParam}
      </HtmlTooltip>
    ) : (
      childrenParam
    );

  const getIcon = () => {
    switch (variant) {
      case "money":
        return (
          <Stack direction="row" spacing={0.4}>
            <Typography>{difficulty}</Typography>
            <CurrencyLiraIcon />
          </Stack>
        );
      case "stamina":
        return <FavoriteIcon />;
      default:
        return null;
    }
  };

  const getResult = () => difficulty;

  const isDisabled = () => {
    switch (variant) {
      case "money":
        return disabled || story.data.money < difficulty;
      case "stamina":
        return disabled || story.data.stamina < difficulty;
      default:
        return disabled;
    }
  };

  return !hidden ? (
    <ConditionalTooltip>
      <span style={{ display: "flex" }}>
        <ButtonBase
          disabled={isDisabled()}
          onClick={() => {
            if (Boolean(storylet)) {
              story.move(storylet);
            }
            onClick(getResult());
          }}
          sx={(theme) => ({
            backgroundColor: theme.palette.primary.main,
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.primary.contrastText,
            display: "flex",
            flexGrow: 1,
            padding: theme.spacing(1.2, 3.2),
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
            ...(isDisabled() && {
              backgroundColor: theme.palette.action.disabledBackground,
              color: theme.palette.action.disabled,
            }),
            ...(variant !== "default" && {
              justifyContent: "space-between",
            }),
          })}
          {...otherProps}
        >
          <Typography>{children}</Typography>
          {getIcon()}
        </ButtonBase>
      </span>
    </ConditionalTooltip>
  ) : null;
};

Option.propTypes = {
  buttonVariant: PropTypes.oneOf(["contained", "default", "outlined"]),
  difficulty: PropTypes.number,
  hidden: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  storylet: PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  variant: PropTypes.oneOf(["default", "money", "stamina"]),
};

export default Option;
