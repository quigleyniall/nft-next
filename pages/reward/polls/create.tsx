import { Card, FormControl, Button, Grid, Typography } from "@mui/material";
import Dashboard from "@/components/Dashboard/Dashboard";
import TextArea from "@/components/forms/TextArea/TextArea";
import { useState } from "react";
import { H1, H4 } from "@/components/typography/typography";
import axios from "axios";

const PollCreate = () => {
    const [idea, setIdea] = useState('')

    const createPoll = async () => {
      const test = await axios.post('/api/poll/create', {
        question: 'This is a test question',
        options: [
          {name: 'test answer 1', value: '1'},
          {name: 'test answer 2', value: '2'},
        ]
      });

      const {data} = await axios.get('/api/poll/create');
      console.log(data)
    }
  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "background.page" }}
      >
        <Card variant="outlined" sx={{padding: "32px"}}>
          <H4 sx={{mb: 3}}>Poll</H4>
          
          <Button
            // disabled={!idea}
            onClick={createPoll}
            size="large"
            type="submit"
            variant="contained"
            sx={{ width: "100%" }}
            >
                    Vote
                  </Button>
        </Card>
      </Grid>
    </Dashboard>
  );
};

export default PollCreate
