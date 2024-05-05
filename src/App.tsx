import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetails from "./pages/blog-details/blog-details";
import HomePage from "./pages/home/home-page";
import Register from "./pages/register/register";
import Signin from "./pages/signin/signin";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/blog" index element={<BlogDetails />} />
      <Route path="/register" index element={<Register />} />
      <Route path="/login" index element={<Signin />} />
    </Routes>
  );
}

export default App;
