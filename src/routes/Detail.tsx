import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieJsonType } from "../types";

export default function Detail() {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState<movieJsonType | null>();
  const getCurrentMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setCurrentMovie(json.data.movie);
  };
  useEffect(() => {
    getCurrentMovie();
  }, []);
  return <div>{currentMovie?.id}</div>;
}
