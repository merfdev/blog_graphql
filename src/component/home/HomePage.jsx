import { Container, Grid, Typography } from "@mui/material";
import Author from "../author/Author";
import Blog from "../blog/Blog";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} padding={3} mt={4}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            نویسنده ها
          </Typography>
          <Author />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات
          </Typography>
          <Blog />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
