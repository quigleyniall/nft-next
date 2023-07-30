import { Card, FormControl, Button, Grid, Typography } from "@mui/material";
import Dashboard from "@/components/Dashboard/Dashboard";
import TextArea from "@/components/forms/TextArea/TextArea";
import { useState, useEffect } from "react";
import { H1, H4 } from "@/components/typography/typography";
import axios from 'axios';

const ViewSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const getData = async () => {
        const {data} = await axios.get('/api/suggestion');
        console.log(data);
        setSuggestions(data);
    }

    getData();
  }, [])

  const deleteSuggestion = async (id) => {
    console.log(id);
    const {data} = await axios.delete('/api/suggestion', {id});
    if (data.success) {
        setSuggestions(suggestions.filter(suggestion => suggestion.id != id));
    }
  }
  return (

    <Dashboard>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "#F4F5FA" }}
      >
       {suggestions.map(({idea, id}, index) => (
        <Card key={index}>
            <Typography>{idea}</Typography>
            <Button onClick={() => deleteSuggestion(id)}>Remove</Button>
        </Card>
       ))}
      </Grid>
    </Dashboard>
  );
};


export default ViewSuggestions;
