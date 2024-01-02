import { Typography } from "@mui/material";
import styles from "./typography.module.scss";

interface H1Props {
  children: string;
  center?: boolean;
  sx?: {};
}

export const H1 = ({ children, center }: H1Props) => (
  <Typography
    variant="h1"
    classes={{ root: `${styles.h1} ${center ? styles.center : ""}` }}
  >
    {children}
  </Typography>
);

export const H4 = ({ children, center, sx = {} }: H1Props) => (
  <Typography
    variant="h4"
    classes={{ root: `${styles.h4} ${center ? styles.center : ""}` }}
    sx={sx}
  >
    {children}
  </Typography>
);

export const CardTitle = ({ children, center, sx = {} }) => (
  <Typography
    variant="h3"
    classes={{ root: `${styles.h3} ${center ? styles.center : ""}` }}
    sx={sx}
  >
    {children}
  </Typography>
);

export const ErrorMsg = ({ children, center = false }) => (
  <Typography
  variant="h2"
  classes={{ root: `${styles.h2} ${center ? styles.center : ""}` }}
>
  {children}
</Typography>
)