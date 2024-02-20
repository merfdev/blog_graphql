import { useQuery } from "@apollo/client";
import { GET_BLOGS_QUERY } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";

function BlogPage() {
  const { data, error, loading } = useQuery(GET_BLOGS_QUERY);
  if (loading) return <h1>Loading...</h1>;
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

export default BlogPage;
