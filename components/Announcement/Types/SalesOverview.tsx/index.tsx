import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import AnnouncementWrapper from "../../Wrapper";
import Donut from "../../../Charts/Donut";
import IconResolver from "../../../../utils/IconResolver";

const colorIndex = [
    "#22a176", "rgba(17, 185, 129, .8)", "rgba(17, 185, 129, .5)"
];

const Label = ({ label, value, index }) => (
  <Box>
    <Box sx={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: '0.375rem' }}>
      <Box
        sx={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: colorIndex[index],
        }}
      ></Box>
      <Typography variant="body1">{label} {index + 1}</Typography>
    </Box>
    <Box>
      <Typography variant="body2">{value}</Typography>
    </Box>
  </Box>
);

const SalesOverview = ({ title = "Sales Overview" }) => {
  return (
    <AnnouncementWrapper title={title}>
      <Grid container sm={12}>
        <Grid item sm={6}>
          <Donut />
        </Grid>
        <Grid item sm={6}>
          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Avatar
              variant="square"
              sx={{ background: "rgba(17, 185, 129, .4)" }}
            >
              <IconResolver name="dollar" />
            </Avatar>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1">Number of sales</Typography>
              <Typography variant="h6">$86,400</Typography>
            </Box>
          </Box>
          <Divider sx={{ margin: "24px 0" }} />
          <Grid container sm={12} columnSpacing={2} rowSpacing={2}>
            <Grid item sm={6}>
              <Label label="Team" value="$23,000" index={0} />
            </Grid>
            <Grid item sm={6}>
              <Label label="Team" value="$23,000" index={1} />
            </Grid>
            <Grid item sm={6}>
              <Label label="Team" value="$23,000" index={2} />
            </Grid>
            <Grid item sm={6}>
              <Label label="Team" value="$23,000" index={3} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AnnouncementWrapper>
  );
};

export default SalesOverview;
