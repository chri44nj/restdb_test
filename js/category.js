const urlParams = new URLSearchParams(window.location.search);
const movieGenre = urlParams.get("genre");

fetch(`https://web2film-9d1b.restdb.io/rest/movies?q={"genre": "${movieGenre}"}`, {
  method: "get",
  headers: {
    "x-apikey": "63ea0303478852088da68144",
  },
})
  .then((e) => e.json())
  .then(showCategories);

function showCategories(categories) {
  console.log(categories);
  document.querySelector(".welcomeGenre").textContent = movieGenre + "?";
  document.querySelector(".genrebreadcrumb").textContent = movieGenre;
  document.querySelector(".categoriesHeading").textContent = movieGenre;
  categories.forEach(showCategory);
}
function showCategory(category) {
  console.log(category);
  const template = document.querySelector("#categoryTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("img").src = `img/${category.poster}`;
  copy.querySelector("a").href = "movie.html?id=" + category._id;
  copy.querySelector(".genreNameCategories").textContent = category.title;
  document.querySelector(".categoriesGrid").append(copy);
}

const gridMaster = document.querySelector(".gridMaster");
gridMaster.style.height = `${window.innerHeight}px`;

const heroImg = document.querySelector(".heroImg");
heroImg.style.height = `${window.innerHeight}px`;

const movieSuggestion = document.querySelector(".movieSuggestion");
movieSuggestion.style.height = `${window.innerHeight}px`;
