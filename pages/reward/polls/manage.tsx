import {
  Card,
  FormControl,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import { H1, H4 } from "@/components/typography/typography";
import { useDataSource } from "@/hooks/useDataSource";

const PollManage = () => {
  const [polls, setPolls] = useState([]);
  const {data, pending} = useDataSource({url: "/api/poll/create"})

  useEffect(() => {
      setPolls(data);
  }, [data]);

  return (
    <Dashboard pending={pending}>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "background.page" }}
      >
        {polls.map(({ question, options }, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{ padding: "32px", marginBottom: "24px" }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
              <H4>Poll - {question}</H4>
              <Button variant="contained">Delete</Button>
            </Box>
          </Card>
        ))}
      </Grid>
    </Dashboard>
  );
};

export default PollManage;
