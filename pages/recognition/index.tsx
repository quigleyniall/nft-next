import { Grid, Paper, Typography } from "@mui/material";
import BarChart from "../../components/Charts/Bar";
import Dashboard from "@/components/Dashboard/Dashboard";
import { CardTitle, H1, H4 } from "@/components/typography/typography";

const Recognition = () => {
  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "background.page" }}
      >
        <Paper sx={{ padding: "16px", marginBottom: "24px" }}>
          
        </Paper>
      </Grid>
    </Dashboard>
  );
};

export default Recognition;
