
const axios = require('axios');

const galaxies = async () => {
  try {
    const [response1, response2] = await axios.all([
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-03-18'),
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-03-17')
    ]);
    console.log(response1)
    console.log(response2)
  } catch (error) {
    console.log(error.response.body);
  }
}

const ceps = async (ceps) => {
  try {
    // make multiple concurrent requests with axios.all
    return await axios.all(ceps.map((cep) => axios.get(`http://viacep.com.br/ws/${cep}/json/`)));
  } catch (error) {
    console.log('error: ', error);
  }
}


(async () => {
  // galaxies()
  const responses = await ceps(['97920000','89045090','97900000'])
  const data = responses.map((response) => response.data)
  console.log(data)
})();
