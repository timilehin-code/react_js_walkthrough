import { useState, useEffect } from "react";

const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    const timerId = setTimeout(() => {
      fetch(endPoint, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Could not fetch the data for that resource");
          }
          const contentType = res.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            throw new Error(`Endpoint "${endPoint}" returned HTML instead of JSON.`);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
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
      clearTimeout(timerId);
      abortCont.abort();
    };
  }, [endPoint]);

  return { data, isPending, error };
};

export default useFetch;