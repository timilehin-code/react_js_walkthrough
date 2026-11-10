import { useState, useEffect } from "react";
const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(endPoint)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          // Handle cases where data inside data.json is wrapped like { "blogs": [...] }
          const blogArray = Array.isArray(data) ? data : data.blogs;
          setData(blogArray || []);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 500);
  }, [endPoint]);

  return {data, isPending, error}
};

export default useFetch;
