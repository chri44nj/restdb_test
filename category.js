fetch("https://web2film-9d1b.restdb.io/rest/movies?q={%22genre%22:%20%22horror%22}", {
  method: "get",
  headers: {
    "x-apikey": "63ea0303478852088da68144",
  },
})
  .then((e) => e.json())
  .then(showCategories);

function showCategories(categories) {
  console.log(categories);
  movies.forEach(showCategory);
}

// Vores funktion der kloner hver film og erstatter værdier i templaten med værdier fra filmene (ukomplet, indtil vi finder ud af hvordan man linker til vores database)
function showCategory(category) {
  console.log(category);
  const template = document.querySelector("#movieTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".title").textContent = movie.title;
  copy.querySelector(".description").textContent = movie.description;
  copy.querySelector(".genre").textContent = movie.genre;
  copy.querySelector(".year").textContent = movie.year;
  copy.querySelector(".length").textContent = movie.length + "m";
}
