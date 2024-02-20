import { Route, Routes } from "react-router-dom";
import HomePage from "./component/home/HomePage";
import Layout from "./component/layout/Layout";
import AuthorPage from "./component/author/AuthorPage";
import BlogPage from "./component/blog/BlogPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />

        <Route />
      </Routes>
    </Layout>
  );
}

export default App;
