import React from "react";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";

const LoopLink = (props) => {
  const {
    onClick = () => null,
    options = [],
    readOnly,
    sx = {},
    value,
    ...otherProps
  } = props;

  return Boolean(options.length) && !readOnly ? (
    <Link
      onClick={() => {
        const selectedIndex =
          options.findIndex((element) => element === value) || 0;
        onClick(options[(selectedIndex + 1) % options.length]);
      }}
      sx={{ cursor: "pointer", ...sx }}
      {...otherProps}
    >
      {value}
    </Link>
  ) : Boolean(value) ? (
    value
  ) : null;
};

LoopLink.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.array,
  readOnly: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.any,
};

export default LoopLink;
