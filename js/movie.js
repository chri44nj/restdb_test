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
  document.querySelector(".movieTitle").textContent = movie.title;
  document.querySelector(".rating").textContent = movie.rating;
  document.querySelector(".description").textContent = movie.description;
  document.querySelector(".genre2").textContent = `${movie.genre}`;
  document.querySelector(".year").textContent = `${movie.year}`;
  document.querySelector(".length").textContent = `${movie.length}m`;
  document.querySelector(".poster").src = `img/${movie.poster}`;
  document.querySelector(".director").textContent = `${movie.director}`;
  document.querySelector(".budget").textContent = `$${movie.budget}`;
  if (movie.oscarNominated) {
    document.querySelector(".oscarNominated").textContent = `Oscar nominated`;
  } else {
    document.querySelector(".oscarNominated").classList.add("hide");
  }

  if (movie.oscarWinner) {
    document.querySelector(".oscarWinner").textContent = `Oscar winner`;
  } else {
    document.querySelector(".oscarWinner").classList.add("hide");
  }
  if (movie.streaming.includes("Netflix")) {
    document.querySelector(".streaming").href = `https://www.netflix.com/dk/`;
    document.querySelector(".streaming").textContent = `Netflix`;
  } else {
    document.querySelector(".streaming").classList.add("hide");
  }

  if (movie.streaming.includes("HBO Max")) {
    document.querySelector(".streaming2").href = `https://www.hbomax.com/dk/da`;
    document.querySelector(".streaming2").textContent = `HBO max`;
  } else {
    document.querySelector(".streaming2").classList.add("hide");
  }

  if (movie.streaming.includes("Disney+")) {
    document.querySelector(".streaming3").href = `https://www.disneyplus.com/da-dk/`;
    document.querySelector(".streaming3").textContent = `Disney+`;
  } else {
    document.querySelector(".streaming3").classList.add("hide");
  }
  if (movie.streaming.includes("Viaplay")) {
    document.querySelector(".streaming4").href = `https://viaplay.dk/dk-da/`;
    document.querySelector(".streaming4").textContent = `Viaplay`;
  } else {
    document.querySelector(".streaming4").classList.add("hide");
  }
  if (movie.streaming.includes("Amazon Prime")) {
    document.querySelector(".streaming5").href = `https://www.primevideo.com/`;
    document.querySelector(".streaming5").textContent = `Amazon Prime`;
  } else {
    document.querySelector(".streaming5").classList.add("hide");
  }
}

const gridMaster = document.querySelector(".gridMaster");
gridMaster.style.height = `${window.innerHeight}px`;

const heroImg = document.querySelector(".heroImg");
heroImg.style.height = `${window.innerHeight}px`;

const movieSuggestion = document.querySelector(".movieSuggestion");
movieSuggestion.style.height = `${window.innerHeight}px`;

const movieInfo = document.querySelector(".movieInfo");
movieInfo.style.height = `${window.innerHeight}px`;

const poster = document.querySelector(".poster");
poster.style.height = `${window.innerHeight}px`;
