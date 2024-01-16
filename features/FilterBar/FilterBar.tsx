import ButtonFilter from "@/components/forms/ButtonFilter/ButtonFilter";
import Dropdown from "@/components/forms/Dropdown/Dropdown";
import { Box, FormControl } from "@mui/material";
import { useState } from "react";

const FilterBar = ({ updateData }) => {
  const [buttonValue, setButtonValue] = useState('LAST_N_YEARS:5');
  const [dropdownValue, setDropdownValue] = useState('');
  
  const options = [
    {value: 'THIS_WEEK', label: 'Week'},
    {value: 'THIS_MONTH', label: 'Month'},
    {value: 'THIS_QUATER', label: 'Quater'},
    {value: 'LAST_N_YEARS:5', label: 'Year'},

  ]

  const dropdownOptions = [
    {value: 'THIS_WEEK', label: 'My Team'},
    {value: 'THIS_MONTH', label: 'Everyone'},
  ];

  const onChangeButton = (e) => {
    setButtonValue(e.target.value);
    updateData(e.target.value);
  }

  const onDropdownChange = (e) => {
    setDropdownValue(e.target.value);
    // Simulating update
    updateData(buttonValue)
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
      alignItems: 'center'
    }}>
      <FormControl sx={{ mb: 0, flex: "0 1 200px" }}>
    <Dropdown options={dropdownOptions} label="Teams" value={dropdownValue} onChange={onDropdownChange} />
    </FormControl>
   <ButtonFilter options={options} value={buttonValue} onChange={onChangeButton} />
   </Box>

  );
};

export default FilterBar;
