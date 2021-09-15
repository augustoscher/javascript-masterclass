const axios = require('axios');

const PHRASAL_TERMS_SERVER_URL = 'http://localhost:8080/match';

const fetchPrhasalTerms = async (query) => {
  try {
    console.log(`fetching phrasal terms for query: ${query} ...`)
    const response = await axios.post(PHRASAL_TERMS_SERVER_URL, { text: query });
    return response.data;
  } catch(error){
    console.error('request error: ', error)
  }
}

module.exports = fetchPrhasalTerms;
