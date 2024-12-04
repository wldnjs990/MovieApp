export default function DetailTrailer({
  src,
  onClick,
}: {
  src: string;
  onClick: () => void;
}) {
  return (
    <article className="w-full h-screen absolute top-0 left-0">
      <iframe
        src={src}
        width={"80%"}
        height={"80%"}
        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50`}
      ></iframe>
      <span
        className="w-full h-screen bg-[#00000070] absolute top-0 left-0 z-40"
        onClick={onClick}
      ></span>
    </article>
  );
}
