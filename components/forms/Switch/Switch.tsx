import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import {Switch as SwitchMui} from '@mui/material';

const PinkSwitch = styled(SwitchMui)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const labelInput = (label) => ({ inputProps: { 'aria-label': label } });

const Switch = ({label, ...props}) => (
    <SwitchMui {...props} {...labelInput(label)} defaultChecked />
)

export default Switch;