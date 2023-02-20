fetch("https://web2film-9d1b.restdb.io/rest/movies", {
  method: "get",
  headers: {
    "x-apikey": "63ea0303478852088da68144",
  },
})
  .then((e) => e.json())
  .then(showMovies);

function showMovies(movies) {
  console.log(movies);
  movies.forEach(showMovie);
}

// Vores funktion der kloner hver film og erstatter værdier i templaten med værdier fra filmene (ukomplet, indtil vi finder ud af hvordan man linker til vores database)
function showMovie(movie) {
  console.log(movie);
  const template = document.querySelector("#movieTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".title").textContent = movie.title;
  copy.querySelector(".description").textContent = movie.description;
  copy.querySelector(".genre").textContent = movie.genre;
  copy.querySelector(".year").textContent = movie.year;
  copy.querySelector(".length").textContent = movie.length + "m";
  copy.querySelector(".rating").textContent = "IMDB Rating: " + movie.rating;

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

  copy.querySelector(".poster").src = `https://kea-alt-del.dk/t7/images/webp/640/${movie.id}.webp`;
  copy.querySelector(".director").textContent = "Directed by: " + movie.director;
  copy.querySelector(".budget").textContent = "Budget: $" + movie.budget;
  copy.querySelector(".ageRating").textContent = "PG: " + movie.ageRating;
  copy.querySelector(".streaming").textContent = "Streaming on: " + movie.streaming;
}
