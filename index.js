fetch("https://web2film-9d1b.restdb.io/rest/movies", {
  method: "get",
  headers: {
    "x-apikey": "63ea0303478852088da68144",
  },
})
  .then((e) => e.json())
  .then(doSomething);

function doSomething(data) {
  console.log(data);
}
