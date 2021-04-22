export default async function getPlanets() {
  const dataAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return dataAPI.results;
}
