import { useQuery } from "@apollo/client";
import { GET_BLOGS_QUERY } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function Blog() {
  const { loading, error, data } = useQuery(GET_BLOGS_QUERY);
  if (loading) return <Loader />;
  if (error) return <h1>Error...</h1>;
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blog;
