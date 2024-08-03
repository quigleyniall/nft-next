import {
  Card,
  Button,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import Reward from "@/components/Rewards";
import { useDataSource } from "@/hooks/useDataSource";
import axios from 'axios';

const Rewards = () => {
  const [offers, setOffers] = useState([]);
  const { data, statuses, setRefreshUrl, forceRefresh } = useDataSource({
    url: `/api/rewards`,
    errorMsg:
      "Problem retrieving rewards. If the problem presists, please contact support for further assistance.",
    successNoResultMsg: "No rewards set up at this time!",
  });
  // const [offers, setOffers] = useState([
  //   { title: "$5000", desc: "Points Based", button: "View More" },
  //   { title: "$1000", desc: "Expiry 01/09/23", button: "View More" },
  //   { title: "$5000", desc: "Individual", button: "View More" },
  //   { title: "$5000", desc: "Points Based", button: "View More" },
  //   { title: "$5000", desc: "Points Based", button: "View More" },
  //   { title: "$5000", desc: "Points Based", button: "View More" },
  // ]);

  useEffect(() => {
    setOffers(data);
    console.log(data)
  }, [data]);

  const onDelete = (id) => {
    const removeReward = async () => {
      const {data} = await axios.delete('/api/rewards', {data: {id}});
      forceRefresh();
    }
    removeReward();
  }

  return (
    <Dashboard {...statuses}>
      <Grid
        rowSpacing={3}
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "background.page" }}
      >
        {offers.map((offer, index) => (
          <Grid key={index} item xs={4}>
            <Reward {...offer} onDelete={onDelete} />
          </Grid>
        ))}
      </Grid>
    </Dashboard>
  );
};

export default Rewards;
