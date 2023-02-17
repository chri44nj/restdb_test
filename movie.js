fetch("https://web2film-9d1b.restdb.io/rest/movies/63ea066baa86075000051761", {
  method: "get",
  headers: {
    "x-apikey": "63ea0303478852088da68144",
  },
})
  .then((e) => e.json())
  .then(showMovie);
function showMovie(movie) {
  console.log(movie);
  document.querySelector(".genre").textContent = movie.genre;
  document.querySelector(".year").textContent = movie.year;
  document.querySelector(".title").textContent = movie.title;
  document.querySelector(".poster").src = `img/${movie.poster}.webp`;
}
