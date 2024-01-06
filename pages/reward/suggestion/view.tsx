import {
  Card,
  FormControl,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Dashboard from "@/components/Dashboard/Dashboard";
import TextArea from "@/components/forms/TextArea/TextArea";
import { useState, useEffect } from "react";
import { H1, H4 } from "@/components/typography/typography";
import axios from "axios";
import { useDataSource } from "@/hooks/useDataSource";
import { Dna } from "react-loader-spinner";

const ViewSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data, statuses } = useDataSource({
    url: "/api/suggestion",
    errorMsg:
    "Problem retrieving suggestions. If the problem presists, please contact support for further assistance.",
  successNoResultMsg:
    "There have been no suggestions made. Please check again later!.",
  });

  useEffect(() => {
    setSuggestions(data);
  }, [data]);

  const deleteSuggestion = async (id) => {
    console.log(id);
    const { data } = await axios.delete("/api/suggestion", { id });
    if (data.success) {
      setSuggestions(suggestions.filter((suggestion) => suggestion.id != id));
    }
  };
  return (
    <Dashboard {...statuses}>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "background.page" }}
      >
       
        {
          suggestions.map(({ idea, id }, index) => (
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
