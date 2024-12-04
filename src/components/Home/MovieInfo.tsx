import { Link } from "react-router-dom";
import GenreTag from "../public/GenreTag";

export default function MovieInfo({
  id,
  cover_image,
  title,
  genres,
  rating,
}: {
  id: number;
  cover_image: string;
  title: string;
  genres: string[];
  rating: number;
}) {
  return (
    <article className="border mb-[10px] w-[calc(100%/5-15px)] h-[600px] relative">
      <Link to={`/Detail/${id}`}>
        <article className="absolute w-full h-full z-10 flex flex-col items-center justify-center p-[20px] before:contents-['*'] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#0000009f] opacity-0 transition-opacity duration-500 hover:opacity-100">
          <h1 className="font-bold mb-[10px] text-[25px] text-center z-10">
            {title}
          </h1>
          <article className="flex flex-wrap gap-[5px] justify-center z-10 mb-[10px]">
            {genres
              ? genres.map((gen, i) => <GenreTag genres={gen} key={i} />)
              : null}
          </article>
          <article className="flex justify-center">
            <p className="z-10 text-center font-bold">⭐ {rating} / 10</p>
          </article>
        </article>
        <img
          src={cover_image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </Link>
    </article>
  );
}
