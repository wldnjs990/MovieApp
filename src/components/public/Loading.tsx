export default function Loading() {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] origin-center">
      <img
        src="`/public/loading.svg`"
        alt=""
        className="w-[50px] h-[50px] animate-spin z-50"
      />
    </div>
  );
}
