import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/fonts.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import theme from "./mui/theme.jsx";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clsgia39521ii01w64hankr82/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
