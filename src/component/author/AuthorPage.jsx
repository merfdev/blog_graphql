import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import CardEL from "../shared/CardEL";
import sanitizeHtml from "sanitize-html";
import Loader from "../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader /> ;
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
          <Typography component="p" variant="h5" color="text.secendary" mt={2}>
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={4}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {data.author.name}
          </Typography>
          <Grid container spacing={2} mt={4}>
            {data.author.posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
