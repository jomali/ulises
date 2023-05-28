import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const MemoryCard = (props) => {
  const { description, disabled, img, title } = props;
  const theme = useTheme();

  return (
    <Card variant="outlined">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          height: 120,
        }}
      >
        <CardMedia
          alt={img.alt}
          component="img"
          image={img.url}
          {...(disabled && {
            sx: {
              filter: "grayscale(1)",
              opacity: theme.palette.action.disabledOpacity,
            },
          })}
        />
        <CardContent sx={{ width: 320 }}>
          <Stack spacing={1} sx={{ display: "flex" }}>
            <Typography
              component="div"
              variant="h5"
              {...(disabled && {
                sx: { color: theme.palette.action.disabled },
              })}
            >
              {title}
            </Typography>
            <Typography
              color="text.secondary"
              variant="body2"
              {...(disabled && {
                sx: { color: theme.palette.action.disabled },
              })}
            >
              {description}
            </Typography>
            <Button
              disabled={disabled}
              disableElevation
              size="small"
              variant="contained"
            >
              Recordar
            </Button>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MemoryCard;
