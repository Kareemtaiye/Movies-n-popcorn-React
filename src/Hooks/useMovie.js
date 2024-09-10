import { useState, useEffect } from "react";

export function useMovie(query) {
  const [movies, setMovies] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const KEY = "c10aba2f";

      const controller = new AbortController();
      async function fetchMovies() {
        setIsLoading(true);
        setErrorMsg("");
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
            { signal: controller.signal }
          );
          const data = await res.json();

          // console.log(data);
          if (data.Error) {
            throw new Error(data.Error);
          }
          if (data.Response === "False") {
            throw new Error("Something went wrong, please try again later!");
          }

          if (data.length <= 0) {
            throw new Error("Movie not found");
          }

          setMovies(data.Search);
        } catch (err) {
          console.error(err);
          setErrorMsg(err.message);
          setMovies([]);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setIsLoading(false);
        setMovies([]);
        setErrorMsg("");
        return;
      }

      fetchMovies();
      return function () {
        controller.abort("Batching requests!");
      };
    },
    [query]
  );

  return { movies, errorMsg, isLoading };
}
