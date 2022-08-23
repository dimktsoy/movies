function fetchCustom(params, method = 'GET') {
  const apiKey = process.env.REACT_APP_API_KEY;

  return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&${params}`, {
    method,
  });
}

export default fetchCustom;
