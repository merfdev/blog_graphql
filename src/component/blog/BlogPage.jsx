import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h1>Error...</h1>;
  const { post } = data;
  console.log(post);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} mt={6} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {post.title}
          </Typography>
          <KeyboardDoubleArrowLeftIcon
            onClick={() => navigate(-1)}
            cursor="pointer"
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={post.coverPhoto.url}
            alt={post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={post.author.avatar.url}
            sx={{
              marginLeft: 2,
              width: 100,
              height: 100,
            }}
          />
          <Box>
            <Typography component="p" variant="h5" fontWeight={700}>
              {post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(post.content.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
