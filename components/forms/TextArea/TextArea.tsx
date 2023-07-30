import {TextareaAutosize} from "@mui/base";
import { TextField } from "@mui/material";  

interface Props {
    label: string;
    name: string;
    placeholder: string;
    minRows?: number;
    onChange: (e) => void;
}

const TextArea = ({ minRows = 3, name, placeholder = 'Description', onChange, value = ''}: Props) => {
  return  <TextField
  label={placeholder}
  multiline
  name={name}
  rows={minRows}
  onChange={onChange}
  value={value}
/>
};

export default TextArea