import {
  Card,
  Button,
  Grid,
  Box,
} from "@mui/material";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import { H1, H4 } from "@/components/typography/typography";
import { useDataSource } from "@/hooks/useDataSource";
import axios from 'axios'

const PollManage = () => {
  const [polls, setPolls] = useState([]);
  const { data, statuses, forceRefresh } = useDataSource({
    url: "/api/poll",
    errorMsg:
      "Problem retrieving Polls. If the problem presists, please contact support for further assistance.",
    successNoResultMsg:
      "No polls have been created yet.",
  });

  useEffect(() => {
      setPolls(data);
  }, [data]);

  const deletePolls = async (id) => {
    const { data } = await axios.delete("/api/poll", { id });
    console.log(data);
    console.log(polls)
    if (data.success) {
      forceRefresh();
      // setPolls(polls => polls.filter((poll) => poll.id != id));
      
    }
  }

  return (
    <Dashboard {...statuses}>
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
              <Button variant="contained" onClick={deletePolls}>Delete</Button>
            </Box>
          </Card>
        ))}
      </Grid>
    </Dashboard>
  );
};

export default PollManage;
