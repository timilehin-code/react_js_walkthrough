import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();


  const { data: blogs, error, isPending } = useFetch("/data.json");
  const blogList = Array.isArray(blogs) ? blogs : blogs?.blogs;
  const blog = blogList?.find((item) => String(item.id) === String(id));

  return (
    <div className="blog-details">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {!isPending && !blog && <div>No blog found with ID: {id}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;