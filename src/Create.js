import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Tawose Oluwatimilehin");
  const [errors, setError] = useState({});
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();
  const validate = () => {
    const newErrors = {};

    // .trim() removes empty spaces so users can't submit just "   "
    if (!title.trim()) {
      newErrors.title = "Title is required";
    } else if (title.trim().length < 5) {
      newErrors.title = "Title must be at least 5 characters";
    }

    if (!body.trim()) {
      newErrors.body = "Blog body is required";
    } else if (body.trim().length < 20) {
      newErrors.body = "Body must be at least 20 characters";
    }

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
      return;
    }
    setError({});
    const blog = {
      title: title.trim(),
      body: body.trim(),
      author,
    };
    setIsPending(true);
    fetch(`http://localhost:8000/blogs`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log(`new blog created!`);
      setIsPending(false);
      history("/");
    });
  };
  return (
    <div className="create">
      <h2 className="title">Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (errors.title) setError({ ...errors, title: "" });
          }}
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
            // Clear the body error as soon as the user starts typing again
            if (errors.body) setError({ ...errors, body: "" });
          }}
        ></textarea>
        {errors.body && <p style={{ color: "red" }}>{errors.body}</p>}
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Tawose Oluwatimilehin">Tawose Oluwatimilehin</option>
          <option value="Ibituyi Silver">Ibituyi Silver</option>
        </select>
        {isPending && <button disabled>Adding blog...</button>}
        {!isPending && <button>Add blog</button>}
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
