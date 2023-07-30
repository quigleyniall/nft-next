import { Button, Typography } from "@mui/material";
import trophyImg from "../../../../assets/trophy.png";
import AnnouncementWrapper from "../../Wrapper";
import Link from "next/link";

const TopSeller = ({ title = "Congratulations John!"}) => {
  return (
    
      <AnnouncementWrapper title={title}>
        <Typography variant="body1">Best Seller of the Month</Typography>
        <Typography variant="h5">$42.8k</Typography>
        <Button component="a" href='/' variant="contained">View Sales</Button>
        <img
          src={trophyImg}
          width="100"
          height="100"
          alt="trophy"
          style={{
            right: "36px",
            bottom: "20px",
            height: "98px",
            position: "absolute",
          }}
        />
      </AnnouncementWrapper>
  );
};

export default TopSeller;
