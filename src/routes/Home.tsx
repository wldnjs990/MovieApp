import Loading from "../components/public/Loading";
import MovieInfo from "../components/Home/MovieInfo";
import { movieJsonType } from "../types";
import HomeNav from "../components/Home/HomeNav";

export default function Home({
  loading,
  myMovie,
  fadeIn,
  getMovies,
  setPage,
  ratingChange,
  // genreChange,
  rating,
  // genre,
  page,
  next,
  prev,
  allPage,
}: {
  loading: boolean;
  myMovie: movieJsonType[];
  fadeIn: string;
  getMovies: (rating: number, page: number) => Promise<void>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  ratingChange: (event: number) => void;
  // genreChange: (event: string) => void;
  rating: number;
  // genre: string;
  page: number;
  next: () => void;
  prev: () => void;
  allPage: number;
}) {
  return (
    <article className="pb-[50px]">
      {loading ? (
        <Loading />
      ) : (
        <>
          <HomeNav
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
          <article className={`${fadeIn} w-full flex flex-wrap justify-around`}>
            {myMovie.map((e) => {
              return (
                <MovieInfo
                  id={e.id}
                  cover_image={e.medium_cover_image}
                  title={e.title}
                  genres={e.genres}
                  key={e.id}
                  rating={e.rating}
                />
              );
            })}
          </article>
        </>
      )}
    </article>
  );
}
