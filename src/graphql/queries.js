import { gql } from "@apollo/client";

const GET_BLOGS_QUERY = gql`
  query {
    posts {
      author {
        ... on Author {
          name
          avatar {
            url
          }
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;
const GET_AUTHOR_QUERY = gql`
  query {
    authors {
      name
      id
      slug
      avatar {
        url
      }
    }
  }
`;
const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        slug
        title
        id
        coverPhoto {
          url
        }
      }
    }
  }
`;
const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    post(where: { slug: $slug }) {
      comment {
        name
        id
        text
      }
    }
  }
`;
const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          avatar {
            url
          }
          name
          field
        }
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`;
export {
  GET_BLOGS_QUERY,
  GET_AUTHOR_QUERY,
  GET_AUTHOR_INFO,
  GET_POST_INFO,
  GET_POST_COMMENTS,
};
