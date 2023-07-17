import { Button, Card, Typography } from "@mui/material";
import AnnouncementWrapper from "../../Wrapper";
import IconResolver from "../../../../utils/IconResolver";

const Target = ({ title = "Sales Target" }) => {
  return (
    <AnnouncementWrapper title={title}>
      <Typography variant="body1">Your sales target for this week</Typography>
      <Typography variant="h5">$20k</Typography>
      <Button variant="contained">View More</Button>
      <IconResolver name="dollar"
        style={{
          right: "0px",
          bottom: "20px",
          fontSize: '6rem',
          position: "absolute",
          color: "#22a176"
        }}
      />
    </AnnouncementWrapper>
  );
};

export default Target;
