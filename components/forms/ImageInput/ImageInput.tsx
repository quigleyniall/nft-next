import { useRef } from "react";
import { Box, Button, TextFieldVariants } from "@mui/material";
import styles from "./ImageInput.module.scss";

interface Props {
  label?: string;
  name?: string;
  objectURL: string | undefined;
  onChange: (e) => void;
  value: any
}

const fallbackImg =
  "https://camlockfittings.com.au/static/version1679642881/frontend/Pearl/weltpixel_custom/en_US/Magento_Catalog/images/product/placeholder/image.jpg";

const ImageInput = ({
  objectURL = undefined,
  onChange,
  name,
}: Props) => {
  const ref = useRef(null);

  const openFileInput = () => {
    ref.current.click();
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={objectURL ?? fallbackImg} className={styles.imagePreview} />

      <Box sx={{ flex: 1, textAlign: "right" }}>
        <Button
          onClick={openFileInput}
          type="button"
          variant="outlined"
          sx={{ width: "100%", maxWidth: "400px" }}
        >
          Upload File
        </Button>
        <input
          ref={ref}
          type="file"
          hidden
          accept=".TIFF,.JPEG,.GIF,.PNG"
          
          name={name}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};

export default ImageInput;
