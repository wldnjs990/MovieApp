import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieJsonType } from "../types";
import Loading from "../components/public/Loading";
import DetailExplain from "../components/Detail/DetailExplain";
import DetailPlayBtn from "../components/Detail/DetailPlayBtn";
import DetailShadow from "../components/Detail/DetailShadow";
import DetailPoster from "../components/Detail/DetailPoster";
import DetailTrailer from "../components/Detail/DetailTrailer";

export default function Detail({
  loading,
  setLoading,
  fadeIn,
}: {
  loading: boolean;
  setLoading: (value: React.SetStateAction<boolean>) => void;
  fadeIn: string;
}) {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState<movieJsonType | null>();
  const [frameToggle, setFrameToggle] = useState<boolean>(false);

  const handleFrameToggle = () => {
    setFrameToggle((e) => !e);
  };

  // 현재 페이지 영화정보 fetch
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
          className={`w-full h-screen relative ${fadeIn}`}
          style={{
            background: `url(${currentMovie?.large_cover_image}) no-repeat center/cover`,
          }}
        >
          <span
            className="flex justify-center items-center w-[50px] h-[50px] bg-gray-600 hover:bg-slate-400 rounded-full absolute top-[30px] left-0 z-30 cursor-pointer "
            onClick={() => {
              history.back();
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}public/arrow.svg`}
              alt="화살표 아이콘"
            />
          </span>
          <DetailExplain currentMovie={currentMovie} />
          <DetailPlayBtn onClick={handleFrameToggle} />
          <DetailPoster currentMovie={currentMovie} />
          {frameToggle ? (
            <DetailTrailer
              src={`https://www.youtube-nocookie.com/embed/${currentMovie?.yt_trailer_code}?autoplay=1&mute=1`}
              onClick={handleFrameToggle}
            />
          ) : null}

          <DetailShadow />
        </article>
      )}
    </>
  );
}
