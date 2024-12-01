import { Link } from "react-router-dom";

export default function MovieInfo({
  id,
  cover_image,
  title,
  summary,
  genres,
}: {
  id: number;
  cover_image: string;
  title: string;
  summary: string;
  genres: string[];
}) {
  return (
    <article className="border mb-[10px]">
      <img src={cover_image} alt={title} />
      <h1 className="font-bold text-[20px] mb-[10px]">
        <Link to={`/Detail/${id}`}>{title}</Link>
      </h1>
      <p className="mb-[10px]">{summary}</p>
      <ul>
        {genres.map((gen) => (
          <li key={gen}>- {gen}</li>
        ))}
      </ul>
    </article>
  );
}
