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
  document.querySelector(".description").textContent = movie.description;
  document.querySelector(".genre").textContent = movie.genre;
  document.querySelector(".genre2").textContent = `Genre: ${movie.genre}`;
  document.querySelector(".year").textContent = `Year: ${movie.year}`;
  document.querySelector(".length").textContent = `Length: ${movie.length}m.`;
  document.querySelector(".title").textContent = movie.title;
  document.querySelector(".title2").textContent = movie.title;
  document.querySelector(".poster").src = `img/${movie.poster}`;
  document.querySelector(
    ".director"
  ).textContent = `Director: ${movie.director}`;
  document.querySelector(".budget").textContent = `Budget: $${movie.budget}`;
}