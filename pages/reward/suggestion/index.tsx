import { Card, FormControl, Button, Grid, Typography } from "@mui/material";
import Dashboard from "@/components/Dashboard/Dashboard";
import TextArea from "@/components/forms/TextArea/TextArea";
import { useState } from "react";
import { H1, H4 } from "@/components/typography/typography";
import axios from 'axios';

const Suggestion = () => {
  const [idea, setIdea] = useState("");
  const saveSuggestion = async (e) => {
    e.preventDefault();
    const {data} = await axios.post('/api/suggestion', {idea});
    setIdea('');
  }
  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "background.page" }}
      >
        <Card variant="outlined" sx={{ padding: "32px" }}>
          <H4 sx={{ mb: 3 }}>Make A Suggestion</H4>
          <form onSubmit={saveSuggestion}>
            <FormControl sx={{ mb: 3, width: "100%" }}>
              <TextArea
                label="description"
                name="description"
                placeholder="Description"
                onChange={(e) => setIdea(e.target.value)}
                value={idea}
              />
            </FormControl>
            <Button
              disabled={!idea}
              size="large"
              type="submit"
              variant="contained"
              sx={{ width: "100%" }}
            >
              Send
            </Button>
          </form>
        </Card>
      </Grid>
    </Dashboard>
  );
};

export default Suggestion;
