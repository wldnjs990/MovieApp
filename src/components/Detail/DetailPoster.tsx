import { movieJsonType } from "../../types";

export default function DetailPoster({
  currentMovie,
}: {
  currentMovie: movieJsonType | null | undefined;
}) {
  return (
    <figure className="absolute_kit top-[50%] right-[5%] w-[400px] h-[500px] border border-white rounded-md shadow-xl shadow-gray-800">
      <img
        src={currentMovie?.medium_cover_image}
        alt={currentMovie?.title}
        className="w-full h-full object-cover rounded-md"
      />
    </figure>
  );
}
