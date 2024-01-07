import ButtonFilter from "@/components/forms/ButtonFilter/ButtonFilter";
import Dropdown from "@/components/forms/Dropdown/Dropdown";
import { Box, FormControl } from "@mui/material";

const FilterBar = ({ onChange }) => {
  const options = [
    {value: 'THIS_WEEK', label: 'Week'},
    {value: 'THIS_MONTH', label: 'Month'},
    {value: 'THIS_QUATER', label: 'Quater'}
  ]

  const dropdownOptions = [
    {value: 'THIS_WEEK', label: 'My Team'},
    {value: 'THIS_MONTH', label: 'Everyone'},
  ];

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
      alignItems: 'center'
    }}>
      <FormControl sx={{ mb: 0, flex: "0 1 200px" }}>
    <Dropdown options={dropdownOptions} label="Teams" />
    </FormControl>
   <ButtonFilter options={options} defaultValue="THIS_WEEK" onChange={onChange} />
   </Box>

  );
};

export default FilterBar;
