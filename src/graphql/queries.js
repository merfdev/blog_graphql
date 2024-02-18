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
export { GET_BLOGS_QUERY };
