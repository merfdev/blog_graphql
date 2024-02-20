import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          display="flex"
          flexDirection="column"
          alignItems="center"
          xs={12}
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />

          <Typography component="h1" variant="h5" fontWeight="700" mt={4}>
            {data.author.name}
          </Typography>
          <Typography
            component="p"
            variant="h5"
            color="text.secendary"
            mt={2}
            b
          >
            {data.author.field}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
