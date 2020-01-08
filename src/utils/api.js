import axios from 'axios';

export default axios.create({
  baseURL: 'http://18.222.210.223:8000/',
  withCredentials: true
});
