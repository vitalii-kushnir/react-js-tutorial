import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://burger-app-d688f.firebaseio.com'
});

export default instance;