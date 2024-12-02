export default function YoutubePlayer({ src }: { src: string }) {
  return (
    <iframe
      src={src}
      width={"80%"}
      height={"80%"}
      className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50`}
    ></iframe>
  );
}
