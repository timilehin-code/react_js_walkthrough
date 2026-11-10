import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        // Handle cases where data inside data.json is wrapped like { "blogs": [...] }
        const blogArray = Array.isArray(data) ? data : data.blogs;
        setBlogs(blogArray || []);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs.length > 0 && (
        <BlogList blogs={blogs} title={"All blogs!"}  />
      )}
    </div>
  );
};

export default HomePage;