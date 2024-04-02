import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetails from "./pages/blog-details/blog-details";
import HomePage from "./pages/home/home-page";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/blog" index element={<BlogDetails />} />
    </Routes>
  );
}

export default App;
