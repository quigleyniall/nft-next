import {
  Box,
  IconButton,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import { CustomTheme } from "@/context/theme";

const SnackBar = ({ message, type }) => {
  const [open, setOpen] = useState(true);
  const { theme } = useContext(CustomTheme);
  const onClose = (e, mseEvent) => {
    if (mseEvent === "clickaway") return;
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        key={message}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        sx={{position: 'relative', marginBottom: '16px', left: 0, right: 0, bottom: 0}}
        open={open}
        onClose={onClose}
      >
        <Box
          sx={{
            background: type === "success" ? "#4CAF4F" : "#EE534F",
            color: "white",
            maxWidth: "100%",
            minWidth: "100%",
            padding: "12px",
            position: "relative",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0,0,0,.4)",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{ color: "white", paddingRight: "32px" }}
            >
              {message}
            </Typography>
          </Box>

          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: "4px", right: "8px" }}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Snackbar>
    </>
  );
};

export default SnackBar;
