export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGIwODNmMDczNjY2M2I3OGM1OTUyZjNhYWI2YzhmMyIsIm5iZiI6MTczMzIyMzc5MS40NDgsInN1YiI6IjY3NGVlNTZmMmNlNGNlN2RkNjA5NTZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kTDq2EB375Lw-3tx5eeMR12u_BhoygIP5pq_KICZPnA",
  },
};
const getTMDB = () => {
  fetch("https://api.themoviedb.org/3/tv/changes?page=1", options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
