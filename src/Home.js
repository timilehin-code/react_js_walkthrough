import BlogList from "./BlogList";
import useFetch from "./useFetch";

const HomePage = () => {
  const { data, isPending, error } = useFetch("/data.json");

  // Safely handle both [...] and { "blogs": [...] } structures
  const blogList = Array.isArray(data) ? data : data?.blogs;

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogList && blogList.length > 0 && (
        <BlogList blogs={blogList} title={"All blogs!"} />
      )}
    </div>
  );
};

export default HomePage;