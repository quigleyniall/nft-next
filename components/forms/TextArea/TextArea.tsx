import {TextareaAutosize} from "@mui/base";
import { TextField } from "@mui/material";  

interface Props {
    label: string;
    name: string;
    placeholder: string;
    minRows?: number;
    onChange: (e) => void;
}

const TextArea = ({ minRows = 3, name, placeholder, onChange}: Props) => {
  return  <TextField
  label="Description"
  multiline
  name={name}
  rows={minRows}
  onChange={onChange}
/>
};

export default TextArea