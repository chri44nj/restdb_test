fetch("https://web2film-9d1b.restdb.io/rest/movies", {
  method: "get",
  headers: {
    "x-apikey": "63ea0303478852088da68144",
  },
})
  .then((e) => e.json())
  .then(showMovies);

function generateRandomNumber() {
  return Math.floor(Math.random() * 80);
}

function showMovies(movies) {
  console.log(movies);
  let rndNum = generateRandomNumber();
  document.querySelector(".movieSuggestionTitle").textContent =
    movies[rndNum].title;
  document.querySelector(
    ".movieSuggestionPoster"
  ).src = `img/${movies[rndNum].poster}`;
  if (movies[rndNum].streaming.includes("Netflix")) {
    document.querySelector(".streaming").href = `https://www.netflix.com/dk/`;
    document.querySelector(".streaming").textContent = `Go to Netflix`;
  } else {
    document.querySelector(".streaming").classList.add("hide");
  }

  if (movies[rndNum].streaming.includes("HBO Max")) {
    document.querySelector(".streaming2").href = `https://www.hbomax.com/dk/da`;
    document.querySelector(".streaming2").textContent = `Go to HBO max`;
  } else {
    document.querySelector(".streaming2").classList.add("hide");
  }

  if (movies[rndNum].streaming.includes("Disney+")) {
    document.querySelector(
      ".streaming3"
    ).href = `https://www.disneyplus.com/da-dk/`;
    document.querySelector(".streaming3").textContent = `Go to Disney+`;
  } else {
    document.querySelector(".streaming3").classList.add("hide");
  }
  if (movies[rndNum].streaming.includes("Viaplay")) {
    document.querySelector(".streaming4").href = `https://viaplay.dk/dk-da/`;
    document.querySelector(".streaming4").textContent = `Go to Viaplay`;
  } else {
    document.querySelector(".streaming4").classList.add("hide");
  }
  if (movies[rndNum].streaming.includes("Amazon Prime")) {
    document.querySelector(".streaming5").href = `https://www.primevideo.com/`;
    document.querySelector(".streaming5").textContent = `Go to Amazon Prime`;
  } else {
    document.querySelector(".streaming5").classList.add("hide");
  }
}
