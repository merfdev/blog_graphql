import { gql, useQuery } from "@apollo/client";
import Header from "./component/layout/Header";

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(QUERY);
  console.log({ loading, error, data });
  return (
    <>
      <Header />
    </>
  );
}

export default App;
