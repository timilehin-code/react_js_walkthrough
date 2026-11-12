import { useState, useEffect } from "react";
const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(endPoint, { signal: abortCont.signal })
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
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1500);
    return () => {
      abortCont.abort();
    };
  }, [endPoint]);

  return { data, isPending, error };
};

export default useFetch;
