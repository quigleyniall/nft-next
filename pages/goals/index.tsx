import { Grid, Paper, Typography } from "@mui/material";
import BarChart from "../../components/Charts/Bar";
import Dashboard from "@/components/Dashboard/Dashboard";
import { CardTitle, H1, H4 } from "@/components/typography/typography";

const Goals = () => {
  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "#F4F5FA" }}
      >
        <Paper sx={{ padding: "16px", marginBottom: "24px" }}>
            <CardTitle sx={{marginBottom: '12px'}}>Conversions this week</CardTitle>
            
          <BarChart startText="$0.00" endText="$50,000" max={50000} value={10000} minThreshold={9000} maxThreshold={30000}/>
        </Paper>
        <Paper sx={{ padding: "16px", marginBottom: "24px" }}>
        
            <CardTitle sx={{marginBottom: '12px'}}>Points Accumulated this week</CardTitle>
          <BarChart startText="0 Points" endText="2,000 Points" max={2000} value={10}/>
        </Paper>
      </Grid>
    </Dashboard>
  );
};

export default Goals;
