import * as React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const ButtonFilter = ({ options, value, defaultValue, onChange }) => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={value}
      defaultValue={defaultValue}
      exclusive
      onChange={onChange}
    >
      {options.map(({ value, label }) => (
        <ToggleButton
          key={value}
          value={value}
          size="medium"
          sx={{ height: "53px" }}
        >
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ButtonFilter;
