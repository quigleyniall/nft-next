import {FilledInput, TextField, TextFieldVariants} from '@mui/material';
import styles from './TextInput.module.scss';

interface Props {
    label: string;
    name: string;
    variant?: TextFieldVariants | undefined;
    value: string;
    onChange: (e) => void;
}

const TextInput = ({label, variant = 'outlined', onChange, name, value} : Props) => {

    return <TextField label={label} classes={{root: styles.textInput}} value={value} InputProps={{classes:{root: styles.filledInput, focused: styles.focused}}} name={name} variant={variant} onChange={onChange} />
}

export default TextInput;