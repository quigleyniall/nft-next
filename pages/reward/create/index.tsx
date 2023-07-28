"use client";

import { useState, useEffect } from "react";
import TextInput from "../../../components/forms/TextInput/TextInput";
import {
  Box,
  FormControl,
  Button,
  Typography,
  Paper,
  Card,
  Grid,
  FormControlLabel,
} from "@mui/material";
import { H1 } from "../../../components/typography/typography";
import TextArea from "../../../components/forms/TextArea/TextArea";
import ImageInput from "../../../components/forms/ImageInput/ImageInput";
import { StoreMetadata } from "../../../utils/StoreMetadata";
import SendingRequest from "../../../components/SendingRequest/SendingRequest";
import Dropdown from "../../../components/forms/Dropdown/Dropdown";
import NumberInput from "../../../components/forms/Number/NumberInput";
import TimeLine from "../../../components/TimeLine/TimeLine";
import Switch from "../../../components/forms/Switch/Switch";
import Dashboard from "@/components/Dashboard/Dashboard";
import DateInput from "@/components/forms/Date/DateInput";

interface Modal {
  success?: boolean;
  title: string;
  desc: string;
  loader: boolean;
  subDesc?: string;
  stayOpen?: boolean;
}

const SENDING = {
  title: "Storing NFT Now",
  desc: "Please wait until the request is finished",
  loader: true,
  stayOpen: true,
};

const SUCCESS = (uri, url) => ({
  success: true,
  title: "NFT Store Successfully",
  desc: `URI: ${uri}`,
  subDesc: `URL: ${url}`,
  loader: false,
});

const ERROR = {
  error: true,
  title: "Error Storing NFT",
  desc: `Please Try Again!`,
  loader: false,
};

const StoreAsset = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [sending, setSending] = useState(false);
  const [modalDetails, setModalDetails] = useState<Modal>();
  const [ipfs, setIpfs] = useState("");
  const [buttonText, setButtonText] = useState("Save IPFS");
  const [showPointsInput, setShowPointsInput] = useState(false);
  const [showTimeInput, setShowTimeInput] = useState(false);
  const [points, setPoints] = useState(0);
  const [date, setDate] = useState(null)

  return (
    <Dashboard>
      {sending && (
        <SendingRequest modalDetails={modalDetails}>
          {modalDetails?.success && (
            <Button
              sx={{ marginTop: "8px" }}
              variant="contained"
              disabled={buttonText == "Saved"}
            >
              {buttonText}
            </Button>
          )}
        </SendingRequest>
      )}
      <Grid
        container
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          padding: "32px",
        }}
      >
        <Grid item xs={12}>
          <Card sx={{ padding: "1.25rem", position: "relative" }}>
            {/* <TimeLine /> */}
            <Typography variant="h5">Create a Reward</Typography>
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
                    <TextArea
                      label="description"
                      name="description"
                      placeholder="Description"
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </FormControl>
                  <Box sx={{ display: "flex", gap: "16px" }}>
                    <FormControl sx={{ mb: 3, flex: 1 }}>
                      <Dropdown
                        label="Type"
                        options={[
                          { label: "Money", value: 30 },
                          { label: "Gift", value: 20 },
                          { label: "Event", value: 10 },
                        ]}
                      />
                    </FormControl>
                    <FormControl sx={{ mb: 0, flex: 1 }}>
                      <NumberInput
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        label="Number Available"
                        value={name}
                      />
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1">Requirements</Typography>
                </Grid>
                <Grid container xs={8}>
                  <Grid item xs={6}>
                    <FormControlLabel
                      sx={{ mb: 3, width: "100%" }}
                      value="points"
                      control={
                        <Switch
                          label="Points Based"
                          onChange={() => setShowPointsInput(!showPointsInput)}
                        />
                      }
                      label="Points Based"
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      sx={{ mb: 3, width: "100%" }}
                      value="time"
                      control={
                        <Switch label="Points Based" onChange={() => setShowTimeInput(!showTimeInput)} />
                      }
                      label="Time Based"
                      labelPlacement="end"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    {showPointsInput && (
                      <FormControl sx={{ mb: 3, width: "100%" }}>
                        <NumberInput
                          name="points"
                          onChange={(e) => setPoints(e.target.value)}
                          label="Points Required"
                          value={points}
                        />
                      </FormControl>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    {showTimeInput && (
                      <FormControl sx={{ mb: 3, width: "100%" }}>
                        <DateInput value={date} onChange={(newValue) => setDate(newValue)} />
                      </FormControl>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl sx={{ mb: 3, width: "100%" }}>
                      <Dropdown
                        label="User"
                        options={[
                          { label: "Jeff", value: "Jeff" },
                          { label: "Noel", value: "Noel" },
                          { label: "Graham", value: "Graham" },
                        ]}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl sx={{ mb: 3, width: "100%" }}>
                      <ImageInput />
                    </FormControl>
                  </Grid>

                  <Button
                    disabled={!name || !desc || !image}
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
      </Grid>
    </Dashboard>
  );
};

export default StoreAsset;
