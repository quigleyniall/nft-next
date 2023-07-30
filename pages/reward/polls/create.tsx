import { Card, FormControl, Button, Grid, Typography } from "@mui/material";
import Dashboard from "@/components/Dashboard/Dashboard";
import TextArea from "@/components/forms/TextArea/TextArea";
import { useState } from "react";
import { H1, H4 } from "@/components/typography/typography";

const PollCreate = () => {
    const [idea, setIdea] = useState('')
  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "#F4F5FA" }}
      >
        <Card variant="outlined" sx={{padding: "32px"}}>
          <H4 sx={{mb: 3}}>Poll</H4>
          
          <Button
            disabled={!idea}
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
