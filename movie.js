const urlParams = new URLSearchParams(window.location.search);
const movieID = urlParams.get("id");

fetch("https://web2film-9d1b.restdb.io/rest/movies/" + movieID, {
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
  document.querySelector(".title").textContent = movie.title;
  document.querySelector(".title2").textContent = movie.title;
  document.querySelector(".rating").textContent = movie.rating;
  document.querySelector(".description").textContent = movie.description;
  document.querySelector(".genre2").textContent = `Genre: ${movie.genre}`;
  document.querySelector(".year").textContent = `Year: ${movie.year}`;
  document.querySelector(".length").textContent = `Length: ${movie.length}m.`;
  document.querySelector(".poster").src = `img/${movie.poster}`;
  document.querySelector(".director").textContent = `Director: ${movie.director}`;
  document.querySelector(".budget").textContent = `Budget: $${movie.budget}`;

  if (movie.oscarNominated) {
    copy.querySelector(".oscarNominated").textContent = movie.oscarNominated + " Oscar nominations";
  } else {
    copy.querySelector(".oscarNominated").classList.add("hide");
    copy.querySelector(".oscarWinner").classList.add("hide");
  }

  if (movie.oscarWinner) {
    copy.querySelector(".oscarWinner").textContent = movie.oscarWinner + " Oscar wins";
  } else {
    copy.querySelector(".oscarWinner").classList.add("hide");
  }
}
