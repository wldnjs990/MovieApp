import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { movieJsonType } from "../types";
import Loading from "../components/Loading";
import YoutubePlayer from "../components/YoutubePlayer";

export default function Detail({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: (value: React.SetStateAction<boolean>) => void;
}) {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState<movieJsonType | null>();
  const [frameToggle, setFrameToggle] = useState<boolean>(false);
  const getCurrentMovie = async () => {
    setLoading(true);
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setCurrentMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getCurrentMovie();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <article
          className="w-screen h-screen relative"
          style={{
            background: `url(${currentMovie?.large_cover_image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[80%] h-screen bg-gradient-to-r from-black to-transparent absolute"></div>
          <span
            role="button"
            className={`w-[100px] h-[100px] bg-[url(/public/playBtn.svg)] hover:bg-[url(/public/playBtnHover.svg)] bg-no-repeat bg-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1 cursor-pointer`}
            onClick={() => {
              setFrameToggle(() => true);
            }}
          ></span>
          {frameToggle ? (
            <article className="w-screen h-screen absolute top-0 left-0">
              <YoutubePlayer
                src={`https://www.youtube-nocookie.com/embed/${currentMovie?.yt_trailer_code}?autoplay=1&mute=1`}
              />
              <span
                className="w-screen h-screen bg-[#00000070] absolute top-0 left-0 z-40"
                onClick={() => setFrameToggle(() => false)}
              ></span>
            </article>
          ) : null}

          <div className="w-[10%] h-screen bg-gradient-to-l from-black to-transparent absolute top-0 right-0"></div>
        </article>
      )}
    </>
  );
}
