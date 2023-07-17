import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Dropdown = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    
      <>
        <InputLabel>Type</InputLabel>
        <Select
          value={age}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Event</MenuItem>
          <MenuItem value={20}>Money</MenuItem>
          <MenuItem value={30}>Gift</MenuItem>
        </Select>
        </>
  );
}

export default Dropdown;