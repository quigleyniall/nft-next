import { Button, Typography } from "@mui/material";
import trophyImg from "../../../../assets/trophy.png";
import AnnouncementWrapper from "../../Wrapper";
import Link from "next/link";
import Image from "next/image";

const TopSeller = ({ title = "Congratulations John!"}) => {
  return (
    
      <AnnouncementWrapper title={title}>
        <Typography variant="body1">Best Seller of the Month</Typography>
        <Typography variant="h5">$42.8k</Typography>
        <Button component="a" href='/' variant="contained">View Sales</Button>
        <Image
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
