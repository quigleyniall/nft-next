import { Card, Grid, Typography, Box, Paper } from "@mui/material";
import BarChart from "../../components/Charts/Bar";
import LineCard from "../../components/Charts/LineCard";
import Donut from "../../components/Charts/Donut";
import Area from "../../components/Charts/RadialBar";
import { useContext } from "react";
import { CustomTheme } from "../../context/theme";
import RadialBar from "../../components/Charts/RadialBar";
import LineChart from "../../components/Charts/Line";
import Dashboard from "@/components/Dashboard/Dashboard";

const Metrics = ({}) => {
  const { theme } = useContext(CustomTheme);
  return (
    <Dashboard>
    <Grid
      container
      item
      rowSpacing={3}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        padding: "32px",
        
      }}
    >
      <Grid item xs={6} md={4} lg={3}>
        <LineCard 
          title="22"
          subtitle="Sales"
          data={[25, 66, 41, 59, 25, 44, 12, 36, 9, 21]}
        />
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <LineCard
          title="210"
          subtitle="Leads"
          data={[12, 14, 2, 47, 32, 44, 14, 55, 41, 69]}
        />
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <LineCard
          title="82"
          subtitle="Views"
          data={[47, 45, 74, 32, 56, 31, 44, 33, 45, 19]}
        />
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <LineCard
          title="582"
          subtitle="Clicks"
          data={[15, 75, 47, 65, 14, 32, 19, 54, 44, 61]}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: "16px", marginBottom: "24px" }}>
          <BarChart />
        </Paper>
        <Paper sx={{ padding: "16px" }}>
          <BarChart />
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: "16px" }}>
          <Donut />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: "16px" }}>
          <RadialBar />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: "16px" }}>
          <LineChart />
        </Paper>
      </Grid>
    </Grid>
    </Dashboard>
  );
};

export default Metrics;
