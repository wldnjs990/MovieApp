import Loading from "../components/Loading";
import MovieInfo from "../components/MovieInfo";
import { movieJsonType } from "../types";

export default function Home({
  loading,
  myMovie,
}: {
  loading: boolean;
  myMovie: movieJsonType[];
}) {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        myMovie.map((e) => {
          return (
            <MovieInfo
              id={e.id}
              cover_image={e.medium_cover_image}
              title={e.title}
              summary={e.summary}
              genres={e.genres}
              key={e.id}
            />
          );
        })
      )}
    </>
  );
}
