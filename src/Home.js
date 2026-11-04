import { useState } from "react";
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
      <div>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
