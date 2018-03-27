const axios = require('axios');

module.exports = {
  fetchPopularRepos: (language) => {
    const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`); // encodes the URL string to be less human readable, ie :> to some %E10

    return axios.get(encodedURI)
      .then((response) => {
        return response.data.items;
      });
  }
}