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

const PollCreate = () => {
  const [polls, setPolls] = useState([]);
  const { data, statuses } = useDataSource({
    url: "/api/poll",
    errorMsg:
      "Problem retrieving Polls. If the problem presists, please contact support for further assistance.",
    successNoResultMsg:
      "No Polls have been created yet.",
  });

  useEffect(() => {
    setPolls(data);
  }, [data]);

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
            <H4 sx={{ mb: 3 }}>Poll</H4>
            <Typography variant="h5">{question}</Typography>
            <Box
              sx={{ display: "flex", flex: 1, gap: "32px", marginTop: "32px" }}
            >
              {options.map(({ name, value }) => (
                <Button variant="outlined" sx={{ flex: 1 }}>
                  {value}
                </Button>
              ))}
            </Box>
          </Card>
        ))}
      </Grid>
    </Dashboard>
  );
};

export default PollCreate;
