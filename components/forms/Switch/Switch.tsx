import {Switch as SwitchMui} from '@mui/material';


const labelInput = (label) => ({ inputProps: { 'aria-label': label } });

const Switch = ({label, ...props}) => (
    <SwitchMui {...props} {...labelInput(label)} />
)

export default Switch;