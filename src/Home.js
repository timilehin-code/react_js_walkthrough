import { useState } from "react";
import BlogList from "./BlogList";
const HomePage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Getting Started with JavaScript",
      body: "JavaScript is a versatile programming language primarily used for web development...",
      author: "Alex Morgan",
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      body: "Hooks allow you to use state and other React features without writing a class...",
      author: "Sarah Jenkins",
    },
    {
      id: 3,
      title: "A Guide to Modern CSS Layouts",
      body: "Flexbox and CSS Grid have completely changed the way we design responsive web layouts...",
      author: "David Chen",
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All blogs!"}></BlogList>
      <BlogList blogs={blogs.filter((blog)=> blog.author == "David Chen" || blog.author == "Alex Morgan" )} title={"Timi's blogs!"}></BlogList>  
    </div>
  );
};

export default HomePage;
