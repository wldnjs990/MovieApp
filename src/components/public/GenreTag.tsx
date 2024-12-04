export default function GenreTag({ genres }: { genres: string }) {
  return (
    <span className="p-[5px] border border-white rounded-md font-bold">
      {genres}
    </span>
  );
}
