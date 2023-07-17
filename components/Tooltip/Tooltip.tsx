import { Tooltip as MuiTooltip } from "@mui/material";

const Tooltip = ({title, children}) => (
    <MuiTooltip title={title}>
        {children}
    </MuiTooltip>
);

export default Tooltip;