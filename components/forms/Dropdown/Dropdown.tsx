import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  label: string;
  options: [{label: string, value: string | number}]
}

const Dropdown = ({label, options} : Props) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
      <>
        <InputLabel>{label}</InputLabel>
        <Select
          value={age}
          label={label}
          onChange={handleChange}
        >
          {options.map(({label, value}) => (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          ))}
        </Select>
        </>
  );
}

export default Dropdown;