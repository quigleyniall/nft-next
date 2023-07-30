import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

interface Props {
    title: string;
    desc: string;
    button: string;
}

const Reward = ({title, desc, button}: Props) => (
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
)

export default Reward;