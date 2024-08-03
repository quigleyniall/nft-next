import { Grid } from "@mui/material";
import TopSeller from "../components/Announcement/Types/TopSeller";
import SalesOverview from "../components/Announcement/Types/SalesOverview.tsx";
import Target from "../components/Announcement/Types/Target";
import Sold from "../components/Announcement/Types/Sold";
import Dashboard from "@/components/Dashboard/Dashboard";


const Home = () => {
  return (
    <Dashboard>
    <Grid
      container
      rowSpacing={3}
      columnSpacing={{ xs: 1, sm: 1, md: 3 }}
      sx={{
        padding: "32px",
      }}
    >
      {/* <Grid item md={6} lg={4}>
        <TopSeller />
      </Grid>
      <Grid item md={6} lg={4}>
        <Target />
      </Grid>
      <Grid item md={6} lg={4}>
        <Sold />
      </Grid>
      <Grid item md={12}>
        <SalesOverview />
      </Grid> */}
    </Grid>
    </Dashboard>
  );
};

export default Home;
