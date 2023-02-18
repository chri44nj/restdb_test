const urlParams = new URLSearchParams(window.location.search);
const movieGenre = urlParams.get("genre");

fetch(
  `https://web2film-9d1b.restdb.io/rest/movies?q={"genre": "${movieGenre}"}`,
  {
    method: "get",
    headers: {
      "x-apikey": "63ea0303478852088da68144",
    },
  }
)
  .then((e) => e.json())
  .then(showCategories);

function showCategories(categories) {
  console.log(categories);
  document.querySelector(".categoriesHeading").textContent = movieGenre;
  document.querySelector(".genrebreadcrumb").textContent = movieGenre;
  categories.forEach(showCategory);
}
function showCategory(category) {
  console.log(category);
  const template = document.querySelector("#categoryTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("img").src = `img/${category.poster}`;
  copy.querySelector("a").href = "movie.html?id=" + category._id;
  copy.querySelector(".genreNameCategories").textContent = category.genre;
  document.querySelector(".categoriesGrid").append(copy);
}
