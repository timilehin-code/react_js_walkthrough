import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Tawose Oluwatimilehin");
  return (
    <div className="create">
      <h2 className="title">Add a new Blog</h2>
      <form action="" method="post">
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea required
        value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Tawose Oluwatimilehin">Tawose Oluwatimilehin</option>
          <option value="Ibituyi Silver">Ibituyi Silver</option>
        </select>
        <button>Add blog</button>
      </form>
      <p>{ title}</p>
      <p>{body}</p>
      <p>{ author}</p>
    </div>
  );
};

export default Create;
