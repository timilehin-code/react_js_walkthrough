import BlogList from "./BlogList";
import useFetch from "./useFetch";
const HomePage = () => {
  const {data: blogs, isPending, Error} = useFetch("/data.json");
  return (
    <div className="home">
      {Error && <div>{Error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs.length > 0 && <BlogList blogs={blogs} title={"All blogs!"} />}
    </div>
  );
};

export default HomePage;
