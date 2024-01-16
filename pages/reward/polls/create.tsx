import {
  Card,
  FormControl,
  Button,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import Dashboard from "@/components/Dashboard/Dashboard";
import TextArea from "@/components/forms/TextArea/TextArea";
import { useState } from "react";
import { H1, H4 } from "@/components/typography/typography";
import axios from "axios";
import TextInput from "@/components/forms/TextInput/TextInput";
import AddIcon from "@mui/icons-material/Add";

const PollCreate = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    {
      name: "option1",
      label: "Option 1",
      placeholder: "Option 1",
      value: "",
    },
    {
      name: "option2",
      label: "Option 2",
      placeholder: "Option 2",
      value: "",
    },
  ]);

  const createPoll = async (e) => {
    e.preventDefault();
    if (question.length == 0) return;

    await axios.post("/api/poll", {
      question,
      options,
    });
  };

  const addOption = () => {
    setOptions((options) => [
      ...options,
      {
        name: `option${options.length + 1}`,
        label: `Option ${options.length + 1}`,
        placeholder: `Option ${options.length + 1}`,
        value: "",
      },
    ]);
  };

  const removeOption = () => {};

  const onOptionChange = (value, index) => {
    setOptions(options => {
      const newOptions = [...options];
      newOptions[index].value = value;
      return newOptions
    })
    console.log(value)
    console.log(options)
  };

  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "background.page" }}
      >
        <Grid item xs={12}>
          <Card sx={{ padding: "1.25rem", position: "relative" }}>
            {/* <TimeLine /> */}
            <Typography variant="h5">Create a Poll</Typography>

            <form onSubmit={createPoll}>
              <Grid container>
                <Grid item xs={4}>
                  <Typography variant="body1">Poll Details</Typography>
                </Grid>
                <Grid item xs={8}>
                  <FormControl sx={{ mb: 4, width: "100%" }}>
                    <TextInput
                      name="question"
                      onChange={(e) => setQuestion(e.target.value)}
                      label="Question"
                      value={question}
                    />
                  </FormControl>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Solutions
                  </Typography>
                  {options.map((option, index) => (
                    <FormControl sx={{ mb: 2, width: "100%" }}>
                      <TextInput
                        {...option}
                        onChange={(e) => onOptionChange(e.target.value, index)}
                      />
                    </FormControl>
                  ))}
                  <FormControl sx={{ mb: 3 }}>
                    <IconButton onClick={addOption}>
                      <AddIcon />
                    </IconButton>
                  </FormControl>
                  <Button
                    // disabled={!idea}
                    onClick={createPoll}
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{ width: "100%" }}
                  >
                    Upload
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Dashboard>
  );
};

export default PollCreate;
