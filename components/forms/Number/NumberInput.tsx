import { TextField, TextFieldVariants } from "@mui/material";


interface Props {
  label: string;
  name: string;
  variant?: TextFieldVariants | undefined;
  value: string;
  onChange: (e) => void;
}

const NumberInput = ({
  label,
  variant = "outlined",
  onChange,
  name,
  value,
  ...rest
}: Props) => {
  return (
    <TextField
    {...rest}
    
      label={label}
      value={value}
    //   InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
    inputProps={{
        step: 1,
        min: 0,
        max: 99999,
        type: 'number',
      }}
      name={name}
      variant={variant}
      onChange={onChange}
    />
  );
};

export default NumberInput;
