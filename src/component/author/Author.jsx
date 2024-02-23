import { useQuery } from "@apollo/client";
import { GET_AUTHOR_QUERY } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

function Author() {
  const { loading, error, data } = useQuery(GET_AUTHOR_QUERY);
  if (loading) return <Loader />;
  if (error) return <h1>Error...</h1>;
  const { authors } = data;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {
            (index = !authors.length - 1 && (
              <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
            ))
          }
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Author;
