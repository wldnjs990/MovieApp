import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { useEffect, useState } from "react";
import { movieJsonType } from "./types";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [myMovie, setMymovie] = useState<movieJsonType[] | []>([]);
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState(1);
  // const [genre, setGenre] = useState("Action");
  const [allPage, setAllPage] = useState(1);

  const getMovies = async (rating: number, page: number) => {
    setLoading(true);
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}.0&sort_by=years&page=${page}`
      )
    ).json();
    setLoading(false);
    setMymovie(() => json.data.movies);
    setAllPage(() => Math.ceil(json.data.movie_count / json.data.limit));
  };

  useEffect(() => {
    getMovies(rating, page);
  }, []);

  const ratingChange = (event: number) => {
    setRating(() => Number(event));
  };

  // const genreChange = (event: string) => {
  //   setGenre(() => event);
  // };

  const next = () => {
    setPage((e) => e + 1);
  };

  const prev = () => {
    setPage((e) => e - 1);
  };

  useEffect(() => {
    sessionStorage.setItem("nowPage", "1");
    sessionStorage.setItem("nowGenre", "Action");
  }, []);
  return (
    <main className="min-w-screen min-h-screen bg-black text-white px-[50px]">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loading={loading}
              myMovie={myMovie}
              fadeIn={"animate-[fadeIn_0.5s_ease-in-out]"}
              getMovies={getMovies}
              setPage={setPage}
              ratingChange={ratingChange}
              // genreChange={genreChange}
              rating={rating}
              // genre={genre}
              page={page}
              next={next}
              prev={prev}
              allPage={allPage}
            />
          }
        ></Route>
        <Route
          path="/Detail/:id"
          element={
            <Detail
              loading={loading}
              setLoading={setLoading}
              fadeIn={"animate-[fadeIn_1s_ease-in-out]"}
            />
          }
        ></Route>
      </Routes>
    </main>
  );
}
