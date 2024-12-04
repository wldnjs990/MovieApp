export default function DetailPlayBtn({ onClick }: { onClick: () => void }) {
  return (
    <span
      role="button"
      className={`w-[150px] h-[150px] bg-[url(/public/playBtn.svg)] hover:bg-[url(/public/playBtnHover.svg)] bg-no-repeat bg-cover absolute top-[50%] left-[50%] absolute_kit z-10 cursor-pointer`}
      onClick={onClick}
    ></span>
  );
}
