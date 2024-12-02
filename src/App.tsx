import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { useEffect, useState } from "react";
import { movieJsonType } from "./types";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [myMovie, setMymovie] = useState<movieJsonType[] | []>([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
      )
    ).json();
    setLoading(false);
    setMymovie(json.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <main className="bg-black text-white">
      <Routes>
        <Route
          path="/"
          element={<Home loading={loading} myMovie={myMovie} />}
        ></Route>
        <Route
          path="/Detail/:id"
          element={<Detail loading={loading} setLoading={setLoading} />}
        ></Route>
      </Routes>
    </main>
  );
}
