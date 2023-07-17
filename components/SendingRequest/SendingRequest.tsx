import { useState } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Icon,
  IconButton,
} from "@mui/material";
import styles from "./SendingRequest.module.scss";
import { Dna } from "react-loader-spinner";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const SendingRequest = ({ modalDetails, children }) => {
  const [open, setOpen] = useState(true);
  const { loader, title, desc, subDesc, success, error, stayOpen } =
    modalDetails;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(stayOpen ?? false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={styles.modal}>
        <IconButton
          className={styles.closeIcon}
          onClick={handleClose}
          sx={{ p: 0 }}
        >
          {!stayOpen && <CloseIcon />}
        </IconButton>
        {success && (
          <DoneIcon
            sx={{ fontSize: "5rem", color: "green", marginBottom: "16px" }}
          />
        )}
        {error && (
          <ErrorOutlineIcon
            sx={{ fontSize: "5rem", color: "red", marginBottom: "16px" }}
          />
        )}
        <Typography sx={{ textAlign: "center" }} variant="h4" component="h2">
          {title}
        </Typography>
        {desc && (
          <Typography sx={{ mt: 2, fontSize: "1.2rem" }}>{desc}</Typography>
        )}
        {subDesc && (
          <Typography sx={{ mt: 2, fontSize: "1.2rem" }}>{subDesc}</Typography>
        )}
        {loader && (
          <Box sx={{ textAlign: "center" }}>
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </Box>
        )}
        {children}
      </Box>
    </Modal>
  );
};

export default SendingRequest;
