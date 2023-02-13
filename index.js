fetch("https://testdatabase-5148.restdb.io/rest/film", {
  method: "get",
  headers: {
    "x-apikey": "63e9f369478852088da68102",
  },
})
  .then((e) => e.json())
  .then(doSomething);

function doSomething(data) {
  console.log(data);
}
