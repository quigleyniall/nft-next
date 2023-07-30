import { Grid, Paper } from "@mui/material";
import Dashboard from "@/components/Dashboard/Dashboard";
import Reward from "@/components/Rewards";

const rewards = [
  { title: "$5000", desc: "Points Based", button: "View More" },
  { title: "$1000", desc: "Expiry 01/09/23", button: "View More" },
]
const Badges = () => {
  
  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "#F4F5FA" }}
      >
        {rewards.map((reward, index) => (
          <Grid key={index} item xs={4}>
            <Reward {...reward} />
             
          </Grid>
        ))}
      </Grid>
    </Dashboard>
  );
};

export default Badges;
