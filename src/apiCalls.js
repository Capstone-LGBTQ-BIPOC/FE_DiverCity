const fetchBusinesses = (location, category) => {
  return fetch(`https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=${location}&category=${category}`)
  .then(response => response.json())
}

export default fetchBusinesses;