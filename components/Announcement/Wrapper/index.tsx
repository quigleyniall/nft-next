import { Card, Typography } from "@mui/material";

const AnnouncementWrapper = ({ title, children }) => {
  return (
    <Card sx={{ padding: "1.25rem", position: "relative" }}>
      <Typography variant="h6">{title}</Typography>
      {children}
    </Card>
  );
};

export default AnnouncementWrapper;
