import { movieJsonType } from "../../types";
import GenreTag from "../public/GenreTag";

export default function DetailExplain({
  currentMovie,
}: {
  currentMovie: movieJsonType | null | undefined;
}) {
  return (
    <article className="w-[60%] h-screen flex flex-col justify-center absolute top-0 left-0 z-10">
      <article>
        <p>⭐ {currentMovie?.rating} / 10</p>
        <p className="text-gray-400">
          {currentMovie?.year}YEARS · {currentMovie?.runtime}MIN
        </p>
      </article>
      <article className="w-[75%]">
        <h2 className="text-[50px]">{currentMovie?.title}</h2>
        <article className="flex gap-[10px] mb-[20px]">
          {currentMovie?.genres.map((e, i) => (
            <GenreTag genres={e} key={i} />
          ))}
        </article>
        <article className="w-full max-h-[250px] overflow-y-scroll md:scrollbar-default">
          <p>{currentMovie?.description_full}</p>
        </article>
      </article>
    </article>
  );
}
