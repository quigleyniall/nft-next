import { Grid, Paper } from "@mui/material";
import BarChart from "../../components/Charts/Bar";
import Dashboard from "@/components/Dashboard/Dashboard";

const Leaderboards = () => {
  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "#F4F5FA" }}
      >
        <Paper sx={{ padding: "16px", marginBottom: "24px" }}>
          <BarChart color="#11B981" />
        </Paper>
        <Paper sx={{ padding: "16px", marginBottom: "24px" }}>
          <BarChart color="#11B981" />
        </Paper>
      </Grid>
    </Dashboard>
  );
};

export default Leaderboards;
