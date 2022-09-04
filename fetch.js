import fetch from "node-fetch";

const getUrl = function () {
  const url = "http://api.icndb.com/jokes/random";
};

const getData = async function () {
  await fetch("http://api.icndb.com/jokes/random", {
    method: "GET",
    accept: "application/json",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.value.joke);
    })
    .catch((error) => {
      console.log(error);
    });
};

//getData();

const getJoke = async function () {
  let response = await fetch("http://api.icndb.com/jokes/random", {
    method: "GET",
    accept: "application/json",
  });
  return await response.json();
  //console.log(data.value.joke);
};

const data = await getJoke();
console.log(data.value.joke);
