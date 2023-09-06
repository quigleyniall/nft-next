import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import Dashboard from "@/components/Dashboard/Dashboard";
import TextArea from "@/components/forms/TextArea/TextArea";
import TextInput from "@/components/forms/TextInput/TextInput";
import { useState } from "react";

const Support = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "background.page" }}
      >
        <Card sx={{ padding: "1.25rem", width: '100%', position: "relative" }}>
          <Typography variant="h5">Get Some Help</Typography>
          <form>
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="body1">General Details</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl sx={{ mb: 3, width: "100%" }}>
                  <TextInput
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    value={name}
                  />
                </FormControl>
                <FormControl sx={{ mb: 3, width: "100%" }}>
                  <TextInput
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    value={email}
                    email
                  />
                </FormControl>
                <FormControl sx={{ mb: 3, width: "100%" }}>
                  <TextArea
                    label="description"
                    name="description"
                    placeholder="Description"
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </FormControl>

                <Button
                  disabled={!name || !desc || !email}
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Dashboard>
  );
};

export default Support;
