import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://doublesilva-grade-api-igti.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
