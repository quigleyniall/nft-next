import { Button, Card, Typography, Box } from "@mui/material";
import AnnouncementWrapper from "../../Wrapper";
import ChartCard from "../../../Charts/ChartCard";

const Sold = ({ title = "Conversions" }) => {
  return (
    <AnnouncementWrapper title={title}>
      <Typography variant="body1">This week you sold:</Typography>
      <Typography variant="h5">$12k</Typography>
      <Button variant="contained">View Breakdown</Button>
      <Box
        sx={{
          right: "16px",
          bottom: "20px",
          position: "absolute",
          left: '25%',
        }}
      >
        <ChartCard data={[12, 14, 2, 47, 32, 44, 14, 55, 41, 69]} />
      </Box>
    </AnnouncementWrapper>
  );
};

export default Sold;
