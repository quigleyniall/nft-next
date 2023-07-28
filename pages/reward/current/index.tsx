import {
  Card,
  FormControl,
  Button,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useState } from "react";
import { H1, H4 } from "@/components/typography/typography";

const Suggestion = () => {
  const [idea, setIdea] = useState("");
  const [offers, setOffers] = useState([
    { title: "$5000", desc: "Points Based", button: "View More" },
    { title: "$1000", desc: "Expiry 01/09/23", button: "View More" },
    { title: "$5000", desc: "Individual", button: "View More" },
    { title: "$5000", desc: "Points Based", button: "View More" },
    { title: "$5000", desc: "Points Based", button: "View More" },
    { title: "$5000", desc: "Points Based", button: "View More" },
  ]);

  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "#F4F5FA" }}
      >
        {offers.map(({ title, desc, button }, index) => (
          <Grid key={index} item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                //   image="/static/images/cards/contemplative-reptile.jpg"
                // title={}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{button}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Dashboard>
  );
};

export default Suggestion;
