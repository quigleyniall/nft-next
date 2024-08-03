import { Button, FormControl, Grid, Paper, Typography } from "@mui/material";
import BarChart from "../../components/Charts/Bar";
import Dashboard from "@/components/Dashboard/Dashboard";
import { CardTitle, H1, H4 } from "@/components/typography/typography";
import TextArea from "@/components/forms/TextArea/TextArea";
import { useState } from "react";
import Post from "@/components/Posts/Post";

const Recognition = () => {
  const [comment, setComment] = useState("");
  const [posts, setPosts] = useState([
    {
        
    }
  ])
  const saveComment = () => {};
  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "background.page" }}
      >
        <Paper sx={{ padding: "16px", marginBottom: "24px" }}>
          <H4 sx={{ mb: 3 }}>Make a post</H4>
          <form onSubmit={saveComment}>
            <FormControl sx={{ mb: 3, width: "100%" }}>
              <TextArea
                label="Post"
                name="post"
                placeholder="Whats on your mind???"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
            </FormControl>
            <Button
              disabled={!comment}
              size="large"
              type="submit"
              variant="contained"
              sx={{ width: "100%" }}
            >
              Post
            </Button>
          </form>
        </Paper>
        <Paper sx={{ padding: "16px", marginBottom: "24px" }}>
          <H4 sx={{ mb: 3 }}>Recognition Feed</H4>
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </Paper>
      </Grid>
    </Dashboard>
  );
};

export default Recognition;
