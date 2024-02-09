import React from "react";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface IOption {
  children: string;
  difficulty?: number;
  disabled?: boolean;
  onClick: VoidFunction;
  variant?: "default" | "money";
}

const Option: React.FC<IOption> = (props) => {
  const {
    children,
    difficulty,
    disabled,
    variant = "default",
    ...otherProps
  } = props;

  const ButtonAppendix = React.useMemo(() => {
    switch (variant) {
      case "money":
        return (
          <Stack direction="row" spacing={0.4}>
            <Typography>{difficulty ?? 0}</Typography>
            <CurrencyLiraIcon />
          </Stack>
        );
      default:
        return null;
    }
  }, [difficulty, variant]);

  return (
    <ButtonBase
      disabled={disabled}
      focusRipple
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        borderRadius: `${theme.shape.borderRadius}px`,
        color: theme.palette.primary.contrastText,
        display: "flex",
        flexGrow: 1,
        padding: theme.spacing(1.2, 3.2),
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
        ...(disabled && {
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
      {ButtonAppendix}
    </ButtonBase>
  );
};

export default Option;
