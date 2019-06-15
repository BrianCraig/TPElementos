import Axios from "axios";

const host = 'http://localhost:9001' 

export const getHosts = () => Axios.get(`${host}/hosts`)
  .then( (response) => response.data._embedded)
  .catch(function (error) {
    console.log(error);
  })