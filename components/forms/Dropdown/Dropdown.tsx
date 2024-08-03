import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";


interface Props {
  label: string;
  options: { label: string; value: string | number }[];
  value: string | number;
  onChange: any
}

const Dropdown = ({ label, options, onChange, value }: Props) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Dropdown;
