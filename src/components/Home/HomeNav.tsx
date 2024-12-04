import { useRef, useState } from "react";

export default function HomeNav({
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
  const [nowPage, setNowPage] = useState(
    Number(JSON.parse(sessionStorage.getItem("nowPage")!))
  );
  // const [nowGenre, setNowGenre] = useState(sessionStorage.getItem("nowGenre"));
  const selectRatingRef = useRef<HTMLSelectElement>(null);
  // const selectGenreRef = useRef<HTMLSelectElement>(null);
  return (
    <header className="w-full h-[100px] bg-black mb-[20px] flex flex-col justify-center items-center gap-[10px]">
      <article className="flex">
        <span
          onClick={() => {
            if (page > 1) {
              getMovies(rating, page - 1);
              prev();
            } else {
              alert("첫 페이지입니다.");
            }
          }}
        >
          이전
        </span>
        <span>
          {page} / {allPage}
        </span>
        <span
          onClick={() => {
            if (allPage > page) {
              getMovies(rating, page + 1);
              next();
            } else {
              alert("마지막 페이지입니다.");
            }
          }}
        >
          다음
        </span>
      </article>
      <article>
        <select
          defaultValue={Number(nowPage)}
          className="text-black rounded-md"
          ref={selectRatingRef}
        >
          <option value={1}>⭐1</option>
          <option value={2}>⭐2</option>
          <option value={3}>⭐3</option>
          <option value={4}>⭐4</option>
          <option value={5}>⭐5</option>
          <option value={6}>⭐6</option>
          <option value={7}>⭐7</option>
          <option value={8}>⭐8</option>
          <option value={9}>⭐9</option>
        </select>
        {/* <select
          defaultValue={nowGenre!}
          className="text-black rounded-md"
          ref={selectGenreRef}
        >
          <option value={"Action"}>Action</option>
          <option value={"Adventure"}>Adventure</option>
          <option value={"Animation"}>Animation</option>
          <option value={"Anime"}>Anime</option>
          <option value={"Comedy"}>Comedy</option>
          <option value={"Crime"}>Crime</option>
          <option value={"Documentary"}>Documentary</option>
          <option value={"Drama"}>Drama</option>
          <option value={"Family"}>Family</option>
          <option value={"Fantasy"}>Fantasy</option>
          <option value={"Horror"}>Horror</option>
          <option value={"Lifestyle"}>Lifestyle</option>
          <option value={"Music"}>Music</option>
          <option value={"Musical"}>Musical</option>
          <option value={"Mystery"}>Mystery</option>
          <option value={"Sci-Fi"}>Sci-Fi</option>
        </select> */}
        <span
          onClick={() => {
            const rating = Number(selectRatingRef.current?.value);
            getMovies(rating, 1);
            setPage(() => 1);
            ratingChange(rating);
            setNowPage(rating);
            sessionStorage.setItem("nowPage", JSON.stringify(rating));
            // const genre = selectGenreRef.current?.value!;
            // genreChange(genre);
            // setNowGenre(genre);
            // sessionStorage.setItem("nowGenre", JSON.stringify(genre));
          }}
        >
          검색!
        </span>
      </article>
    </header>
  );
}
