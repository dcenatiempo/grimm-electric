import axios from 'axios';
import config from 'utils/config';

const instance = axios.create({
    baseURL: config.API_URL,
    timeout: 1000,
    headers: {}
  });

  export default instance;